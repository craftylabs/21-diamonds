export const RESET_GAME = "RESET_GAME";
export const resetGame = () => ({
	type: RESET_GAME
});

export const MAKE_NEW_GAME = "MAKE_NEW_GAME";
export const makeNewGame = (players) => ({
	type: MAKE_NEW_GAME,
	players: players
});

export const ADD_CHOICE_TO_TOTAL = "ADD_CHOICE_TO_TOTAL";
export const addChoiceToTotal = (numChoice, player ) => ({
	type: ADD_CHOICE_TO_TOTAL,
	numChoice:numChoice	,
	player:player,

});

export const SUBTRACT_SECOND = "SUBTRACT_SECOND";
export const subtractSecond = () => ({
	type: SUBTRACT_SECOND
});

export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const logInSuccess = (user) => ({
	type: LOG_IN_SUCCESS,
	user	
});

export const LOG_IN_ERROR = "LOG_IN_ERROR";
export const logInError = (user, error) => ({
	type: LOG_IN_ERROR,
	user,
	error	
});

export const logIn = user => (dispatch) => {
	// let header = new Headers({
	//     'Access-Control-Allow-Origin':'*',
	//     'Content-Type': 'multipart/form-data'
	// });
	const url = 'http://localhost:8080/api/auth/facebook';
	// let path = Object.assign({},)

// let request = new Request('/api/auth/facebook', {
// 	method: 'GET', 
// 	mode: 'cors', 
// 	redirect: 'follow',
// 	headers: new Headers({
// 		'Access-Control-Allow-Origin': 'http://localhost:8080'
// 	})
// });

	return fetch(url)
	.then(response => {
		console.log(response);
	})
	.then(data => {
		dispatch(logInSuccess(data));
	})
	.catch(error => {
		console.log(error);
		dispatch(logInError(error));
	})

}

