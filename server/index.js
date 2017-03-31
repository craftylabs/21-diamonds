require('dotenv').config();
const path = require('path');
const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const User = require('./models/user');
mongoose.Promise = global.Promise;
const {DB_URL, PORT} = require('./config/config');

const app = express();
require('./config/express')(app, passport);
// bootstrap passport config
require('./config/passport')(passport);

let server;
// this function connects to our database, then starts the server
function runServer(databaseUrl=DB_URL, port=PORT) {
  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, err => {
      if (err) {
        return reject(err);
      }
      User.findOne({ firstName: 'AI'}, function(err, user) {
        if (err) throw err;
        if (!user) {
          console.log('creating house account...')
          let AIUser = new User({
            firstName: 'AI',
            displayName: 'House Account',
            email: 'ai@21diamonds.com'
          });
          AIUser.save();
        }
      });
      server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port} in ${process.env.NODE_ENV} mode`);
        resolve();
      })
      .on('error', err => {
        mongoose.disconnect();
        reject(err);
      });
    });
  });
}

// this function closes the server, and returns a promise. we'll
// use it in our integration tests
function closeServer() {
  return mongoose.disconnect().then(() => {
     return new Promise((resolve, reject) => {
       console.log('Closing server');
       server.close(err => {
           if (err) {
               return reject(err);
           }
           resolve();
       });
     });
  });
}

if (require.main === module) {
    runServer();
}

module.exports = {
    app, runServer, closeServer
};
