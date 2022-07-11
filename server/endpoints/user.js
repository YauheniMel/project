const express = require('express');
const Roles = require('../../seeders/utils/Roles');
const models = require('../services/sequelize');

const router = express.Router();

router.post('/api/signUpUser', (req, res) => {
  const {
    name, surname, id, email,
  } = req.body;

  models.User.create({
    userId: id,
    name,
    surname,
    email,
  })
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.get('/api/getUserInfo/', (req, res) => {
  const {
    id, name, surname, email,
  } = req.query;

  models.User.findOrCreate({
    where: {
      userId: id,
      name,
      surname,
      email,
    },
    include: {
      model: models.Like,
      attributes: ['itemId'],
    },
  })
    .then(([user, created]) => res.status(200).send({ user, isNew: created }))
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.get('/api/getTargetUser/', (req, res) => {
  const { userId } = req.query;

  models.User.findOne({
    where: { id: userId },
    include: [
      {
        model: models.Collection,
      },
    ],
  })
    .then((response) => {
      let resWithImg;
      if (response) {
        resWithImg = response.collections.map((collection) => {
          const { icon } = collection;
          if (icon) {
            collection.icon = Buffer.from(icon).toString('base64');
          }

          return collection;
        });
      }

      const result = {
        name: response.name,
        surname: response.surname,
        id: response.id,
        collections: {
          collections: resWithImg,
          countCollections: resWithImg.length,
        },
      };

      return res.status(200).send(result);
    })
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.get('/api/getAllUsers/', (req, res) => {
  models.User.findAll()
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.post('/api/loginUser', (req, res) => {
  const { id } = req.body;

  models.User.update({ loginDate: new Date() }, { where: { id } })
    .then(() => res.status(200).send({
      code: 1,
      message: 'Login success!',
    }))
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.post('/api/deleteUser', (req, res) => {
  const { id } = req.body;

  models.User.destroy({
    where: { id },
  })
    .then(() => res.status(200).send({
      code: 1,
      message: 'Delete success!',
    }))
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.post('/api/logOutUser', (req, res) => {
  const { id } = req.body;

  models.User.update({ role: Roles.Reader }, { where: { id } })
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
