const PORT              = process.env.PORT || 3001;
const ENV               = process.env.ENV || "development";
const express           = require('express');
const bodyParser        = require('body-parser');
const knexConfig        = require("../knexfile");
const knex              = require("knex")(knexConfig[ENV]);
const knexLogger        = require('knex-logger');
const bcrypt            = require('bcrypt');
const LocalStrategy     = require('passport-local').Strategy;
const cookieSession     = require('cookie-session')
const passport          = require('passport');
const FacebookStrategy  = require('passport-facebook').Strategy;
const GoogleStrategy    = require('passport-google-oauth').OAuth2Strategy;
const Strategy          = require('passport-local').Strategy;
const moment            = require('moment');
// const OAuth2Strategy    = require('passport-oauth').OAuth2Strategy;
const app               = express();

app.use(cookieSession({
  name: 'session',
  keys: ["key1,", "key2"]
}))

app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())

passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  User.findOne({ email: email.toLowerCase() }, (err, user) => {
    if (err) { return done(err); }
    if (!user) {
      return done(null, false, { msg: `Email ${email} not found.` });
    }
    user.comparePassword(password, (err, isMatch) => {
      if (err) { return done(err); }
      if (isMatch) {
        return done(null, user);
      }
      return done(null, false, { msg: 'Invalid email or password.' });
    });
  });
}));

passport.use(new FacebookStrategy({
    clientID: "128785804474750",
    clientSecret: "35f1d7fedd855477c4284dd35f811169",
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile)
    // db.users.findOrCreate({ facebookId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
  }
));

passport.use(new GoogleStrategy({
    clientID: "203543889826-3ben71eaei904q9hgt869ebqiq046fae.apps.googleusercontent.com",
    clientSecret: "0G2p0nTElMZ2wDJyi_6TlX5U",
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile.id)
    // db.users.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  db.users.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

app.use(passport.initialize());
app.use(passport.session());

//Universal Selector
  function dbRead(table) {
    knex.select().from(table)
  }


// SELECT ALL OF THE THINGS
  app.get('/things', (req, res) => {
    dbRead()
  })
// SELECT ALL EVENTS - WORKING
  app.get('/allevents', (req, res) => {
    knex.select().from('events').then(function(event) {
      res.send(event)
    })
  })

// SELECT ALL EVENTS FROM ONE USER
  app.get('/events/:id', (req, res) => {
    var eventID = req.params.id
    knex.select().from('events').where({id:eventID}).then(function(event) {
      res.send(event)
    })
  })

// SELECT A USER
  app.get('/users/:id', (req, res) => {
    console.log(req.params)
    var eventID = req.params.id
    knex.select().from('users').where({id:eventID}).then(function(user) {
      res.send(user)
    })
  })

// SELECT EVENTS ON A GIVEN DAY
  app.get('/daysevents', (req, res) => {
    const lookAtDay = moment().startOf('day')
    knex('events')
    .select('*')
    .whereBetween('start_time', [lookAtDay, lookAtDay.add(1, 'days')])
    .then(function(event) {
      res.send(event)
    })
  })

// FUNCTION - DB INSERT - Takes in a data object, and a table name. The object MUST be formatted based on the table where the object is going.
  function dbInsert(data, table) {
    knex.insert(data).into(table).returning('id')
    .then(function(stuff){
      return stuff;
    })
    .catch(err => console.log('error caught', err))
  }

// Add EVENT

    app.post('/events', (req, res) => {
      dbInsert(req.body, 'events')
      res.send(201)
    })

    app.post('/newuser', (req, res) => {
      // console.log("current user id: ", req.session)
      knex.select().from('users').where({email:req.body.email})
        .first()
        .then ((found) => {
          if (found) {
            console.log("user already exists...", found)
            const userId = found.id
            res.redirect(302, `/`);
            // res.status(302).json(userId);
          } else {
            console.log("making a new user!", req.body)
            const userId = dbInsert(req.body, 'users')
            // res.redirect(201, '/');
            console.log(userId)
            // res.status(201).json(userId);
          }
        })
        .catch(err => console.log('error caught', err))
    })


  app.get('/logout',
  function(req, res){
    req.logout();
    res.redirect('/');
  });

// ADD ATTENDEE
  let attendee = {
      user_id: 51,
      event_id: 46
  }
  app.post('/attendees', (req, res) => {
    dbInsert(attendee,'attendees')
    res.send("Think we got it")
  })

// ADD COMMENT
  let commentObj = {
    event_id: 51,
    user_id: 51,
    comment: "In bird-culture, this party would be considered a dick move",
  }

  app.post('/comments', (req, res) => {
    dbInsert(commentObj, 'comments')
    res.send("oh hell yes")
  })


  app.get('/auth/google',
    passport.authenticate('google', {
      scope: ['profile']
    })
  );

  app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
      console.log("google login worked")
      // Successful authentication, redirect home.
      res.redirect('/');
    });

  app.get('/auth/facebook',
    passport.authenticate('facebook'));

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function(req, res) {
      console.log("facebook login worked")
      // Successful authentication, redirect home.
      res.redirect('/');
    });

// SERVER JAZZ
app.listen(PORT, function() {
  console.log('Creepin\' on port: ', PORT)
})