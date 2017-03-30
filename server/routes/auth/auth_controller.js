module.exports.loginFB = (req, res) => {
	console.log('THE REQUEST IS HERE', req.user);
  console.log('made it to callback in facebook auth');
  res.cookie('accessToken', req.user.token, {expires: 0});
  res.redirect('http://localhost:8080');
}