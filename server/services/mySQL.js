const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'eu-cdbr-west-02.cleardb.net',
  user: 'b76365a37ff35f',
  database: 'heroku_a2bd434709364ef',
  password: 'f3c65d82',
  multipleStatements: true,
  connectionLimit: 100,
});

module.exports = connection;
