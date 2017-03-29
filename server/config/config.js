module.exports = {
  DB_URL: process.env.DATABASE_URL || global.DATABASE_URL || 'mongodb://21diamonds:21diamonds@ds139360.mlab.com:39360/21-diamonds',
  TEST_DB_URL: process.env.TEST_DATABASE_URL || 'mongodb://localhost/21-diamonds-test',
  PORT: process.env.PORT || 3001,
  CLIENT_HOST: process.env.CLIENT_HOST || 'localhost',
  CLIENT_PORT: process.env.CLIENT_PORT || 8080,
  CLIENT_ROOT: 'http://localhost:8080',
  facebookAuth : {
        clientID      : process.env.FB_CLIENT_ID || '774058129424522',
        clientSecret  : process.env.FB_CLIENT_SECRET || '10d10e1f1a408b283310a06d6cfa7893',
        callbackURL   : 'http://localhost:8080/api/auth/facebook/callback'
    },
  twitterAuth : {
        consumerKey       : process.env.TWITTER_KEY,
        consumerSecret    : process.env.TWITTER_SECRET,
        callbackURL       : 'http://localhost:8080/auth/twitter/callback'
    },

 googleAuth : {
        clientID      : process.env.GOOGLE_CLIENT_ID,
        clientSecret  : process.env.GOOGLE_CLIENT_SECRET,
        callbackURL   : 'http://localhost:8080/auth/google/callback'
    },
}