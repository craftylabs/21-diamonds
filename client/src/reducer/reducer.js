import * as actions from '../actions/actions';
import update from 'immutability-helper';

export const initialState = {
	runningTotal: 0,
	winningSet: [17, 18, 19],
	prevPlayer: 2,
	currentPlayer: 1,
	numberOfPlayers: null,
	winner: null,
	loser: null,
	gameCompleted: false,
	players:null,
};

export default function reducer (state = initialState, action) {
	switch(action.type) {
	
	case actions.MAKE_NEW_GAME : 

	let players = [];

	for(var i = 0; i<action.players; i++) {
	
		if(i === 0) {
			players[i] = {id: 'A', score:0, hands:0, ai:null}
		}

		if(i === 1) {
			players[i] = {id: 'B', score:0, hands:0, ai:null}
		}

		if(i === 2) {
			players[i] = {id: 'C', score:0, hands:0, ai:null}
		}

		if(i === 3) {
			players[i] = {id: 'D', score:0, hands:0, ai:null}
		}

	}

	  var theState = Object.assign({}, state, 
	  	{numberOfPlayers:action.players, players:players});

	  return theState;

	case actions.ADD_CHOICE_TO_TOTAL :

	  let increment = action.numChoice;
	  let total = increment + state.runningTotal;

	  if ( state.currentPlayer >= state.numberOfPlayers) {
	  	state.currentPlayer = 1;
	  }
	  else {
	  	state.currentPlayer += 1;
	  }

	  if (total >= 17) {
	  	let gameLoser = state.currentPlayer;
	  	let gameIsDone = true;
	 
	 var newState = Object.assign({}, state, 
	 	{loser: gameLoser, gameCompleted: gameIsDone});
	 
	 return newState;
	 //At this point we would have the loser displayed and the gameData will be sent to the server
	  }
	 
	  var newState = Object.assign({}, state, 
	  	{runningTotal:total, currentPlayer:state.currentPlayer});

	  return newState;

	}
	return state;
}

//Our Ai takes running total as an parameter and if it its not equal to the winning set pick a random number between one and three
//one way have a lifecycle method triggered when the player is number 2 and have the AI function run
