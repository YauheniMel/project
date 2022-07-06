const express = require('express');
const models = require('../services/sequelize');

const router = express.Router();

router.get('/api/getAllTags', (req, res) => {
  models.Tag.findAll({
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

  models.Tag.findOne({
    where: {
      content: tag,
    },
    include: [
      {
        model: models.Item,
        as: 'items',
        include: [
          {
            model: models.Like,
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

  models.Tag.findAll({
    where: models.sequelize.literal(`
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
