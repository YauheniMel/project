const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'course_project',
  password: 'melnik123',
  multipleStatements: true,
});

module.exports = connection;
// // id, isAdmin, name, surname, theme, status, isOnline, registerDate, loginDate
// module.exports.signUp = (name, surname) => `
//   USE course_project;

//   INSERT users(name, surname, isOnline)
//   VALUES ('${name}', '${surname}', true);
// `;

// module.exports.login = (userId) => `
//   USE course_project;

//   UPDATE users
//   SET isOnline = true, loginDate = CURRENT_TIMESTAMP
//   WHERE id = ${userId};
// `;

// module.exports.logOut = (userId) => `
//   USE course_project;

//   UPDATE users
//   SET isOnline = false
//   WHERE id = ${userId};
// `;

// module.exports.deleteUser = (userId) => `
//   USE course_project;

//   DELETE FROM users
//   WHERE id=${userId};
// `;

// // id, icon, description, theme, dateKeys, multiLineKeys,
// // numberKeys, textKeys, checkboxKeys, createAt, updateAt
// module.exports.createCollection = (userId, description, theme) => `
//   USE course_project;

//   INSERT Collections(userId ,description, theme)
//   VALUES (${userId},'${description}', '${theme}');
// `;

// module.exports.deleteCollection = (collectionId) => `
//   USE course_project;

//   DELETE FROM Collections
//   WHERE id=${collectionId};
// `;

// // id, icon, title, tags, countLike, createAt, updateAt, dateValues,
// // multiLineValues, numberValues, textValues, checkboxValues
// module.exports.createItem = (collectionId, title, tags) => `
//   INSERT Items(collectionId, title, tags)

//   VALUES (${collectionId}, '${title}', ${tags});
// `;

// module.exports.deleteItem = (itemId) => `
//   USE course_project;

//   DELETE FROM Items
//   WHERE id=${itemId};
// `;
