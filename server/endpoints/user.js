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
    where: {
      userId: id,
      name,
      surname,
    },
    include: {
      model: sqlz.Like,
      attributes: ['itemId'],
    },
    defaults: {
      isOnline: true,
    },
  })
    .then(([user, created]) => {
      res.status(200).send({ user, isNew: created });
    })
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.get('/api/getTargetUser/', (req, res) => {
  const { userId } = req.query;

  sqlz.User.findOne({
    where: { id: userId },
    include: [
      {
        model: sqlz.Collection,
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

      response.collections = resWithImg;
      return res.status(200).send(response);
    })
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.get('/api/getAllUsers/', (req, res) => {
  sqlz.User.findAll()
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

router.post('/api/deleteUser', (req, res) => {
  const { id } = req.body;
  sqlz.User.destroy({
    where: { id },
  })
    .then((res) => res.status(200).send({
      code: 1,
      message: 'Login success!',
    }))
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.post('/api/blockUser', (req, res) => {
  const { id } = req.body;

  sqlz.User.update({ status: 'blocked' }, { where: { id } })
    .then(() => res.status(200).send({
      code: 1,
      message: 'Blocked success!',
    }))
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.post('/api/unblockUser', (req, res) => {
  const { id } = req.body;

  sqlz.User.update({ status: 'active' }, { where: { id } })
    .then(() => res.status(200).send({
      code: 1,
      message: 'Unblocked success!',
    }))
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.post('/api/setIsAdmin', (req, res) => {
  const { id } = req.body;

  sqlz.User.update({ isAdmin: true }, { where: { id } })
    .then(() => res.status(200).send({
      code: 1,
      message: 'Unblocked success!',
    }))
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.post('/api/setIsNotAdmin', (req, res) => {
  const { id } = req.body;

  sqlz.User.update({ isAdmin: false }, { where: { id } })
    .then(() => res.status(200).send({
      code: 1,
      message: 'Unblocked success!',
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
