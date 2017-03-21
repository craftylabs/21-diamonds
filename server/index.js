const path = require('path');
const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const {PORT, TEST_DB_URL } = require('./config/config');


const app = express();
mongoose.Promise = global.Promise;
require('./config/express')(app, passport);
// bootstrap passport config
require('./config/passport')(passport);




let server;
function runServer(port=3001) {
    return new Promise((resolve, reject) => {
        mongoose.connect(TEST_DB_URL, function(err) {
            if(err) {
                console.log("*error* = " ,err);
                return reject(err);
            }
        
        server = app.listen(port, () => {
            resolve();
        }).on('error', reject);
        })
    });
}

function closeServer() {
    return new Promise((resolve, reject) => {
        server.close(err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
}

if (require.main === module) {
    runServer();
}

module.exports = {
    app, runServer, closeServer
};
