const driver = require('knex');
const config = require('#config');
const knexFile = require('./knexfile');

const { connectionString } = config.postgres;

const knex = driver(knexFile);

knex
  .raw('SELECT 1')
  .then(() => console.log(`Postgres connected to host: ${connectionString}`))
  .catch((err) => {
    console.error(`Postgres failed to connect to host: ${connectionString}`);
    throw err;
  });

module.exports = knex;
