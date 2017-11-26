
exports.up = function(knex, Promise) {
  return knex.schema.table('events', function(table) {
    table.string('creator_name')
    table.string('img_url')
    table.renameColumn('private','event_private')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('events', function(table) {
    table.dropColumn('img_url');
    table.dropColumn('creator_name');
  })
};
