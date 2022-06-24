const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const routerCollection = require('./endpoints/collection');
const routerItem = require('./endpoints/item');
const routerUser = require('./endpoints/user');
const connection = require('./services/mySQL');
const sqlz = require('./services/sequelize');

const port = process.env.PORT || 5000;

const app = express();

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

app.use(express.static(`${__dirname}./../build`));
app.use(express.static(`${__dirname}./../build/static/js`));
app.use(express.static(`${__dirname}./../build/static/css`));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './../build/index.html'));
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
