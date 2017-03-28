import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Instructions from '../js/instructions';

describe('Instructions component', () => {

	it('Renders without crashing', () => {
		 shallow(<Instructions />);
		
	})

})