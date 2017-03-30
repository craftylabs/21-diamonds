const { Game } = require('../../models/game');

module.exports.saveGame = (req, res) => {
  const { players, loser, gameMode } = req.body;
  if (!players || !loser || !gameMode) {
    res.status(400).json({ status: 'error', message: 'missing required fields'});
  }
  Game
     .create ({
         players,
         loser,
         gameMode
     })
     .then(game => res.status(201).json(game.getGameInfo()))
     .catch (err => {          
         res.status(500).json({status: 'error', message: err})
     }); 
}


module.exports.getGame = (req,res) => {
   
    Game
     .find({players: req.params.players})
     .exec()
     .then(game => {
         console.log(game , 'game getting by id')
       res.status(201).json(game.getGameInfo());
     })
     .catch(err => {
       console.error(err);
       res.status(500).json({status: 'error', message: err})
     })

}