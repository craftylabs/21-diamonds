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

})