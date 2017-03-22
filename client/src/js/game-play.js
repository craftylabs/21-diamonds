import React, { Component } from 'react';
import Button from './button';
import Header from './header';
import {connect} from 'react-redux';

import * as actions from '../actions/actions';

class GamePlay extends Component {
	constructor(props) {
		super(props);
		this.submitNumChoice = this.submitNumChoice.bind(this);
	}

	submitNumChoice(event) {
		// event.preventDefault();
		console.log(event);
		this.props.dispatch(actions.addChoiceToTotal(1, 1));

	}


	render() {
		return (
			<div className="GamePlay">
			<Header />
			<p>Player 1 vs. Computer</p>
			<img alt="game-play-canvas" src="http://placehold.it/350x350" />
			<p>count: {this.props.runningTotal}</p>
			<div onClick={this.submitNumChoice}>
			<Button text="1" value="1" />
			<Button text="2" value="2" />
			<Button text="3" value="3" />
			</div>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {
		runningTotal: state.runningTotal
	}
}

export default connect (mapStateToProps)(GamePlay);