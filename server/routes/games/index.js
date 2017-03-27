
  const { Game } = require('../../models/game');


  module.exports = (router) => {
    router.post('/games',(req, res) => {
  Game
     .create ({
         userId : req.body.userId,
         players:[{player:req.body.player}],
         winner: req.body.winner,
         dateCompleted: req.body.dateCompleted
     })
     .then (response => {
         console.log('RESPONSE OBJECT (QUESTIONS ADDED)', response)
         res.status(201).json(response.apiRepr())
     })
     .catch (err => {          
         res.status(500).json({error: err})
     })  
  });

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