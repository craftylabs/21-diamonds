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

export const USER_INFO_SUCCESS = "USER_INFO_SUCCESS";
export const userInfoSuccess = (user) => ({
	type: USER_INFO_SUCCESS,
	user	
});

export const USER_INFO_ERROR = "USER_INFO_ERROR";
export const userInfoError = (user, error) => ({
	type: USER_INFO_ERROR,
	user,
	error	
});

export const getUserInfo = cookie => (dispatch) => {
	console.log(cookie);

	const url = `api/users/${cookie}`;

	fetch(url)
	.then(response => {
		console.log(response);
	})
	.then(data => {
		dispatch(userInfoSuccess(data));
	})
	.catch(error => {
		console.log(error);
		dispatch(userInfoError(error));
	})

}

