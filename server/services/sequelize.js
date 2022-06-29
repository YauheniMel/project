const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  'heroku_a2bd434709364ef',
  'b76365a37ff35f',
  'f3c65d82',
  {
    dialect: 'mysql',
    host: 'eu-cdbr-west-02.cleardb.net',
  },
);

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  theme: {
    type: DataTypes.ENUM('light', 'dark'),
    defaultValue: 'light',
  },
  status: {
    type: DataTypes.ENUM('active', 'blocked'),
    defaultValue: 'active',
  },
  isOnline: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});
const Collection = sequelize.define('collection', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  icon: {
    type: DataTypes.BLOB('medium'),
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  theme: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isEdit: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  isDelete: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  dateKey1: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  dateKey2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  dateKey3: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  multiLineKey1: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  multiLineKey2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  multiLineKey3: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  numberKey1: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  numberKey2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  numberKey3: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  textKey1: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  textKey2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  textKey3: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  checkboxKey1: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  checkboxKey2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  checkboxKey3: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
const Item = sequelize.define('item', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  icon: {
    type: DataTypes.BLOB('medium'),
    allowNull: true,
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  tags: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  countLike: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  isEdit: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  isDelete: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  dateValue1: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  dateValue2: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  dateValue3: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  multiLineValue1: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  multiLineValue2: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  multiLineValue3: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  numberValue1: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  numberValue2: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  numberValue3: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  textValue1: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  textValue2: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  textValue3: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  checkboxValue1: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  checkboxValue2: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  checkboxValue3: {
    type: DataTypes.TEXT,
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
