const { CLIENT_ROOT, CLIENT_PORT } = require('../../config/config');

module.exports.loginFB = (req, res) => {
  res.cookie('accessToken', req.user.token, {expires: 0});
  res.cookie('facebookId', req.user.facebookId);
  res.redirect(`${CLIENT_ROOT}/gamemodes`);
}