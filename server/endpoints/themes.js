const express = require('express');
const models = require('../services/sequelize');

const router = express.Router();

router.get('/api/getThemes', (req, res) => {
  models.Theme.findAll()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

module.exports = router;
