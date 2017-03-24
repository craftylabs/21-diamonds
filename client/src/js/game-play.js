import React, { Component } from 'react';
import Header from './header';
import {connect} from 'react-redux';

import * as actions from '../actions/actions';

class GamePlay extends Component {
	constructor(props) {
		super(props);
		this.submitNumChoice = this.submitNumChoice.bind(this);
		this.recursiveTimer = this.recursiveTimer.bind(this);
		this.countdown = setInterval(this.recursiveTimer,1000);
	}

	submitNumChoice(event) {
		// event.preventDefault();
		console.log(event.target.value);
		this.props.dispatch(actions.addChoiceToTotal(event.target.value, 1));

	}

	recursiveTimer() {
		

		if(this.props.seconds === 0) {

			clearInterval(this.countdown);
			let randomNumber = Math.floor(Math.random() *3+1);

			this.props.dispatch(actions.addChoiceToTotal(randomNumber, this.props.currentPlayer));
		}

		
		if (this.props.seconds > 0) {
			this.props.dispatch(actions.subtractSecond());

		}
		if(this.props.seconds === 6) {

			this.countdown;
			
		}

		
	}




	componentDidMount() {
		
		if(this.props.players === null) {
			this.props.dispatch(actions.makeNewGame(2));
		}

		if(this.props.seconds === 6) {


			this.recursiveTimer();
		}
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
			<p>{this.props.seconds}</p>
			</div>
			</div>

			)
	}
}

const mapStateToProps = (state, props) => {
	return {
		runningTotal: state.runningTotal,
		seconds: state.seconds,
		players: state.players,
		currentPlayer: state.currentPlayer
	}
}

export default connect (mapStateToProps)(GamePlay);