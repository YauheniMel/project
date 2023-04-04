const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'b0hac2ky6ill5ssbfum4-mysql.services.clever-cloud.com',
  user: 'um5rk7dcsq5qkcjy',
  database: 'b0hac2ky6ill5ssbfum4',
  password: 'VjuWY1TgRlOsi5crCGdL',
  multipleStatements: true,
  connectionLimit: 100,
});

module.exports = connection;
