const express = require('express');
const multer = require('multer');
const fs = require('fs');
const sqlz = require('../services/sequelize');

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
  sqlz.Collection.findAll({
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

  sqlz.Collection.findOne({
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
  const { userId } = req.query;

  sqlz.Collection.findAll({
    where: {
      userId,
    },
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
      return res.status(200).send(resWithImg);
    })
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.put('/api/setEditCollection/', (req, res) => {
  const { collectionId } = req.body;

  sqlz.Collection.update(
    { isEdit: true, isDelete: false },
    { where: { id: +collectionId } },
  )
    .then(([response]) => res.status(200).send({
      code: 1,
      id: response,
    }))
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.put('/api/setDeleteCollection/', (req, res) => {
  const { collectionId } = req.body;

  sqlz.Collection.update(
    { isDelete: true, isEdit: false },
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
});

router.get('/api/getEditCollections/', (req, res) => {
  const { userId } = req.query;

  sqlz.Collection.findAll({ where: { isEdit: true, userId } })
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

router.get('/api/getDeleteCollections/', (req, res) => {
  const { userId } = req.query;

  sqlz.Collection.findAll({ where: { isDelete: true, userId } })
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

router.post('/api/createCollection', upload.single('icon'), (req, res) => {
  const {
    userId,
    description,
    theme,
    dateKeys,
    multiLineKeys,
    numberKeys,
    textKeys,
    checkboxKeys,
  } = JSON.parse(JSON.stringify(req.body));

  let profilePicture = null;
  if (req.file) {
    profilePicture = Buffer.from(fs.readFileSync(req.file.path));
  }

  function prepareFields(data, type) {
    const obj = {};

    if (type === 'checkboxKey') {
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
    ...prepareFields(dateKeys, 'dateKey'),
    ...prepareFields(multiLineKeys, 'multiLineKey'),
    ...prepareFields(numberKeys, 'numberKey'),
    ...prepareFields(textKeys, 'textKey'),
    ...prepareFields(checkboxKeys, 'checkboxKey'),
  };

  console.log(customFields);

  sqlz.Collection.create({
    icon: profilePicture || null,
    description,
    theme,
    ...customFields,
    userId,
  })
    .then(() => res.status(200).send({
      code: 1,
      message: 'Create collection success!',
    }))
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

module.exports = router;
