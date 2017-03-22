import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Header from '../js/header';

describe('Header component', () => {

	it('Renders without crashing', () => {
		 shallow(<Header />);
		
	})

	it('Should contain an h2 element', () => {
		const app = shallow(<Header />);
		const welcome = <h2>21 Diamonds</h2>
		expect(app.contains(welcome)).toEqual(true);
	})	

})