
const { Game } = require('../../models/game');


module.exports = (router) => {
  router.post('/games',(req, res) => {
      console.log("Inside route indexjs") 
      
     Game
    .create ({
       userId : req.body.userId,
       players:[{player:req.body.player}],
       winner: req.body.winner,
       dateCompleted: req.body.dateCompleted
  })
  .then(response => {
            console.log('RESPONSE OBJECT (QUESTIONS ADDED)', response)
            
            res.status(201).json(response.apiRepr())
  })
  .catch(err => {
           
            res.status(500).json({error: err})
  })
     
      
  
});

}