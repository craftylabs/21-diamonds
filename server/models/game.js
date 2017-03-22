const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-findorcreate');
const { User } = require ('./user')


const gameSchema = mongoose.Schema({
    
    userId: { type:String, required:true} ,
    players: [
              {playerOne:{/*type: mongoose.Schema.Types.ObjectId, ref: 'User'*/ type: String}}
              
             ],
    winner: { type:String,required:true},
    dateCompleted: {type:Date , Default:Date.now}

});

gameSchema.methods.apiRepr = function () {
    return {
        _id:this.id,
        userId: this.userId,
        players:this.players,
        winner: this.winner,
        dateCompleted: this.dateCompleted
    }
}

//gameSchema.plugin(findOrCreate);
const Game = mongoose.model('Game', gameSchema);
module.exports = { Game }
