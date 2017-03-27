import React, { Component } from 'react';
import Header from './header';
import {connect} from 'react-redux';

import * as actions from '../actions/actions';

class GamePlay extends Component {
	constructor(props) {
		super(props);
		this.submitNumChoice = this.submitNumChoice.bind(this);
		this.recursiveTimer = this.recursiveTimer.bind(this);
		
		this.diamonds = [];
		this.i = 0;
	}

	submitNumChoice(event) {
		// event.preventDefault();
		console.log(event.target.value);
		this.props.dispatch(actions.addChoiceToTotal(event.target.value, this.props.currentPlayer));

	}

	recursiveTimer() {
		
		console.log("MADE IT INSIDE THE RECURSIVE TIMER");
		if(this.props.seconds <= 0) {

			clearInterval(this.countdown);
			

			this.props.dispatch(actions.addChoiceToTotal(null, this.props.currentPlayer));
		}

		
		if (this.props.seconds > 0) {
			this.props.dispatch(actions.subtractSecond());

		}
		if(this.props.seconds === 4) {

			this.countdown;
			
		}

		
	}




	componentDidMount() {

		if(this.props.players === null) {
			this.props.dispatch(actions.makeNewGame(2));
		}

	}

	componentWillUpdate() {
	
		if (this.props.players[this.props.currentPlayer -1].ai === true) {
			console.log("MADE IT TO AI ACTION");
			this.props.dispatch(actions.addChoiceToTotal(null, this.props.currentPlayer));
		}
 	

}


	render() {


		for ( this.i = 0; this.i < this.props.runningTotal ; this.i += 1) {
			this.diamonds.push(<img  alt="Diamond gamepiece" src="../../TheDiamond.png"/>)
		}
		
		return (
			<div className="GamePlay">
			<Header />
			<p>Player 1 vs. Computer</p>
			<div>{this.diamonds}</div>

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