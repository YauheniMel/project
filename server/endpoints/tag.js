const express = require('express');
const sqlz = require('../services/sequelize');

const router = express.Router();

router.get('/api/getAllTags', (req, res) => {
  sqlz.Tag.findAll({
    attributes: ['content'],
  })
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.get('/api/searchItemsByTag/', (req, res) => {
  const { tag } = req.query;

  sqlz.Tag.findOne({
    where: {
      content: tag,
    },
    include: [
      {
        model: sqlz.Item,
        as: 'items',
        include: [
          {
            model: sqlz.Like,
            attributes: ['itemId'],
          },
        ],
      },
    ],
  })
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.get('/api/searchMatchTag/', (req, res) => {
  const { tag } = req.query;

  sqlz.Tag.findAll({
    where: sqlz.sequelize.literal(`
    MATCH(
      content
      ) AGAINST('${tag}*' IN BOOLEAN MODE)`),
  })
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

module.exports = router;
