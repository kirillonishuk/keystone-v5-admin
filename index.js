require('dotenv').config();

const { Keystone } = require('@keystonejs/keystone');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { KnexAdapter: Adapter } = require('@keystonejs/adapter-knex');

const {
  OrangeStaff, EnglishLevel,
  Technologies, Skills,
  Locations
} = require('./schema');

const initialiseData = require('./initial-data');

const adapterConfig = {
  knexOptions: {
    connection: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`
  }
};

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  onConnect: process.env.CREATE_TABLES !== 'true' && initialiseData,
});

keystone.createList('OrangeStaff', OrangeStaff);
keystone.createList('EnglishLevel', EnglishLevel);
keystone.createList('Technology', Technologies);
keystone.createList('Skill', Skills);
keystone.createList('Location', Locations);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'OrangeStaff',
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      name: 'Orangesoft Portal',
      enableDefaultRoute: false,
      authStrategy,
      hooks: require.resolve('./custom-hooks-path')
    }),
  ],
};
