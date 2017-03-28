const { User } = require ('../../models/user')


module.exports = (router) => {
  router.post('/users',(req, res) => {
    
    User
     .create ({
            facebook: {
               userId: req.body.userId,
               email: req.body.email
            },
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            displayName: req.body.displayName,
            createdAt: req.body.createdAt,
            token: req.body.token,
            score: req.body.score,
            rank: req.body.rank,
            gamesPlayed: req.body.gamesPlayed,
            gamesWon: req.body.gamesWon,
            gamesLost: req.body.gamesLost,
            longestWinningStreak: req.body.longestWinningStreak
     })
     .then (response => {
         console.log('RESPONSE OBJECT (QUESTIONS ADDED)', response)
         console.log("hello")
         console.log(response.apiRepr());
         res.status(201).json(response.apiRepr())
     })
     .catch (err => {          
         res.status(500).json({error: err})
     })  
     
  });


router.get('/users', (req,res) => {
    User
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


router.get('/users/:_id', (req,res) => {
    User
     .findById(req.params._id)
     .exec()
     .then( response => {
         res.status(201).json(response.apiRepr())
     })
     .catch(err => {
         res.status(500).json({error : err})
     })
})



router.delete('/users/:_id', (req,res) => {
 User
   .findByIdAndRemove(req.params._id)
   .exec()
   .then( () => {
      res.status(204).json({message: "success"})
   })
   .catch( err => {
       res.status(500).json({error: err})
   })

})

}