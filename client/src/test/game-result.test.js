import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import GameResult from '../js/game-result';

describe('GameResult component', () => {

	it('Renders without crashing', () => {
		 shallow(<GameResult />);
		
	})

})