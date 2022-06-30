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

  sqlz.User.findOrCreate({
    include: [
      {
        model: sqlz.Like,
        attributes: ['itemId'],
      },
    ],
    where: {
      userId: id,
      name,
      surname,
    },
    defaults: {
      isOnline: true,
    },
  })
    .then(([user, created]) => {
      res.status(200).send({
        isNewUser: created,
        user,
      });
    })
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.get('/api/getTargetUser/', (req, res) => {
  const { userId } = req.query;

  sqlz.User.findOne({ where: { id: userId } })
    .then((response) => res.status(200).send(response))
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
