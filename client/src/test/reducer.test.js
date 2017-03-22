
import reducer from '../reducer/reducer';
import * as types from '../actions/actions';
import {initialState} from '../reducer/reducer';

describe('Twenty One Diamonds', function () {
    describe("game reducer", function () {

        it("should return the initial state.",  () => {
            expect(
             reducer(undefined, {})
             ).toEqual(initialState)
        });

        it("should handle MAKE_NEW_GAME action",  () => {
            expect(
             reducer(undefined, {
              type: types.MAKE_NEW_GAME,
              players:4,
              })
             ).toEqual({runningTotal: initialState.runningTotal,
                winningSet: [17, 18, 19],
                players: [
                        {id: 'A', score: 0, hands: 0, ai:null},
                        {id: 'B', score: 0, hands: 0, ai:null},
                        {id: 'C', score: 0, hands: 0, ai:null},
                        {id: 'D', score: 0, hands: 0, ai:null}
                ],

                prevPlayer: 2,
                currentPlayer: 1,
                numberOfPlayers:4,
                winner: null,
                loser: null,
                gameCompleted: false})
        });    

        it("should handle ADD_CHOICE_TO_TOTAL action",  () => {
            expect(
             reducer({runningTotal: 0,
              winningSet: [17, 18, 19],
              prevPlayer: 2,
              currentPlayer: 1,
              numberOfPlayers: 2,
              winner: null,
              loser: null,
              gameCompleted: false}, {
              type: types.ADD_CHOICE_TO_TOTAL,
              numChoice: 1
             })

             ).toEqual({runningTotal: initialState.runningTotal + 1,
                winningSet: [17, 18, 19],
                prevPlayer: 2,
                currentPlayer: 2,
                numberOfPlayers:2,
                winner: null,
                loser: null,
                gameCompleted: false
             })
        });

        it("should declare the next player as the loser if running total = winning set", () => {
          expect(             
            reducer({runningTotal: 17,
              winningSet: [17, 18, 19],
              prevPlayer: 2,
              currentPlayer: 1,
              numberOfPlayers: 2,
              winner: null,
              loser: null,
              gameCompleted: false}, {
              type: types.ADD_CHOICE_TO_TOTAL,
              numChoice: 1
             })

             ).toEqual({runningTotal: 17,
                winningSet: [17, 18, 19],
                prevPlayer: 2,
                currentPlayer: 2,
                numberOfPlayers:2,
                winner: null,
                loser: 2,
                gameCompleted: true
             })
        
        }); 

    });

    describe("initial state", function() {
        
        it("should return player 1 as the first player to go.",  () => {
            expect(initialState.currentPlayer).toEqual(1);
        }); 

        it("running total is 0",  () => {
            expect(initialState.runningTotal).toEqual(0);
        });     

        it("initialState number of players is null", () => {
          expect(initialState.numberOfPlayers).toEqual(null);
        })    

    });

    describe("a simple game", function () {

      
     
       
    });
    describe('concurrent games', function(){
      xit('should have separate scores for each new game', function(){
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

