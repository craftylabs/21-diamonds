import * as actions from '../actions/actions';
import update from 'immutability-helper';

export const initialState = {
	runningTotal: 1,
	winningSet: [17, 18, 19],
	players: [
	{id: 'A', score: 0, hands: 0},
	{id: 'B', score: 0, hands: 0}
	],
//hardcoded players
prevPlayer: 2,
//added currentplayer property to state object
currentPlayer: 1,
winner: null,
loser: null,
gameCompleted: false
};

export default function reducer (state= initialState, action) {
	switch(action.type) {
	case actions.MAKE_NEW_GAME : 
	  state = Object.assign({}, state, initialState)
	  return state;

	case actions.ADD_CHOICE_TO_TOTAL :
	  console.log("ACTION HERE: " + Object.keys(action))
	  let increment = action.numChoice;
	  console.log(state);

	  let total = increment + state;
	  console.log(total);

	  console.log("INCREMENT HERE" + increment);
	  state = Object.assign({}, state, {total});
	  // return update(state, {runningTotal: {$apply: function(x) {return x + 1}}})
	  return state;

	default : 
		return state;
	}



    // Component should be able to access runningTotal from State
    // function getCurrentScore() {
    // 	return runningTotal;
    // }

//     function makeChoice(playerId, numChoice) {
//     	if (_validateChoice(numChoice)) {
//     		runningTotal += numChoice;
//     	}
//     }
//     function _validateChoice(numChoice) {
//     	const allowedChoices = [1, 2, 3];
//     	if (!allowedChoices.includes(numChoice)) {
//     		console.log('Invalid choice. Must choose a number between 1 and 3');
//     		return false;
//     	}
//     	return true;
//     }
//     function getWinner() {
//     	if (runningTotal === 17) {
//     		state.winner = state.currentPlayer;
//     	}
//     	else state.winner = state.prevPlayer;
//     	let winner = state.winner;
//     	state.gameCompleted = true;
//     	return winner;
//     }
//     return Object.freeze({
//     	getCurrentScore,
//     	makeChoice,
//     	getWinner
//     });
// }
// const checkGame = (playerId, choice, state) => {
// 	let sum = 0;
// 	console.log('submitted choice:', choice);
// 	const allowedChoices = [1, 2, 3];
// 	if (!allowedChoices.includes(choice)) {
// 		console.log('Invalid choice. Must choose a number between 1 and 3');
// 		return false;
// 	}
// 	if (choice + state.runningTotal >= 21) {
// 		state.loser = playerId;
// 		state.gameCompleted = true;
// 		return true;
// 	} else if (state.winningSet.includes(choice + state.runningTotal)) {
// 		if (playerId === 'A') {
// 			state.winner = 'B'
// 		} else {
// 			state.winner = 'A';
// 		}
// 		state.gameCompleted = true;
// 		console.log(`Player ${state.winner} is the Winner!`);
// 		return true;
// 	} else {
// 		sum = choice + state.runningTotal;
// 		console.log('sum', sum);
// 		state.runningTotal = sum;
// 		console.log('runningTotal: ', state.runningTotal);
// 		return false;
// 	}

// }
// return state;
}



