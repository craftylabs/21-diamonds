const chai = require('chai');
const should = chai.should();
const savedDetails = require('../routes/games/index');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const { app, runServer, closeServer } = require('../index');
const { TEST_DB_URL } = require('../config/config');
const { Game } = require('../models/game');
chai.use(chaiHttp);

describe('Game ', function () {

  beforeEach(function () {
    return runServer(TEST_DB_URL);
  });

  afterEach(function () {
    return closeServer();

  });

describe('POST endpoint', function () {
     it('should save a new Game to the db ', function () {
           const newGame = {
                players: ['58dbf37ca35649ea515980fd'],
                loser: '58dbe2de774e58030cd51e8f',
                gameMode: 'single'
              }; 
          return chai.request(app)
               .post('/api/games')
               .send(newGame)
               .then(res => { 
                   
                 console.log(res.body, 'response in post endpoint');
                   res.should.have.status(201);
                   res.should.be.json;
                   res.body.should.deep.equal(Object.assign(newGame, {id: res.body.id}));
               })
              
  }); 
})
 // return all games for one particular user.
// describe('GET endpoint' , function () {
   

//    it('should return all games for user', function() {
//      let resGame;
//      return chai.request(app)
//       .get('/api/games')
//       .then( function (res) {
//            res.should.have.status(200);
//            res.should.be.json;
//            res.body.should.be.a('array');
//            res.body.should.have.length.of.at.least(1);
//            res.body.forEach(function(post) {
//             post.should.be.a('object');
          
//           });
          
//           resGame = res.body[0];
//           console.log(resGame , 'INside get endpoint');
//           return Game.find().exec();
//       })
//       .then( post => {
        
//       });
//    });
// });


// describe('DELETE endpoint' , function () {

//    it('should delete a game by id', function() {

//       let post;

//       return Game
//         .findOne()
//         .exec()
//         .then(_post => {
//           post = _post;
//           return chai.request(app)
//             .delete(`/api/games/${post._id}`)
            
//         })
//         .then(res => {
//           res.should.have.status(204);
//           return Game.findById(post._id);
//         })
//         .then(_post => {

//           should.not.exist(_post);
//         });
//     });
// })

  

})

