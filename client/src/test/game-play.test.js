import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import GamePlay from '../js/game-play';

describe('GamePlay component', () => {

	it('Renders without crashing', () => {
		 shallow(<GamePlay />);
		
	})

})