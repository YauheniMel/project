const express = require('express');
const multer = require('multer');
const { Op } = require('sequelize');
const sharp = require('sharp');
const models = require('../services/sequelize');

const PAGE_SIZE = 2; // suppose that need 'findAndCountAll'

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, `collectionAvatar-${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
});

const router = express.Router();

router.get('/api/getBigCollections', (req, res) => {
  models.Collection.findAll({
    order: [[models.Item.associations, 'id', 'DESC']],
    limit: 5,
  })
    .then((response) => {
      let resWithImg;
      if (response) {
        resWithImg = response.map((collection) => {
          const { icon } = collection;
          if (icon) {
            collection.icon = Buffer.from(icon).toString('base64');
          }

          return collection;
        });
      }
      res.status(200).send(resWithImg);
    })
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.get('/api/getCollection/', (req, res) => {
  const { collectionId } = req.query;

  models.Collection.findOne({
    include: [
      {
        model: models.Item,
      },
    ],
    where: {
      id: collectionId,
    },
  })
    .then((response) => {
      if (response) {
        const { icon } = response;

        if (icon) {
          response.icon = Buffer.from(icon).toString('base64');
        }
      }

      return res.status(200).send(response);
    })
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.get('/api/getMyCollections/', (req, res) => {
  const { userId, page } = req.query;

  const limit = PAGE_SIZE * page;

  models.Collection.findAll({
    where: {
      userId,
    },
    order: [['createdAt', 'DESC']],
    limit,
  })
    .then((response) => {
      let resWithImg;
      if (response) {
        resWithImg = response.map((collection) => {
          const { icon } = collection;
          if (icon) {
            collection.icon = Buffer.from(icon).toString('base64');
          }

          return collection;
        });
      }
      return res.status(200).send(resWithImg);
    })
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.get('/api/getUserCollections/', (req, res) => {
  const { userId, page } = req.query;

  const limit = PAGE_SIZE * page;

  models.Collection.findAll({
    where: {
      id: userId,
    },
    order: [['createdAt', 'DESC']],
    limit,
  })
    .then((response) => {
      let resWithImg;
      if (response) {
        resWithImg = response.map((collection) => {
          const { icon } = collection;
          if (icon) {
            collection.icon = Buffer.from(icon).toString('base64');
          }

          return collection;
        });
      }
      return res.status(200).send(resWithImg);
    })
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.get('/api/getTargetCollections/', (req, res) => {
  const { userId, page } = req.query;
  const limit = PAGE_SIZE * page;
  models.User.findAll({
    include: [
      {
        model: models.Collection,
        limit,
      },
    ],
    where: {
      id: userId,
    },
  })
    .then((response) => {
      const dataWithImg = response.map((data) => {
        let resWithImg;

        if (data.collections) {
          resWithImg = data.collections.map((collection) => {
            const { icon } = collection;
            if (icon) {
              collection.icon = Buffer.from(icon).toString('base64');
            }

            return collection;
          });
        }

        data.collections = resWithImg;

        return data;
      });

      return res.status(200).send(dataWithImg);
    })
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.put('/api/setEditCollection/', (req, res) => {
  const { collectionId } = req.body;

  models.Collection.update(
    { isEdit: true, isDelete: false },
    { where: { id: +collectionId } },
  )
    .then(() => res.status(200).send({
      code: 1,
    }))
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.delete('/api/deleteCollection/', (req, res) => {
  const { id } = req.query;

  models.Collection.destroy({
    where: {
      id,
    },
  })
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.put('/api/pullOutCollection/', (req, res) => {
  const { collectionId } = req.body;

  models.Collection.update(
    { isEdit: false, isDelete: false },
    { where: { id: +collectionId } },
  )
    .then(() => res.status(200).send({
      code: 1,
    }))
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.put('/api/setDeleteCollection/', (req, res) => {
  const { collectionId } = req.body;

  models.Collection.update(
    { isDelete: true, isEdit: false },
    { where: { id: collectionId } },
  )
    .then(() => res.status(200).send({
      code: 1,
    }))
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.put(
  '/api/updateCollection/',
  upload.single('icon'),
  async (req, res) => {
    const { collectionId } = req.body;

    const allProperties = {
      ...req.body,
    };

    const newCollectionField = Object.keys(allProperties).filter(
      (propertie) => allProperties[propertie],
    );

    const dataForUpdate = {};
    newCollectionField.forEach((field) => {
      if (allProperties[field] && allProperties[field] !== 'null') {
        // need to change 'null'
        dataForUpdate[field] = allProperties[field];
      }
    });

    if (req.file) {
      dataForUpdate.icon = await sharp(req.file.path).resize(300).toBuffer();
    }

    models.Collection.update(
      {
        id: collectionId,
        ...dataForUpdate,
      },
      { where: { id: collectionId } },
    )
      .then(([response]) => res.status(200).send({
        code: 1,
        id: response,
      }))
      .catch((err) => res.status(400).send({
        code: 0,
        message: err,
      }));
  },
);

router.get('/api/getEditCollections/', (req, res) => {
  const { userId } = req.query;

  models.Collection.findAll({ where: { isEdit: true, userId } })
    .then((response) => {
      let resWithImg;
      if (response) {
        resWithImg = response.map((collection) => {
          const { icon } = collection;
          if (icon) {
            collection.icon = Buffer.from(icon).toString('base64');
          }

          return collection;
        });
      }
      return res.status(200).send(resWithImg);
    })
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.get('/api/getAllCollections/', (req, res) => {
  const { userId } = req.query;

  models.User.findAll({
    include: [
      {
        model: models.Collection,
        limit: 2,
      },
    ],
    where: {
      id: {
        [Op.ne]: userId,
      },
    },
  })
    .then((response) => {
      const dataWithImg = response.map((data) => {
        let resWithImg;

        if (data.collections) {
          resWithImg = data.collections.map((collection) => {
            const { icon } = collection;
            if (icon) {
              collection.icon = Buffer.from(icon).toString('base64');
            }

            return collection;
          });
        }

        data.collections = resWithImg;

        return data;
      });

      return res.status(200).send(dataWithImg);
    })
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.get('/api/getDeleteCollections/', (req, res) => {
  const { userId } = req.query;

  models.Collection.findAll({ where: { isDelete: true, userId } })
    .then((response) => {
      let resWithImg;
      if (response) {
        resWithImg = response.map((collection) => {
          const { icon } = collection;
          if (icon) {
            collection.icon = Buffer.from(icon).toString('base64');
          }

          return collection;
        });
      }
      return res.status(200).send(resWithImg);
    })
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.post(
  '/api/createCollection',
  upload.single('icon'),
  async (req, res) => {
    const {
      title,
      userId,
      description,
      theme,
      dateKeys,
      radioKeys,
      multiLineKeys,
      numberKeys,
      textKeys,
      checkboxKeys,
    } = JSON.parse(JSON.stringify(req.body));

    let profilePicture = null;

    if (req.file) {
      profilePicture = await sharp(req.file.path).resize(300).toBuffer();
    }

    function prepareFields(data, type) {
      const obj = {};

      if (type === 'checkboxKey' && data !== 'null') {
        const arr = JSON.parse(data);

        for (let i = 0; i < 3; i++) {
          obj[`${type}${i + 1}`] = arr[i] ? arr[i][`${type}${i + 1}`] : null;
        }
      } else if (data !== 'null') {
        // bad condition
        const arr = data.split(',');
        for (let i = 0; i < 3; i++) {
          obj[`${type}${i + 1}`] = arr[i] ? arr[i] : null;
        }
      }

      return obj;
    }

    const customFields = {
      ...prepareFields(radioKeys, 'radioKey'),
      ...prepareFields(dateKeys, 'dateKey'),
      ...prepareFields(multiLineKeys, 'multiLineKey'),
      ...prepareFields(numberKeys, 'numberKey'),
      ...prepareFields(textKeys, 'textKey'),
      ...prepareFields(checkboxKeys, 'checkboxKey'),
    };

    models.Collection.create({
      icon: profilePicture,
      description,
      title,
      theme,
      ...customFields,
      userId,
    })
      .then((response) => {
        const { icon } = response;

        if (icon) {
          response.icon = Buffer.from(icon).toString('base64');
        }

        return res.status(200).send(response);
      })
      .catch((err) => res.status(400).send({
        code: 0,
        message: err,
      }));
  },
);

module.exports = router;
