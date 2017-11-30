const PORT              = process.env.PORT || 3001;
const ENV               = process.env.ENV || "development";
const express           = require('express');
const session           = require('express-session')
const bodyParser        = require('body-parser');
const knexConfig        = require("../knexfile");
const knex              = require("knex")(knexConfig[ENV]);
const knexLogger        = require('knex-logger');
const bcrypt            = require('bcrypt');
const LocalStrategy     = require('passport-local').Strategy;
const passport          = require('passport');
const FacebookStrategy  = require('passport-facebook').Strategy;
const GoogleStrategy    = require('passport-google-oauth').OAuth2Strategy;
const Strategy          = require('passport-local').Strategy;
const moment            = require('moment');
// const cookieParser = require('cookie-parser');

const app = express();
// app.use(cookieParser())
app.set('trust proxy', 1)
app.use(session({
  secret: 'test123',
  saveUninitialized: true,
  resave: false,
  cookie: {
    maxAge: 864000000 // 10 Days in miliseconds
  }}))


// app.use((req, res, next) => {
//   res.locals.user = req.user;
//   next();
// });
app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())

// app.use((req, res, next) => {
//   console.log("my session:", req.session.userId);
//   next();
// })

passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  knex.select().from('users').where({email: email.toLowerCase()})
  .first()
  .then(function(err, user) {
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
  })
}));

// passport.use(new FacebookStrategy({
//   clientID: process.env.FACEBOOK_ID,
//   clientSecret: process.env.FACEBOOK_SECRET,
//   callbackURL: '/auth/facebook/callback',
//   profileFields: ['name', 'email', 'link', 'locale', 'timezone', 'gender'],
//   passReqToCallback: true
// }, (req, accessToken, refreshToken, profile, done) => {
//   if (req.user) {
//     User.findOne({ facebook: profile.id }, (err, existingUser) => {
//       if (err) { return done(err); }
//       if (existingUser) {
//         req.flash('errors', { msg: 'There is already a Facebook account that belongs to you. Sign in with that account or delete it, then link it with your current account.' });
//         done(err);
//       } else {
//         User.findById(req.user.id, (err, user) => {
//           if (err) { return done(err); }
//           user.facebook = profile.id;
//           user.tokens.push({ kind: 'facebook', accessToken });
//           user.profile.name = user.profile.name || `${profile.name.givenName} ${profile.name.familyName}`;
//           user.profile.gender = user.profile.gender || profile._json.gender;
//           user.profile.picture = user.profile.picture || `https://graph.facebook.com/${profile.id}/picture?type=large`;
//           user.save((err) => {
//             req.flash('info', { msg: 'Facebook account has been linked.' });
//             done(err, user);
//           });
//         });
//       }
//     });
//   } else {
//     User.findOne({ facebook: profile.id }, (err, existingUser) => {
//       if (err) { return done(err); }
//       if (existingUser) {
//         return done(null, existingUser);
//       }
//       User.findOne({ email: profile._json.email }, (err, existingEmailUser) => {
//         if (err) { return done(err); }
//         if (existingEmailUser) {
//           req.flash('errors', { msg: 'There is already an account using this email address. Sign in to that account and link it with Facebook manually from Account Settings.' });
//           done(err);
//         } else {
//           const user = new User();
//           user.email = profile._json.email;
//           user.facebook = profile.id;
//           user.tokens.push({ kind: 'facebook', accessToken });
//           user.profile.name = `${profile.name.givenName} ${profile.name.familyName}`;
//           user.profile.gender = profile._json.gender;
//           user.profile.picture = `https://graph.facebook.com/${profile.id}/picture?type=large`;
//           user.profile.location = (profile._json.location) ? profile._json.location.name : '';
//           user.save((err) => {
//             done(err, user);
//           });
//         }
//       });
//     });
//   }
// }));

// passport.use(new GoogleStrategy({
//   clientID: process.env.GOOGLE_ID,
//   clientSecret: process.env.GOOGLE_SECRET,
//   callbackURL: '/auth/google/callback',
//   passReqToCallback: true
// }, (req, accessToken, refreshToken, profile, done) => {
//   if (req.user) {
//     User.findOne({ google: profile.id }, (err, existingUser) => {
//       if (err) { return done(err); }
//       if (existingUser) {
//         req.flash('errors', { msg: 'There is already a Google account that belongs to you. Sign in with that account or delete it, then link it with your current account.' });
//         done(err);
//       } else {
//         User.findById(req.user.id, (err, user) => {
//           if (err) { return done(err); }
//           user.google = profile.id;
//           user.tokens.push({ kind: 'google', accessToken });
//           user.profile.name = user.profile.name || profile.displayName;
//           user.profile.gender = user.profile.gender || profile._json.gender;
//           user.profile.picture = user.profile.picture || profile._json.image.url;
//           user.save((err) => {
//             req.flash('info', { msg: 'Google account has been linked.' });
//             done(err, user);
//           });
//         });
//       }
//     });
//   } else {
//     User.findOne({ google: profile.id }, (err, existingUser) => {
//       if (err) { return done(err); }
//       if (existingUser) {
//         return done(null, existingUser);
//       }
//       User.findOne({ email: profile.emails[0].value }, (err, existingEmailUser) => {
//         if (err) { return done(err); }
//         if (existingEmailUser) {
//           req.flash('errors', { msg: 'There is already an account using this email address. Sign in to that account and link it with Google manually from Account Settings.' });
//           done(err);
//         } else {
//           const user = new User();
//           user.email = profile.emails[0].value;
//           user.google = profile.id;
//           user.tokens.push({ kind: 'google', accessToken });
//           user.profile.name = profile.displayName;
//           user.profile.gender = profile._json.gender;
//           user.profile.picture = profile._json.image.url;
//           user.save((err) => {
//             done(err, user);
//           });
//         }
//       });
//     });
//   }
// }));

