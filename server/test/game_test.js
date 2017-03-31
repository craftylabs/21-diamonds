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
                      res.should.have.status(201);
                      res.should.be.json;
                      res.body.should.deep.equal(Object.assign(newGame, {id: res.body.id}));
                  })         
      }); 
    })
 
    describe('GET endpoint' , function () {
       it('should return all games played by a user', function() {
          const player ='58dbf37ca35649ea515980fd';
          let resUser;
         return chai.request(app)
                  .get(`/api/games/${player}`)
                  .then(res => {
                    res.should.have.status(201);
                    res.body.should.have.length.of.at.least(1); 
                    resUser =res.body[0]; 
                    return Game.find({players: player}).exec();
                  })
                  .then(newGame => {
                    newGame.should.be.a('array');
                    newGame[0].gameMode.should.equal(resUser.gameMode);
                  })
       });
    });
})

