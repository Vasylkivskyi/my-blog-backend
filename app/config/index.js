const dotenv = require('dotenv');

dotenv.config();

const { NODE_ENV } = process.env;

const config = {
  app: {
    port: 8080,
  },
  postgres: {
    connectionString: process.env.PG_CONNECTION_STRING,
    database: process.env.PG_DATABASE,
    poolMin: 2,
    poolMax: 10,
  },
  bcrypt: {
    saltRounds: 10,
    forgotPasswordSaltRounds: 9,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES, // in seconds
  },
  website: {
    siteUrl: 'http://localhost:3000',
  },
};

switch (NODE_ENV) {
  case 'production':
    config.website.siteUrl = 'https://insidetheflow.com';
    break;
  default:
    config.website.siteUrl = 'http://localhost:3000';
    break;
}

module.exports = config;
