import React from 'react';
import ReactDOM from 'react-dom';
import App from '../js/App';
import {shallow} from 'enzyme';

describe('App component', () => {


	it('Should render without crashing', () => {
		const wrapper = shallow(<App/>);
	})

});
