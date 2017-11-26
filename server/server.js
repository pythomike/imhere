const PORT        = process.env.PORT || 3001;
const ENV         = process.env.ENV || "development";
const express     = require('express');
const bodyParser  = require('body-parser');
const app         = express();
const knexConfig  = require("../knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const knexLogger  = require('knex-logger');

app.use(bodyParser.urlencoded({ extended:false }))

//Universal Selector
  function dbRead(table) {
    knex.select().from(table)
  }


// SELECT ALL OF THE THINGS
  app.get('/things', function(req, res) {
    dbRead()
  })
// SELECT ALL EVENTS - WORKING
  app.get('/allevents', function(req, res) {
    knex.select().from('events').then(function(event) {
      res.send(event)
    })
  })

// SELECT ALL EVENTS FROM ONE USER
  app.get('/events/:id', function(req, res) {
    console.log(req.params)
    var eventID = req.params.id
    knex.select().from('events').where({id:eventID}).then(function(event) {
      console.log(event)
      res.send(event)
    })
  })

// SELECT A USER
  app.get('/users/:id', function(req, res) {
    console.log(req.params)
    var eventID = req.params.id
    knex.select().from('users').where({id:eventID}).then(function(user) {
      res.send(user)
    })
  })

// SELECT EVENTS ON A GIVEN DAY
  app.get('/daysevents', function(req, res) {
    var start = "2017-12-01 21:28:04+00"
    knex('events')
    .select('*')
    .whereBetween('start_time', ['2017-12-01', '2017,12,02'])
    .then(function(event) {
      res.send(event)
    })
  })

// FUNCTION - DB INSERT - Takes in a data object, and a table name. The object MUST be formatted based on the table where the object is going.
  function dbInsert(data, table) {
    knex.insert(data).into(table).returning('id')
    .then(function(){
      })
  }

// Add EVENT

  var obj = {
    data: {
          user_id: 46,
          title: "TEST oh damnnnnnnn",
          location: "Mike's house",
          description: "House paaaaarrty",
          max_attendees:9002,
          start_time:"2017-12-28 08:32:36+00",
          end_time:"2017-12-28 08:32:36+00",
          total_going:9001,
          private:true,
          latitude: 49.283319,
          longitude:-123.115940
          },
    table : 'events'
  }

    app.post('/events', function(req, res) {
      //dbInsert(obj.data, obj.table)
      console.log(req.body)
      res.send("naiiiled it")
    })

// ADD USER
  let user = {
    email: "mike@mike.mike",
    password: "cheese",
    first_name: "Mike",
    last_name: "Moike",
    phone_number: 6048675309
  }
    app.post('/newuser', function(req, res){
      dbInsert(user, 'users')
      knex.select().from('users').where({email:user.email}).then(function(newuser) {
        res.send(newuser)
    })
  })

// ADD ATTENDEE
  let attendee = {
      user_id: 51,
      event_id: 46
  }
  app.post('/attendees', function(req, res) {
    dbInsert(attendee,'attendees')
    res.send("Think we got it")
  })

// ADD COMMENT
  let commentObj = {
    event_id: 51,
    user_id: 51,
    comment: "In bird-culture, this party would be considered a dick move",
  }

  app.post('/comments', function(req, res) {
    dbInsert(commentObj, 'comments')
    res.send("oh hell yes")
  })

// SERVER JAZZ
app.listen(PORT, function() {
  console.log('Creepin\' on port: ', PORT)
})