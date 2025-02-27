const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.HOST_MYSQL,
  user: process.env.USERNAME_MYSQL,
  port: process.env.PORT_MYSQL,
  database: process.env.DATABASE_MYSQL,
  password: process.env.PASSWORD_MYSQL,
  multipleStatements: true,
  connectionLimit: 100,
});

module.exports = connection;
