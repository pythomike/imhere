exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('users', function(table) {
      table.increments('id').primary();
      table.string('email');
      table.string('password');
      table.string('first_name');
      table.string('last_name');
      table.string('phone_number');
      table.boolean('verified');
  }).createTable('events', function(table) {
      table.increments('id').primary();
      table.integer('user_id').references('id').inTable('users').notNull().onDelete('CASCADE');
      table.string('location'); 
      table.string('description');
      table.dateTime('start_time');
      table.dateTime('end_time');
      table.integer('total_going');
      table.boolean('private');
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
