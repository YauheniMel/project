const Sequelize = require('sequelize');

const sequelize = new Sequelize('course_project', 'root', 'melnik123', {
  dialect: 'mysql',
  host: 'localhost',
});

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  userId: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  surname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  theme: {
    type: Sequelize.ENUM('light', 'dark'),
    defaultValue: 'light',
  },
  status: {
    type: Sequelize.ENUM('active', 'blocked'),
    defaultValue: 'active',
  },
  isOnline: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});
const Collection = sequelize.define('collection', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  icon: {
    type: Sequelize.BLOB('medium'),
    allowNull: true,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  theme: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dateKey1: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  dateKey2: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  dateKey3: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  multiLineKey1: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  multiLineKey2: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  multiLineKey3: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  numberKey1: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  numberKey2: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  numberKey3: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  textKey1: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  textKey2: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  textKey3: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  checkboxKey1: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  checkboxKey2: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  checkboxKey3: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});
const Item = sequelize.define('item', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  icon: {
    type: Sequelize.BLOB('medium'),
    allowNull: true,
  },
  title: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  tags: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  countLike: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  dateValue1: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  dateValue2: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  dateValue3: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  multiLineValue1: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  multiLineValue2: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  multiLineValue3: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  numberValue1: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  numberValue2: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  numberValue3: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  textValue1: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  textValue2: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  textValue3: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  checkboxValue1: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  checkboxValue2: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  checkboxValue3: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
});
User.hasMany(Collection, { onDelete: 'cascade' });
Collection.hasMany(Item, { onDelete: 'cascade' });

const sqlz = {
  User,
  Collection,
  Item,
  sequelize,
};

module.exports = sqlz;
