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
               .then(function (res) {  
                   res.should.have.status(201);
                   res.body.status.should.equal('success');
                   res.body.info.should.be.a('object')
                   return Game.findById(res.body.info.id).exec();
               })
              .then(game => {
                console.log(game)
                console.log('newGame loser: ', newGame.loser)
                game.loser.should.equal(newGame.loser);
                game.players[0].should.equal(newGame.players[0]);
              });
  }); 
})
  
// describe('GET endpoint' , function () {
//     it('should return all existing games', function() {    
//       let res;
//       return chai.request(app)
//         .get('/api/games')
//         .then(_res => {
//           res = _res;
//           res.should.have.status(200);
//           // otherwise our db seeding didn't work
//           res.body.should.have.length.of.at.least(1);

//           return Game.count();
//         })
//         .then( count => {
//           // the number of returned posts should be same
//           // as number of posts in DB
//           res.body.should.have.length.of(count);
//         });
//     });

//    it('should return game with right fields', function() {
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
//           //   post.should.include.keys('_id', 'userId', 'players', 'winner', 'dateCompleted');
//           });
          
//           resGame = res.body[0];
//           console.log(resGame);
//           return Game.findById(resGame._id).exec();
//       })
//       .then( post => {
//         resGame.userId.should.equal(post.userId);
//         resGame.winner.should.equal(post.winner);
        
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

