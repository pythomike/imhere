exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('users', function(table) {
      table.increments('id').primary();
      table.string('email');
      table.string('password');
      table.string('first_name');
      table.string('last_name');
      table.string('phone_number');
  }).createTable('events', function(table) {
      table.increments('id').primary();
      table.integer('user_id').references('id').inTable('users').notNull().onDelete('CASCADE');
      table.string('location'); 
      table.string('description');
      table.integer('max_attendees');
      table.timestamp('start_time');
      table.timestamp('end_time');
      table.integer('total_going');
      table.boolean('private');
      table.float('latitude');
      table.float('longitude')
  }).createTable('attendees', function(table) {
      table.increments('id').primary();
      table.integer('event_id').references('id').inTable('events').notNull().onDelete('CASCADE');
      table.integer('user_id').references('id').inTable('users').notNull().onDelete('CASCADE');
  }).createTable('comments', function(table) {
      table.increments('id').primary();
      table.integer('event_id').references('id').inTable('events').notNull().onDelete('CASCADE');
      table.integer('user_id').references('id').inTable('users').notNull().onDelete('CASCADE');
      table.string('comment');
  })
};


exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
  return knex.schema.dropTable('attendees');
  return knex.schema.dropTable('events');
  return knex.schema.dropTable('users');
};
