const userCtrl = require('./user_controller');


module.exports = (router) => {
  router.get('/users/:facebookId', userCtrl.getUser);

}