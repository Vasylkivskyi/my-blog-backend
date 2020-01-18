const { USERS_TABLE, roles } = require('@constants');

exports.up = (knex) =>
  knex.schema.createTable(USERS_TABLE, (table) => {
    table.increments();
    table.string('email').notNull();
    table.string('password').notNull();
    table
      .string('role')
      .notNull()
      .defaultTo(roles.USER);
    table
      .boolean('is_verified')
      .notNullable()
      .defaultTo(false);
    table.timestamps(true, true);

    table.unique('email');
  });

exports.down = (knex) => knex.schema.dropTable(USERS_TABLE);
