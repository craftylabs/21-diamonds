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
    User.findOne({ facebookId: profile.id}, function(err, user) {
      if (err) {
        return done(err);
      }
      if (user) {
        return done(null, user); // we found a user in the db so return that user!
      } else {
          user = new User({
          facebookId: profile.id,
          displayName : profile.displayName,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          email: profile.emails[0].value,
          token: accessToken
        });
        user.save(function(err) {
          if (err) {
            return done(err);
          } else {
            return done(null, user);
          } 
        })
      }
    });
  }
  ));
}