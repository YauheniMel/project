const express = require('express');
const sqlz = require('../services/sequelize');
const socket = require('../index');

const router = express.Router();

socket.on('connection', (socket) => {
  console.log(`Socket successfully connected. ID: ${socket.id}`);
});

socket.to('update').emit('comment', 'GGGGGGGGGg');

router.get('/api/getAllComments/', (req, res) => {
  const { itemId } = req.query;

  sqlz.Comment.findAll({
    attributes: ['content', 'createdAt'],
    where: {
      itemId,
    },
    include: [
      {
        model: sqlz.User,
        attributes: ['name', 'surname', 'id'],
      },
    ],
  })
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.post('/api/leaveComment/', (req, res) => {
  const { content, userId, itemId } = req.body;

  sqlz.Comment.create({
    content,
    userId,
    itemId,
  })
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

module.exports = router;
