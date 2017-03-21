import React from 'react';
import ReactDOM from 'react-dom';
import GameMode from '../js/game-mode';
import {shallow} from 'enzyme';


describe('GameMode screen component', () => {


	it('Should render without crashing', () => {
		const wrapper = shallow(<GameMode/>);
	})
});