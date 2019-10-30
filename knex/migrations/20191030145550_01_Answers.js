/* eslint-disable func-names */
// order delivery migrate
exports.up = function(knex) {
  return knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"').then(() =>
    knex.schema.createTable('answers', function(table) {
      table
        .uuid('id')
        .primary()
        .defaultTo(knex.raw('uuid_generate_v4()')); // to generate default uuid
      table.string('name', 255).notNullable();
      table
        .string('email', 255)
        .unique()
        .notNullable();
    })
  );
};

exports.down = function(knex) {
  return knex.schema.dropTable('answers');
};
