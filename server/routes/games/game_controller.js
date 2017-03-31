const { Game } = require('../../models/game');
const User = require('../../models/user');

module.exports.saveGame = async (req, res) => {
  let { players, loser, gameMode } = req.body;
  if (!players || !loser || !gameMode) {
    res.status(400).json({ status: 'error', message: 'missing required fields'});
  }
  let AIUser = await User.findOne({ firstName: 'AI'});
  if (loser === 'AI') {
    console.log('AI lost!')
    loser = AIUser._id
  } 
  console.log('loser:', loser);
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