const authCtrl = require('./auth_controller');

module.exports = (router, passport) => {
  router.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));
  router.get('/auth/facebook/callback', 
  passport.authenticate('facebook', 
  { failureRedirect: 'http://localhost:8080'}), authCtrl.loginFB);
}
