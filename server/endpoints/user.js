const express = require('express');
const sqlz = require('../services/sequelize');

const router = express.Router();

router.post('/api/signUpUser', (req, res) => {
  const { name, surname, id } = req.body;

  sqlz.User.create({
    userId: id,
    name,
    surname,
    isOnline: true,
  })
    .then(() => res.status(200).send({
      code: 1,
      message: 'SignUp success!',
    }))
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.get('/api/getUserInfo/', (req, res) => {
  const { id, name, surname } = req.query;

  sqlz.User.findOne({ where: { userId: id } })
    .then((response) => {
      if (!response) {
        return sqlz.User.create({
          userId: id,
          name,
          surname,
          isOnline: true,
        }).then((newUser) => res.status(200).send(newUser));
      }
      return res.status(200).send(response);
    })
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.post('/api/loginUser', (req, res) => {
  const { id } = req.body;

  sqlz.User.update({ isOnline: true, loginDate: new Date() }, { where: { id } })
    .then(() => res.status(200).send({
      code: 1,
      message: 'Login success!',
    }))
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.post('/api/logOutUser', (req, res) => {
  const { id } = req.body;

  sqlz.User.update({ isOnline: false }, { where: { id } })
    .then(() => res.status(200).send({
      code: 1,
      message: 'Logout success!',
    }))
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

module.exports = router;
