const express = require('express');
const sqlz = require('../services/sequelize');

const router = express.Router();

router.get('/api/searchAllItems/', (req, res) => {
  const { tag } = req.query;

  sqlz.Tag.findAll({
    include: 'items',
    where: {
      content: tag,
    },
  })
    .then((tags) => tags)
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
