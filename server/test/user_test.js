const chai = require('chai');
const should = chai.should();
const { app, runServer, closeServer } = require('../index');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const { User } = require('../models/user');


describe('Users ', function () {
    

describe('POST endpoint', function () {
    it('should add a new User ', function () {
           const newUser = {
                
                firstName: "Thinkful",
                lastName: "Thinkful",
                displayName: "Thinkful",
                rank: "1",
                
              }; 
          return chai.request(app)
               .post('/api/users')
               .send(newUser)
               .then(function (res) {  
                   res.should.have.status(201);
                   res.should.be.json;
                   res.body.should.be.a('object');
                   res.body.firstName.should.equal(newUser.firstName);
                   res.body._id.should.not.be.null;
                   res.body.lastName.should.equal(newUser.lastName);
                   return User.findById(res.body._id).exec();
               })
              .then(function (post) {
                    post.firstName.should.equal(newUser.firstName);
                    post.lastName.should.equal(newUser.lastName);

              })
     });
});

describe('GET endpoint' , function () {
    it('should return all existing users', function() {    
      let res;
      return chai.request(app)
        .get('/api/users')
        .then(_res => {
          res = _res;
          res.should.have.status(200);
          // otherwise our db seeding didn't work
          res.body.should.have.length.of.at.least(1);

          return User.count();
        })
        .then( count => {
          res.body.should.have.length.of(count);
        });
    });

 it('should return User with right data', function() {
     let resUser;
     return chai.request(app)
      .get('/api/users')
      .then( function (res) {
           res.should.have.status(200);
           res.should.be.json;
           res.body.should.be.a('array');
           res.body.should.have.length.of.at.least(1);

           res.body.forEach(function(post) {
            post.should.be.a('object');
          //   post.should.include.keys('_id', 'userId', 'players', 'winner', 'dateCompleted');
          });
          
          resUser = res.body[0];
          console.log(resUser);
          return User.findById(resUser._id).exec();
      })
      .then( post => {
        resUser.firstName.should.equal(post.firstName);
        resUser.lastName.should.equal(post.lastName);
        
      });
   });


})



describe('DELETE endpoint' , function () {

   it('should delete a user by id', function() {

      let post;

      return User
        .findOne()
        .exec()
        .then(_post => {
          post = _post;
          return chai.request(app)
            .delete(`/api/users/${post._id}`)
            
        })
        .then(res => {
          res.should.have.status(204);
          return User.findById(post._id);
        })
        .then(_post => {

          should.not.exist(_post);
        });
    });
})





});




