const gameCtrl = require('./game_controller');

module.exports = (router) => {
  router.post('/games',gameCtrl.saveGame);

  router.get('/games/:userId', (req,res) => {
   Game
     .findById (req.params.userId)
     .exec()
     .then(response => {
       res.status(201).json(response.apiRepr());
     })
     .catch(err => {
       console.error(err);
       res.status(500).json({error: err})
     })

  })

  router.get('/games', (req,res) => {
    Game
       .find()
       .exec()
       .then(response => {
         res.json(response.map(response => response.apiRepr()));
        })
       .catch(err => {
          console.error(err);
          res.status(500).json({error: err})
        })
  })

router.delete('/games/:_id', (req,res) => {
   Game 
      .findByIdAndRemove(req.params._id)
      .exec()
      .then( () => {
        res.status(204).json({message: "Success"})
      })
      .catch( err => {
        res.status(500).json({error: err})
      })

})



  }