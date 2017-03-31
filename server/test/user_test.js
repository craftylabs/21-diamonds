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
           let newUser;
           let resUser;
            newUser = new User({
               facebookId:'456253723628',
               firstName:'testing',
               lastName:'user',
               email:'testinguser@gmail.com'
           })
     
            newUser.save();
            return chai.request(app)
                        .get(`/api/users/${newUser.facebookId}`) 
                        .then(res => {
                            resUser =res;    
                            res.should.have.status(200);  
                            res.should.be.a('object');  
                            res.body.should.include.keys('id','facebookId','firstName','lastName','email');
                            return User.findOne({facebookId: newUser.facebookId}).exec();  
                        })
                        .then(user => {

                            user.firstName.should.equal(resUser.body.firstName);
                            user.lastName.should.equal(resUser.body.lastName);
                            user.email.should.equal(resUser.body.email);
                        })
       });
    });


 })

