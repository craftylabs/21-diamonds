const bodyParser = require('body-parser');
const morgan = require('morgan');
const express =  require('express');
const path = require('path');
require('dotenv').config();

module.exports = (app, passport) => {
  // Serve the built client
  app.use(express.static(path.resolve(__dirname, '../client/build')));
  // Unhandled requests which aren't for the API should serve index.html so
  // client-side routing using browserHistory can function
  app.get(/^(?!\/api(\/|$))/, (req, res) => {
      const index = path.resolve(__dirname, '../client/build', 'index.html');
      res.sendFile(index);
  });
  app.use(morgan('dev')); // log every request to the console
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(passport.initialize());
  app.use(passport.session());
  const routes = require('../routes');
  app.use('/api', routes);
}