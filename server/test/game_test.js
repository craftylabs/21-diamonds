const chai = require('chai');
const should = chai.should();
const savedDetails = require('../routes/games/index');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const { app, runServer, closeServer } = require('../index');
const { Game } = require('../models/game');

describe('Game ', function () {

  before(function () {
    return runServer();
  });

  after(function () {
    return closeServer();

  });

describe('POST endpoint', function () {
     it('should add a new Game ', function () {
           const newGame = {
                userId: 'Anitha',
                players: '',
                winner: 'Anitha',
                dateCompleted: ''
              }; 
          return chai.request(app)
               .post('/api/games')
               .send(newGame)
               .then(function (res) {  
                   res.should.have.status(201);
                   res.should.be.json;
                   res.body.should.be.a('object');
                   res.body.should.have.keys(
                       '_id', 'userId', 'players', 'winner', 'dateCompleted');
                   res.body.userId.should.equal(newGame.userId);
                   res.body._id.should.not.be.null;
                   res.body.winner.should.equal(newGame.winner);
                   return Game.findById(res.body._id).exec();
               })
              .then(function (post) {
        
                    post.userId.should.equal(newGame.userId);
                    post.winner.should.equal(newGame.winner);

              });
  });
   
})
  
describe('GET endpoint' , function () {
    it('should return all existing games', function() {    
      let res;
      return chai.request(app)
        .get('/api/games')
        .then(_res => {
          res = _res;
          res.should.have.status(200);
          // otherwise our db seeding didn't work
          res.body.should.have.length.of.at.least(1);

          return Game.count();
        })
        .then( count => {
          // the number of returned posts should be same
          // as number of posts in DB
          res.body.should.have.length.of(count);
        });
    });

   it('should return game with right fields', function() {
     let resGame;
     return chai.request(app)
      .get('/api/games')
      .then( function (res) {
           res.should.have.status(200);
           res.should.be.json;
           res.body.should.be.a('array');
           res.body.should.have.length.of.at.least(1);

           res.body.forEach(function(post) {
            post.should.be.a('object');
          //   post.should.include.keys('_id', 'userId', 'players', 'winner', 'dateCompleted');
          });
          
          resGame = res.body[0];
          console.log(resGame);
          return Game.findById(resGame._id).exec();
      })
      .then( post => {
        resGame.userId.should.equal(post.userId);
        resGame.winner.should.equal(post.winner);
        
      });
   });
});


describe('DELETE endpoint' , function () {

   it('should delete a game by id', function() {

      let post;

      return Game
        .findOne()
        .exec()
        .then(_post => {
          post = _post;
          return chai.request(app)
            .delete(`/api/games/${post._id}`)
            
        })
        .then(res => {
          res.should.have.status(204);
          return Game.findById(post._id);
        })
        .then(_post => {

          should.not.exist(_post);
        });
    });
})

  

})