// passport.serializeUser(function(user, cb) {
//   cb(null, user.id);
// });

// passport.deserializeUser(function(id, cb) {
//   knex.select().from('users').where({id: id})
//   .first()
//   .then(function(err, user) {
//     if (err) { return cb(err); }
//     cb(null, user);
//   })
// });

// app.use(passport.initialize());
// app.use(passport.session());



  app.get('/logout', (req, res) => {
    console.log("logging out...")
    req.session.userId = null;
    res.sendStatus(200)
    console.log("user session: ", req.session.userId)
  })

  /*app.get('/signup', (req, res) => {
    console.log("get signup...", req.user)
    if (req.user) {
      console.log("get signup with user: ", req.user)
      return res.redirect('/');
    }
    return res.redirect('/');
    // res.render('account/signup', {
    //   title: 'Create Account'
    // });
  })*/
  app.post('/login', (req, res) => {
    knex.select().from('users').where({email: req.body.email})
      .first()
      .then ((found) => {
        if (found) {
          console.log("signing in")
          req.session.userId = found.id;
          return res.send({loggedIn: true})
        } else {
          console.log("email not found")
          res.send(200)
        }
      })
      .catch(err => console.log('error caught', err))
    // if (errors) {
    //   req.flash('errors', errors);
    //   return res.redirect('/login');
    // }

    // passport.authenticate('local', (err, user, info) => {
    //   if (err) { return next(err); }
    //   if (!user) {
    //     req.flash('errors', info);
    //     return res.redirect('/login');
    //   }
    //   req.logIn(user, (err) => {
    //     if (err) { return next(err); }
    //     // req.flash('success', { msg: 'Success! You are logged in.' });
    //     res.redirect(req.session.returnTo || '/');
    //   });
    // })(req, res, next);
  })

  app.get('/currentUser', function(req, res) {
      if (req.session.userId) {
        res.send({loggedIn: true})
      } else {

        res.send({loggedIn: false})
      }
  })
  app.post('/signup', (req, res) => {
    const user = req.body
    knex.select().from('users').where({email: req.body.email})
      .first()
      .then ((found) => {
        if (found) {
          console.log("user already exists... back to signup")
          return res.send(200);
        }
        console.log("user was created")
        const insertPromise = dbInsert(req.body, 'users')
        insertPromise.then((userId) => {
          req.session.userId = userId[0];
          res.send(200)
        })
      })
      .catch(err => console.log('error caught', err))
  })
  // SELECT EVENTS ON A GIVEN DAY
  app.get('/daysevents', function(req, res) {
    knex('events')
    .select('*')
    .whereBetween('start_time', ['2017-11-29', '2017,11,30'])
    .then(function(event) {
      res.send(event)
    })
  })

// SELECT EVENTS ON A GIVEN DAY
  app.get('/today/:id', (req, res) => {
    const startDay = moment();
    const endDay = moment();
    let daysFromToday = req.params.id;
    knex('events')
    .select('*')
    .whereBetween('start_time', [startDay.startOf('day').add(daysFromToday, 'day').format(), endDay.endOf('day').add(daysFromToday, 'day').format()])
    .then(function(event) {
      res.send(event)
      res.end()
    })
  })
// SELECT ALL EVENTS - WORKING
  app.get('/allevents', (req, res) => {
    knex.select().from('events').orderBy('start_time', 'asc').then(function(event) {
      console.log("getting all events")
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

// FUNCTION - DB INSERT - Takes in a data object, and a table name. The object MUST be formatted based on the table where the object is going.
  function dbInsert(data, table) {
    return knex.insert(data).into(table).returning('id')
      .then(function(id){
        return id;
      })
      .catch(err => console.log('error caught', err))
  }

// Add EVENT

  app.post('/events', (req, res) => {
    req.body.user_id = req.session.userId
    console.log(req.body)
    dbInsert(req.body, 'events')
    res.send(201)
  })

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

isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

isAuthorized = (req, res, next) => {
  const provider = req.path.split('/').slice(-1)[0];
  const token = req.user.tokens.find(token => token.kind === provider);
  if (token) {
    next();
  } else {
    res.redirect(`/auth/${provider}`);
  }
};


// SERVER JAZZ
app.listen(PORT, function() {
  console.log('Creepin\' on port: ', PORT)
})