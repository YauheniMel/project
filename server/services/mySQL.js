const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'dpg-cgm61vpmbg56g431n4l0-a',
  user: 'collectionsdb_v7sj_user',
  database: 'collectionsdb_v7sj',
  password: '8uLHqu1zhRAaLv81ZxeYMnyHNjJACR5J',
  multipleStatements: true,
  connectionLimit: 100,
});

module.exports = connection;
