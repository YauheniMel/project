const Roles = require('./utils/Roles');
const models = require('../server/services/sequelize');

module.exports = {
  async up() {
    await models.User.findOrCreate({
      where: {
        name: 'Евгений',
        surname: 'Мельник',
        email: '207melnik@gmail.com',
        userId: 'NcIuwThJUAPjXynArVackzGtAvx1',
      },
    }).then(() => models.User.update(
      { role: Roles.Admin, status: 'active' },
      { where: { userId: 'NcIuwThJUAPjXynArVackzGtAvx1' } },
    ));
  },

  async down() {
    await models.User.destroy();
  },
};
