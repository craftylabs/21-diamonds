const chai = require('chai');
const should = chai.should();
const { app, runServer, closeServer } = require('../index');


describe('games endpoint', function () {
    before(function () {
        return runServer();
    });

    after(function () {
        return closeServer();
    });

    // it('New user saved to test database', function (done) {
    //     var userName = Name({
    //         name: 'Anitha'
    //     });

    //     userName.save(done);
    // });

    // it('Should retrieve data from  database', function (done) {
    
    //     Name.find({ name: 'Anitha' }, (err, name) => {
    //          if (err) { throw err; }
    //          if (name.length === 0) { throw new Error('No data!'); }
    //          done();
    //     })
    // });

})




