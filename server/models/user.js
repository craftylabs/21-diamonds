const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-findorcreate');

const userSchema = Schema({
  facebook: {
    userId: String,
    email: String
  },
  firstName: String,
  lastName: String,
  displayName: String,
  createdAt: Date,
  token: String,
  score: Number,
  rank: Number,
  gamesPlayed: Number,
  gamesWon: Number,
  gamesLost: Number,
  longestWinningStreak: Number
});

userSchema.plugin(findOrCreate);
module.exports = mongoose.model('User', userSchema);