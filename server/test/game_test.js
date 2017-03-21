const chai = require('chai');
const should = chai.should();
const savedDetails = require('../routes/games/index');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const { app, runServer, closeServer } = require('../index');

describe('games endpoint', function () {
  
  // before(function () {
  //   return runServer();
  // });

  // after(function () {
  //   return closeServer();
  // });

  it('should add a new Game', function() {
      const newGame = {
          userId: 'Anitha',
          winner: 'Anitha',
          dateCompleted:''
      };

      return chai.request(app)
        .post('/games')
        .send(newGame)
        .then(function(res) {
          res.should.have.status(201);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.include.keys(
            'id', 'userid', 'players', 'winner', 'dateCompleted');
          res.body.userid.should.equal(newgame.userId);
          // cause Mongo should have created id on insertion
          res.body.id.should.not.be.null;
          
          res.body.winner.should.equal(newGame.winner);
          return BlogPost.findById(res.body.id).exec();
        })
        .then(function(post) {
          post.title.should.equal(newGame.userId);
          post.content.should.equal(newGame.winner);
          
        });
    });


  // it('Dont save incorrect format to database', function (done) {
  //   //Attempt to save with wrong info. An error should trigger
  //   var wrongSave = game({
  //    players:'',
  //    dateCompleted:''
  //   });
  //   wrongSave.save(err => {
  //     if (err) { return done(); }
  //     throw new Error('Should generate error!');
  //   });
  // });

  // it('Should retrieve data from  database', function (done) {
  //   game.find({ id:'' }, (err, name) => {
  //     if (err) { throw err; }
  //     if (game.length === 0) { throw new Error('No data!'); }
  //     done();
  //   });
  // });

})