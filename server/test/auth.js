const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

const {app, runServer, closeServer} = require('../index');
chai.use(chaiHttp);

describe('Secured endpoints', function(){

  before(function() {
    return runServer();
  });

  after(function() {
    return closeServer();
  });

  it('should not allow a non-authenticated user to see dashboard')




})

