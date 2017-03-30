const gameCtrl = require('./game_controller');

module.exports = (router) => {
  router.post('/games',gameCtrl.saveGame);
  router.get('/games/:players', gameCtrl.getGame);
  }