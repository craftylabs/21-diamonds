import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../js/App';

describe('App component', () => {

	it('Should have className App', () => {
		const app = shallow(<App />);
		const welcome = <h2>21 Diamonds</h2>
		expect(app.contains(welcome)).toEqual(true);
	})

},)