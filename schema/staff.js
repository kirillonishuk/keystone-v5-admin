const { Text, Password, Checkbox, Relationship } = require('@keystonejs/fields');
const access = require('../permissions');

module.exports = {
  fields: {
    firstname: {
      type: Text,
      label: 'Name',
      isRequired: true
    },
    lastname: {
      type: Text,
      label: 'Surname',
      isRequired: true
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
      many: false
    },
    skillLevel: {
      type: Relationship,
      ref: 'Skill',
      label: 'Level',
      many: false
    },
    location: {
      type: Relationship,
      ref: 'Location',
      label: 'Address',
      many: false
    },
    email: {
      type: Text,
      isUnique: true,
      label: 'Адрес эл. почты',
      isRequired: true
    },
    password: {
      type: Password,
      label: 'Пароль',
      isRequired: true
    },
    isAdmin: {
      type: Checkbox,
      label: 'Права администратора',
      access: {
        update: access.userIsAdmin,
      },
    }
  },
  labelField: 'email',
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