import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Login from '../js/login';

describe('Login component', () => {

	it('Renders without crashing', () => {
		 shallow(<Login />);
		
	})

})