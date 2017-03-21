import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Button from '../js/button';

describe('Button component', () => {

	it('Renders without crashing', () => {
		 shallow(<Button />);
		
	})

},)