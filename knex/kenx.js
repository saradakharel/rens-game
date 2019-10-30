/* eslint-disable import/no-unresolved */
const environment = process.env.ENVIRONMENT || 'development';
const config = require('../knexfile')[environment];
module.exports = require('knex')(config);
