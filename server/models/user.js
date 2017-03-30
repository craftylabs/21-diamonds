const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-findorcreate');

const userSchema = Schema({
  facebookId:  String,
  email: String,
  firstName: String,
  lastName: String,
  displayName: String,
  createdAt: Date,
  token: String,
  score: Number,
  rank: Number,
  gamesPlayed: {type: Schema.Types.ObjectId, ref: 'Game', required: true},
  gamesWon: Number,
  gamesLost: Number,
  longestWinningStreak: Number
});


userSchema.methods.getCleanUser = function () {
   return {
     id: this._id,
     facebookId: this.facebookId,
     firstName: this.firstName,
     lastName: this.lastName,
     token: this.token,
     email: this.email
   }
}



userSchema.plugin(findOrCreate);
module.exports = mongoose.model('User', userSchema);