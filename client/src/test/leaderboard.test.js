import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Leaderboard from '../js/leaderboard';

describe('Leaderboard component', () => {

	it('Renders without crashing', () => {
		 shallow(<Leaderboard />);
		
	})

},)