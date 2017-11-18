
exports.up = function(knex, Promise) {
  return knex.schema.table('events', function(table){
    table.integer('latitude');
    table.integer('longitude');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('events', function(table){
    table.dropColumn('longitude')
    table.dropColumn('latitude')
  })
};
