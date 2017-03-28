import React from 'react';
import ReactDOM from 'react-dom';
import store from '../store';

describe('redux store', () => {

	it('exists', () => {
		expect(store).toEqual(expect.anything());
	})

});