const { Text } = require('@keystonejs/fields');
const access = require('../permissions');

module.exports = {
  fields: {
    name: {
      type: Text,
      label: 'Название технологии',
      isRequired: true
    },
  },
  labelField: 'name',
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdmin,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
};