const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const { app, runServer, closeServer } = require('../index');
const { TEST_DB_URL } = require('../config/config');
const User  = require('../models/user');
chai.use(chaiHttp);

describe('User', function () {
    beforeEach(function () {
      return runServer(TEST_DB_URL);
    });

    afterEach(function () {
      return closeServer();

    });


    describe('GET endpoint' , function () {
       it('should return user with right fields', function() {
          const facebookId ='1775864242731122';
          let resUser;
          //console.log(User.getCleanUser, 'Getingclean')
          return User
                  .findOne()
                  .then(resUser => {
                  resUser = resUser;
                  return chai.request(app)
                  .get(`/api/users/${facebookId}`);
                  
                  })
                  .then(res => {
                    res.should.have.status(200);  
                    res.should.be.a('object');  
                    res.body.should.include.keys('id','facebookId','firstName','lastName','token','email');
                  })
       });
    });


 })

