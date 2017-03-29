const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = mongoose.Schema({
    players: [ {type: Schema.Types.ObjectId, ref: 'User', required: true }],
    loser: { type: Schema.Types.ObjectId, ref: 'User' },
    gameMode: {type: String, enum: ['single', 'multi'], default: 'single'},
    dateCompleted: { type:Date , Default:Date.now }
});

gameSchema.methods.getGameInfo = function() {
    return  {
        id: this._id,
        dateCompleted: this.dateCompleted,
        loser: this.loser
    }
}

const Game = mongoose.model('Game', gameSchema);
module.exports = { Game }
