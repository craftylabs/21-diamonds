// const should = require('chai').should();
// const makeNewGame = require('../../server/index');
import reducer from '../reducer/reducer';
import * as types from '../actions/actions';

describe('Twenty One Diamonds', function () {
    describe("game Reducer", function () {

        it("Should return the initial state.",  () => {
            expect(
             reducer(undefined, {})
             ).toEqual( 
             {
                runningTotal: 0,
    winningSet: [17, 18, 19],
    players: [
    {id: 'A', score: 0, hands: 0},
    {id: 'B', score: 0, hands: 0}
    ],prevPlayer: 2,currentPlayer: 1,
    winner: null,
    loser: null,
    gameCompleted: false
             }
             )

        });


        it('should have a current score of 6', function () {
            let game = makeNewGame();
            game.makeChoice(1, 1);
            game.makeChoice(2, 3);
            game.makeChoice(1, 2);
            const currentScore = game.getCurrentScore();
            currentScore.should.equal(6);
        });
        it('should declare player 2 as the winner for a game of all ones', function () {
            let game = makeNewGame();
            game.makeChoice(1, 1);
            game.makeChoice(2, 1);
            game.makeChoice(1, 1);
            game.makeChoice(2, 1);
            game.makeChoice(1, 1);
            game.makeChoice(2, 1);
            game.makeChoice(1, 1);
            game.makeChoice(2, 1);
            game.makeChoice(1, 1);
            game.makeChoice(2, 1);
            game.makeChoice(1, 1);
            game.makeChoice(2, 1);
            game.makeChoice(1, 1);
            game.makeChoice(2, 1);
            game.makeChoice(1, 1);
            game.makeChoice(2, 1);
            game.makeChoice(1, 1);
            game.makeChoice(2, 1);
            game.makeChoice(1, 1);
            game.makeChoice(2, 1);
            //Presumably this move wouldn't happen?
            // game.makeChoice(1, 1);
            const winner = game.getWinner();
            winner.should.equal(2);
        });
        it('should declare player 1 as winner if previous choice adds up to 17', function(){
          let game = makeNewGame();
          game.makeChoice(1,1)
          game.makeChoice(2,3)
          game.makeChoice(1,3)
          game.makeChoice(2,2)
          game.makeChoice(1,3)
          game.makeChoice(2,1)
          game.makeChoice(1,2)
          game.makeChoice(2,2)
          const winner = game.getWinner();
          winner.should.equal(1);
        })
    });
    describe('concurrent games', function(){
      it('should have separate scores for each new game', function(){
        let game1 = makeNewGame();
        let game2 = makeNewGame();
        game1.makeChoice(1,1)
        game1.makeChoice(2,2)
        game1.makeChoice(1,1)
        game2.makeChoice(1,1)
        game2.makeChoice(2,3)
        game2.makeChoice(1,3)
        let game1Score = game1.getCurrentScore();
        let game2Score = game2.getCurrentScore();
        game1Score.should.equal(4);
        game2Score.should.equal(7);
      })
    })
});

