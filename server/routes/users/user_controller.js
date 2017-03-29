const User = require('../../models/user');

module.exports.getUser = (req, res) => {
 User
  .findOne({ facebookId: req.params.facebookId})
  .exec()
  .then(user => {
    res.status(200).json(user.getCleanUser());
  })
  .catch(error => res.status(500).json({message: 'Internal Server Error'}));
}