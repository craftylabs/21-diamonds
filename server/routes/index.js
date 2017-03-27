const express = require('express');
const router = express.Router();
const passport = require('passport');

require('./auth')(router, passport);
require('./status')(router);
require('./games')(router);
require('./users')(router)


module.exports = router;