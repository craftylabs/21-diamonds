const { Game } = require('../../models/game');
const ObjectID = require('mongodb').ObjectID;

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
    const playerId = req.params.players;
    Game
     .find({players: playerId})
     .exec()
     .then(game => {
       res.status(201).json(game);
     })
     .catch(err => {
       console.error(err);
       res.status(500).json({status: 'error', message: err})
     })

}