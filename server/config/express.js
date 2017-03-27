const bodyParser = require('body-parser');
const morgan = require('morgan');
const express =  require('express');
const path = require('path');
const config = require('./config');

module.exports = (app, passport) => {
  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', config.CLIENT_ROOT);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});
  // Serve the built client
  app.use(express.static(path.resolve(__dirname, '../client/build')));
  // Unhandled requests which aren't for the API should serve index.html so
  // client-side routing using browserHistory can function
  app.get(/^(?!\/api(\/|$))/, (req, res) => {
      const index = path.resolve(__dirname, '../client/build', 'index.html');
      res.sendFile(index);
  });
  app.use(passport.initialize());
  app.use(passport.session());
  
  app.use(morgan('dev')); // log every request to the console
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  
  const routes = require('../routes');
  app.use('/api', routes);
}