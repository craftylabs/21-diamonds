const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-findorcreate');

const userSchema = mongoose.Schema({
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


userSchema.methods.apiRepr = function () {
   return {
           _id:this.id,
     facebook: this.facebook,
     firstName: this.firstName,
     lastName: this.lastName,
     displayName: this.displayName,
     createdAt: this.createdAt,
     token: this.token,
     score: this.score,
     rank: this.rank,
     gamesPlayed: this.gamesPlayed,
     gamesWon: this.gamesWon,
     gamesLost: this.gamesLost,
     longestWinningStreak: this.longestWinningStreak
   }
}



//userSchema.plugin(findOrCreate);
const User = mongoose.model('User', userSchema);
module.exports = { User }