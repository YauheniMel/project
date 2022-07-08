const { Sequelize, DataTypes } = require('sequelize');
const Roles = require('../../seeders/utils/Roles');

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
  role: {
    type: DataTypes.ENUM(Roles.Admin, Roles.User),
    defaultValue: Roles.User,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('active', 'blocked'),
    defaultValue: 'active',
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
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  theme: {
    type: DataTypes.ENUM('books', 'movies', 'bands', 'memories', 'artworks'),
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
  radioKey1: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  radioKey2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  radioKey3: {
    type: DataTypes.STRING,
    allowNull: true,
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
  radioValue1: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  radioValue2: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  radioValue3: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
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

const Theme = sequelize.define(
  'theme',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  },
);

const Like = sequelize.define('like', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
});
const Tag = sequelize.define('tag', {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
});
const Comment = sequelize.define('comment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('touched', 'untouched'),
    defaultValue: 'untouched',
  },
});
User.hasMany(Collection, { onDelete: 'cascade', hooks: true });
Collection.belongsTo(User, { onDelete: 'cascade', hooks: true });

Collection.hasMany(Item, { onDelete: 'cascade', hooks: true });
Item.belongsTo(Collection, { onDelete: 'cascade', hooks: true });

User.hasMany(Like, { onDelete: 'cascade', hooks: true });
Item.hasMany(Like, { onDelete: 'cascade', hooks: true });
Like.belongsTo(User, { onDelete: 'cascade', hooks: true });

Item.hasMany(Comment, { onDelete: 'cascade', hooks: true });
Comment.belongsTo(User, { onDelete: 'cascade', hooks: true });

Item.belongsToMany(Tag, {
  through: 'item_tag',
  as: 'tags',
  onDelete: 'cascade',
  hooks: true,
});
Tag.belongsToMany(Item, {
  through: 'item_tag',
  as: 'items',
  onDelete: 'cascade',
  hooks: true,
});

const models = {
  User,
  Collection,
  Item,
  Like,
  Tag,
  Comment,
  sequelize,
  Theme,
};

module.exports = models;
