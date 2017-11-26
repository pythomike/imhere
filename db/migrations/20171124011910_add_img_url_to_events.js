
exports.up = function(knex, Promise) {
  return knex.schema.table('events', function(table) {
    table.string('creator_name')
    table.string('img_url')
    table.boolean('private_event')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('events', function(table) {
    table.dropColumn('private_event')
    table.dropColumn('img_url');
    table.dropColumn('creator_name');
  })
};
