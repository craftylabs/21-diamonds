import * as actions from '../actions/actions';
import update from 'immutability-helper';

export const initialState = {
	runningTotal: 1,
	winningSet: [17, 18, 19],
	//By default there will be two players but im thinkinh 4 should be the limit
	//And What my plan to do is take the number of players when the start game action is called
	//and run a for loop up to 4 times with the numberOfPlayers property being the breakpoint
//hardcoded players
prevPlayer: 2,
//added currentplayer property to state object
currentPlayer: 1,
numberOfPlayers: null,
winner: null,
loser: null,
gameCompleted: false,
players:null
};

export default function reducer (state = initialState, action) {
	switch(action.type) {
	case actions.MAKE_NEW_GAME : 
	console.log(action.players);
	let players = [];

	for(var i = 0; i<action.players; i++) {
	
		if(i === 0) {
			players[i] = {id: 'A', score:0, hands:0}
		}

		if(i === 1) {
			players[i] = {id: 'B', score:0, hands:0}
		}

		if(i === 2) {
			players[i] = {id: 'C', score:0, hands:0}
		}

		if(i === 3) {
			players[i] = {id: 'D', score:0, hands:0}
		}

	}
	console.log("THE PLAYERS ARE", players);

	  var theState = Object.assign({}, state, {numberOfPlayers:action.players, players:players});
	  // console.log("NUMBER OF PLAYERS", action);
	  // console.log(theState);
	  return theState;

	case actions.ADD_CHOICE_TO_TOTAL :
	  let increment = action.numChoice;
	 
	  let total = increment + state.runningTotal;
	  if ( state.currentPlayer >= state.numberOfPlayers) {
	  	state.currentPlayer = 1;
	  }
	  else {
	  	console.log("MADE IT IN THE ELSE LOOP");
	  	state.currentPlayer += 1;
	  }
	  console.log(state.currentPlayer);

	 
	  var newState = Object.assign({}, state, {runningTotal:total, currentPlayer:state.currentPlayer});
	  // console.log("NEW STATE IS HERE", newState)
	  return newState;

	}
	return state;



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
//     	if (runningTotal === 17 || runningTotal === 18 || runningTotal === 19) {
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



