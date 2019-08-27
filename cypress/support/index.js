import './commands';

const credentials = require('../helpers/credentials');
Cypress.config(
  'baseUrl',
  //   `https://${credentials.email}:${credentials.password}@lunch.devbstaging.com/login-password`
  `https://lunch.devbstaging.com`
);
