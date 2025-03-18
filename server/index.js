import db from './db/models/index.js';
import express from 'express';
import cors from 'cors';
import http from 'http';
import controllers from './controllers/index.js';
import bodyParser from 'body-parser';
import './firebase/config.js';

const l = await db;

const port = process.env.PORT || 5000;

const app = express();

app.use(
  cors({
    origin: process.env.BASE_URL,
    credentials: true,
  })
);

app.use(bodyParser.json());

app.use('/api/user', controllers.userRouter);

const server = http.createServer(app);

l.sequelize.sync({ force: false }).then(function () {
  server.listen(port, function () {
    console.log('server is successfully running on port ' + port);
  });
});
