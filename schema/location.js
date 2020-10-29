const { Text } = require('@keystonejs/fields');
const access = require('../permissions');

module.exports = {
  fields: {
    address: {
      type: Text,
      label: 'Address',
      isRequired: true
    },
  },
  labelField: 'address',
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdmin,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
};