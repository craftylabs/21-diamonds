const express = require('express');
const router = express.Router();
const passport = require('passport');

require('./auth')(router, passport);
require('./status')(router);


module.exports = router;