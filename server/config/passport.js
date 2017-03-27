const User = require('../models/user');
const FBStrategy = require('passport-facebook').Strategy;
const config = require('../config/config');

module.exports = (passport) => {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  // Facebook Strategy
  passport.use(new FBStrategy({
    clientID: config.facebookAuth.clientID,
    clientSecret: config.facebookAuth.clientSecret,
    callbackURL: config.facebookAuth.callbackURL,
    profileFields:['id', 'displayName', 'emails', 'name']
  },
  (accessToken, refreshToken, profile, done) => {
    console.log('fb user profile: ', profile);
    User.findOrCreate(
      { facebookId : profile.id, 
        displayName : profile.displayName,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile.emails[0].value,
        token: accessToken
      },
      function(err, user) {
        if (err) {
          return done(err);
        } else {
          return done(null, user);
        }     
      });
  }
  ));
}