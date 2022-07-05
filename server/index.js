const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const socketIo = require('socket.io');
const http = require('http');
const routerCollection = require('./endpoints/collection');
const routerItem = require('./endpoints/item');
const routerUser = require('./endpoints/user');
const routerTag = require('./endpoints/tag');
const routerFilters = require('./endpoints/filters');
const connection = require('./services/mySQL');
const sqlz = require('./services/sequelize');

const port = process.env.PORT || 5000;

const app = express();

const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  console.log('USER CONNECTED: ', socket.id);

  socket.join('update');
});

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

connection.connect((err) => {
  if (err) {
    console.log('Error occurred', err);
  }
});

sqlz.sequelize.sync().catch((err) => console.log(err));

app.use(routerUser);
app.use(routerCollection);
app.use(routerItem);
app.use(routerTag);
app.use(routerFilters);

// comments with socket

const router = express.Router();

router.get('/api/getAllComments/', (req, res) => {
  const { itemId } = req.query;

  sqlz.Comment.findAll({
    attributes: ['content', 'createdAt', 'status'],
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

router.get('/api/getAllUntouchedComments/', (req, res) => {
  const { userId } = req.query;

  sqlz.Collection.findAll({
    where: {
      userId,
    },
    include: [
      {
        model: sqlz.Item,
        include: [
          {
            model: sqlz.Comment,
            attributes: ['content', 'createdAt'],
            where: {
              status: 'untouched',
            },
            include: [
              {
                model: sqlz.User,
                attributes: ['name', 'surname'],
              },
            ],
          },
        ],
      },
    ],
  })
    .then((result) => {
      const untoucnhedComments = [];
      result.forEach((collection) => {
        let icon = '';
        collection.items.forEach((item) => {
          if (item.icon) {
            icon = Buffer.from(item.icon).toString('base64');
          }

          untoucnhedComments.push({
            icon,
            title: item.title,
            collectionId: item.collectionId,
            comments: item.comments,
            itemId: item.id,
          });
        });
      });
      res.status(200).send(untoucnhedComments);
    })
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});

router.put('/api/setCommentsTouched/', (req, res) => {
  const { itemId } = req.body;

  sqlz.Comment.update({ status: 'touched' }, { where: { itemId } })
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
    .then((result) => {
      if (result) {
        sqlz.Item.findOne({
          where: {
            id: result.itemId,
          },
        })
          .then((item) => item.getCollection())
          .then((collection) => {
            io.to('update').emit('comment', {
              userId: collection.userId,
            });
            return res.status(200).send('The message was sent!');
          });
      }
    })
    .catch((err) => res.status(400).send({
      code: 0,
      message: err,
    }));
});
//

app.use(router);

app.use(express.static(`${__dirname}./../build`));
app.use(express.static(`${__dirname}./../build/static/js`));
app.use(express.static(`${__dirname}./../build/static/css`));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './../build/index.html'));
});

server.listen(port, () => {
  console.log(`running on port ${port}`);
});
