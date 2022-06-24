const express = require('express');
const multer = require('multer');
const fs = require('fs');
const sqlz = require('../services/sequelize');

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, `collection-${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
});

const router = express.Router();

router.get('/api/getItem/', (req, res) => {
  const { itemId, collectionId } = req.query;

  sqlz.Item.findOne({
    where: {
      id: itemId,
      collectionId,
    },
  })
    .then((response) => {
      if (response) {
        const { icon } = response;

        if (icon) {
          response.icon = Buffer.from(icon).toString('base64');
        }
      }

      res.status(200).send(response);
    })
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.get('/api/getLastAddItems', (req, res) => {
  sqlz.Item.findAll({
    limit: 5,
  })
    .then((response) => {
      let resWithImg;
      if (response) {
        resWithImg = response.map((item) => {
          const { icon } = item;
          if (icon) {
            item.icon = Buffer.from(icon).toString('base64');
          }

          return item;
        });
      }
      res.status(200).send(resWithImg);
    })
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.get('/api/getCollectionItems/', (req, res) => {
  const { collectionId } = req.query;

  sqlz.Item.findAll({
    where: {
      collectionId,
    },
    limit: 5,
  })
    .then((response) => {
      let resWithImg;
      if (response) {
        resWithImg = response.map((item) => {
          const { icon } = item;
          if (icon) {
            item.icon = Buffer.from(icon).toString('base64');
          }

          return item;
        });
      }
      res.status(200).send(resWithImg);
    })
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.post('/api/createItem', upload.single('icon'), (req, res) => {
  const {
    collectionId,
    title,
    tags,
    comments,
    countLike,
    dateKey1: dateValue1 = null,
    dateKey2: dateValue2 = null,
    dateKey3: dateValue3 = null,
    multiLineKey1: multiLineValue1 = null,
    multiLineKey2: multiLineValue2 = null,
    multiLineKey3: multiLineValue3 = null,
    numberKey1: numberValue1 = null,
    numberKey2: numberValue2 = null,
    numberKey3: numberValue3 = null,
    textKey1: textValue1 = null,
    textKey2: textValue2 = null,
    textKey3: textValue3 = null,
    checkboxKey1: checkboxValue1 = null,
    checkboxKey2: checkboxValue2 = null,
    checkboxKey3: checkboxValue3 = null,
  } = JSON.parse(JSON.stringify(req.body));

  let profilePicture = null;
  if (req.file) {
    profilePicture = Buffer.from(fs.readFileSync(req.file.path));
  }

  sqlz.Item.create({
    icon: profilePicture || null,
    title,
    tags,
    comments,
    countLike,
    dateValue1,
    dateValue2,
    dateValue3,
    multiLineValue1,
    multiLineValue2,
    multiLineValue3,
    numberValue1,
    numberValue2,
    numberValue3,
    textValue1,
    textValue2,
    textValue3,
    checkboxValue1,
    checkboxValue2,
    checkboxValue3,
    collectionId,
  })
    .then(() => {
      res.status(200).send({
        code: 1,
        message: 'Create item success!',
      });
    })
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.delete('/api/deleteItem/', (req, res) => {
  const { itemId } = req.query;

  console.log(itemId);

  sqlz.Item.destroy({
    where: {
      id: itemId,
    },
  })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

module.exports = router;
