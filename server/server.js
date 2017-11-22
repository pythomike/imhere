const PORT        = process.env.PORT || 3001;
const ENV         = process.env.ENV || "development";
const express     = require('express');
const bodyParser  = require('body-parser');
const app         = express();
const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const knexLogger  = require('knex-logger');


app.use(bodyParser.urlencoded({ extended:false }))


function clutch(table, field, value) {
  knex.select().from(table).where({field:value}).then(function(data) {
    return data
  })
}

  // SELECT ALL EVENTS - WORKING
    app.get('/allevents', function(req, res) {
      knex.select().from('events').returning(data).then(function(event) {
        res.send(event)
      })
    })
    
  // SELECT ALL EVENTS FROM ONE USER
    app.get('/events/:id', function(req, res) {
      console.log(req.params)
      console.log("FUCKING FUCK!")
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
      // .where(cast('start_time'),'>', "2017-12-01 21:28:04+00")
      .whereRaw('start_time::date > ?',['2017-12-01'])
      .then(function(event) {
        res.send(event)
      })
    })

// DB INSERT - Takes in a data object, and a table name. The object MUST be formatted based on the table where the object is going.
function dbInsert(data, table) {
  knex.insert(data).into(table).returning('id')
  .then(function(){
    })
}
// TEST DATA FOR INSERT
  var data = {
    user_id: 46,
    title: "oh damnnnnnnn",
    location: "Mike's house",
    description: "House paaaaarrty",
    max_attendees:9002,
    start_time:"2017-12-28 08:32:36+00",
    end_time:"2017-12-28 08:32:36+00",
    total_going:9001,
    private:true,
    latitude: 49.283319,
    longitude:-123.115940
  }
  var table = 'events'

// CREATE EVENT
    app.post('/events', function(req, res) {
      dbInsert(data, table)
      res.send("naiiiled it")
    })

// USERS
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
    res.send
  })
})



// SERVER JAZZ    
app.listen(PORT, function() {
  console.log('Creepin\' on port: ', PORT)
})