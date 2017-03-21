const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-findorcreate');

// const gameSchema = mongoose.Schema({
    
//     userId: { type:String, required:true} 

// });
const gameSchema = mongoose.Schema({
    
    userId: { type:String, required:true} ,
    players: [
              {playerOne:{type: String}}
              
             ],
    winner: { type:String,required:true},
    dateCompleted: {type:Date , Default:Date.now}

});

gameSchema.methods.apiRepr = function () {
    return {
        id: this.userId,
        players:this.players,
        winner: this.winner,
        datecompleted: this.dateCompleted
    }
}

//gameSchema.plugin(findOrCreate);
const Game = mongoose.model('Game', gameSchema);
module.exports = { Game }
