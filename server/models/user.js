const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-findorcreate');

const userSchema = Schema({
  facebook: {
    id: String,
    email: String
  },
  firstName: String,
  lastName: String,
  displayName: String,
  createdAt: Date
});

userSchema.plugin(findOrCreate);
module.exports = mongoose.model('User', userSchema);