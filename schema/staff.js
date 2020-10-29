const { Text, Password, Checkbox, Relationship } = require('@keystonejs/fields');
const access = require('../permissions');

module.exports = {
  fields: {
    firstname: {
      type: Text,
      label: 'Name',
      isRequired: true,
      access: {
        update: access.userIsAdminOrOwner,
        create: access.userIsAdmin,
        delete: access.userIsAdmin,
      }
    },
    lastname: {
      type: Text,
      label: 'Surname',
      isRequired: true,
      access: {
        update: access.userIsAdminOrOwner,
        create: access.userIsAdmin,
        delete: access.userIsAdmin,
      }
    },
    technologies: {
      type: Relationship,
      ref: 'Technology',
      label: 'Technologies',
      many: true
    },
    englishLevel: {
      type: Relationship,
      ref: 'EnglishLevel',
      label: 'English level',
      many: false,
      aaccess: {
        update: access.userIsAdminOrOwner,
        create: access.userIsAdmin,
        delete: access.userIsAdmin,
      }
    },
    skillLevel: {
      type: Relationship,
      ref: 'Skill',
      label: 'Level',
      many: false,
      access: {
        update: access.userIsAdminOrOwner,
        create: access.userIsAdmin,
        delete: access.userIsAdmin,
      }
    },
    location: {
      type: Relationship,
      ref: 'Location',
      label: 'Address',
      many: false,
      access: {
        update: access.userIsAdminOrOwner,
        create: access.userIsAdmin,
        delete: access.userIsAdmin,
      }
    },
    email: {
      type: Text,
      isUnique: true,
      label: 'Адрес эл. почты',
      isRequired: true,
      access: {
        update: access.userIsAdminOrOwner,
        create: access.userIsAdmin,
        delete: access.userIsAdmin,
      }
    },
    password: {
      type: Password,
      label: 'Пароль',
      isRequired: true,
      access: {
        update: access.userIsAdminOrOwner,
        create: access.userIsAdmin,
        delete: access.userIsAdmin,
      }
    },
    isAdmin: {
      type: Checkbox,
      label: 'Права администратора',
      access: {
        update: access.userIsAdmin,
        
      },
    }
  },
  labelResolver: item => `${item.lastname} ${item.firstname}`,
  adminConfig: {
    defaultColumns: 'lastname, firstname, email, technologies',
    defaultSort: 'lastname',
    defaultPageSize: 25
  },
  access: {
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
};