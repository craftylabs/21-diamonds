const chai = require('chai');
const should = chai.should();

const {app, runServer, closeServer} = require('../index');

describe('/games endpoint', function() {
  before(function() {
    return runServer();
  });

  after(function() {
    return closeServer();
  });

  it('should save a return completed game to the database', function() {



  })




})