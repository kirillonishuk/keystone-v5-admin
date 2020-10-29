const { Text } = require('@keystonejs/fields');
const access = require('../permissions');

module.exports = {
  fields: {
    level: {
      type: Text,
      label: 'Personal level',
      isRequired: true
    },
  },
  labelField: 'level',
  access: {
    update: access.userIsAdmin,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
};