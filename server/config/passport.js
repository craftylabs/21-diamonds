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
    profileFields:['id','displayName','emails']
  },
  (accessToken, refreshToken, profile, done) => {
    User.findOrCreate({ 'facebook.id': profile.id, 'displayName': profile.displayName, 'firstName': profile.givenName, 'lastName': profile.familyName, 'email': emails[0].value},
      function(err, user) {
        if (err) {
          return done(err);
        }
        return done(null, user);
      });
  }
  ));
}