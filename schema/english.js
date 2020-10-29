const { Text } = require('@keystonejs/fields');
const access = require('../permissions');

module.exports = {
  fields: {
    level: {
      type: Text,
      label: 'Level',
      isRequired: true
    },
  },
  labelField: 'level',
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdmin,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
};