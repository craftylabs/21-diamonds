export const MAKE_NEW_GAME = "MAKE_NEW_GAME";
export const makeNewGame = () => ({
	type: MAKE_NEW_GAME
});

export const ADD_CHOICE_TO_TOTAL = "ADD_CHOICE_TO_TOTAL";
export const addChoiceToTotal = (numChoice) => ({
	type: ADD_CHOICE_TO_TOTAL,
	numChoice	
});
