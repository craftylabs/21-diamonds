const { CLIENT_ROOT, CLIENT_PORT } = require('../../config/config');

module.exports.loginFB = (req, res) => {
	console.log('THE REQUEST IS HERE', req.user);
  console.log('made it to callback in facebook auth');
  res.cookie('accessToken', req.user.token, {expires: 0});
  res.cookie('facebookId', req.user.facebookId);
  res.redirect(`${CLIENT_ROOT}/gamemodes`);
}