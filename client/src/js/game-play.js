import React, { Component } from 'react';
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
		console.log(event.target.value);
		this.props.dispatch(actions.addChoiceToTotal(event.target.value, 1));

	}


	render() {
		return (
			<div className="GamePlay">
			<Header />
			<p>Player 1 vs. Computer</p>
			<img alt="game-play-canvas" src="http://placehold.it/350x350" />
			<p>count: {this.props.runningTotal}</p>
			<div onClick={this.submitNumChoice}>
			<button value="1"> 1 </button>
			<button value="2"> 2 </button>
			<button value="3"> 3 </button>
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