// exports.DATABASE_URL =  process.env.DATABASE_URL ||
//                         global.DATABASE_URL ||
//                         'mongodb://localhost/21-diamonds-dev';
// exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/21-diamonds-test';
// exports.PORT = process.env.PORT || 8080
//mongo ds139360.mlab.com:39360/21-diamonds -u 21diamonds -p 21diamonds
//mlab URI connection:  mongodb://21diamonds:21diamonds@ds139360.mlab.com:39360/21-diamonds
// 'mongodb://localhost/21-diamonds-test'
console.log("client-id", process.env.FB_CLIENT_ID)
module.exports = {
  'DB_URL': process.env.DATABASE_URL || global.DATABASE_URL || 'mongodb://localhost/21-diamonds-dev',
  'TEST_DB_URL': process.env.TEST_DATABASE_URL ||'mongodb://21diamonds:21diamonds@ds139360.mlab.com:39360/21-diamonds',
  'PORT': process.env.PORT || 8080,
  'facebookAuth' : {
        'clientID'      : process.env.FB_CLIENT_ID || '774058129424522',
        'clientSecret'  : process.env.FB_CLIENT_SECRET || '10d10e1f1a408b283310a06d6cfa7893',
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },
    'twitterAuth' : {
        'consumerKey'       : process.env.TWITTER_KEY,
        'consumerSecret'    : process.env.TWITTER_SECRET,
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : process.env.GOOGLE_CLIENT_ID,
        'clientSecret'  : process.env.GOOGLE_CLIENT_SECRET,
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    },
}