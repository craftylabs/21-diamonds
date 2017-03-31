import React, { Component } from 'react';
import Header from './header';
import {connect} from 'react-redux';
import store from '../store.js';
import * as actions from '../actions/actions';
import cookie from 'react-cookie';
import GameResult from './game-result';

class GamePlay extends Component {
	constructor(props) {
		super(props);
		this.submitNumChoice = this.submitNumChoice.bind(this);
		this.recursiveTimer = this.recursiveTimer.bind(this);
		this.checkAI = this.checkAI.bind(this);
		this.select = this.select.bind(this);
		this.renderDiamonds = this.renderDiamonds.bind(this);
		let subscribe = store.subscribe(this.checkAI);
		subscribe();
		this.countdown = setInterval(this.recursiveTimer,1000);
	}

	componentDidMount() {
    const fbId = cookie.load('facebookId');
    if (fbId) {
      this.props.dispatch(actions.getUserInfo(fbId));
    }
  }

	componentWillUpdate() {
	this.renderDiamonds();

	}

	submitNumChoice(event) {
		// event.preventDefault();
		console.log(event.target.value);
		this.props.dispatch(actions.addChoiceToTotal(event.target.value, this.props.currentPlayer));

	}

	renderDiamonds() {
		
		var currentStateValue = this.select(store.getState());

		this.diamonds = [];

		for (var i = 0; i<currentStateValue.runningTotal; i++) {
			 this.diamonds.push(<img key={i} alt="Diamond gamepiece" src="../../TheDiamond.png"/>)
		}
		this.checkAI();
	}

	recursiveTimer() {
		

		if(this.props.seconds <= 0) {
			console.log("clearing the interval");
			clearInterval(this.countdown);
			

			this.props.dispatch(actions.addChoiceToTotal(null, this.props.currentPlayer));
			console.log("Resetting the timer");
	
			if(this.props.gameCompleted !== true) {
				this.countdown = setInterval(this.recursiveTimer, 1000);
			}
			else {
				clearInterval(this.countdown);
			}
		}

		
		if (this.props.seconds > 0) {
			this.props.dispatch(actions.subtractSecond());

		}
		
		
	}


select(state) {
	return state
};
	
checkAI() {
	var currentStateValue = this.select(store.getState());

	if (this.props.players[currentStateValue.currentPlayer -1].ai === true) {

			this.props.dispatch(actions.addChoiceToTotal(null, currentStateValue));
		}

}
	


	render() {
		console.log("THE CURRENT PLAYER IS", this.props.currentPlayer);

		if (this.props.gameCompleted) {
			return (<GameResult />
				)
		} else {
				const { user } = this.props
				console.log(this.props.seconds);
		return (
			<div className="GamePlay">
			<Header />
			<p> Welcome {user.firstName} !</p>
			<p>Player 1 vs. Computer</p>
			
			<div className="gameBoard">{this.diamonds}</div>

			
			<div className="gameBoard-choices"onClick={this.submitNumChoice}>
			<button value="1"> 1 </button>
			<button value="2"> 2 </button>
			<button value="3"> 3 </button>
			<p className="gameBoard-timer">{this.props.seconds}</p>
			<p className="gameBoard-count">count: {this.props.runningTotal}</p>
			</div>
			</div>

			)
		}
	}
}

const mapStateToProps = (state, props) => {
	return {
		runningTotal: state.runningTotal,
		seconds: state.seconds,
		players: state.players,
		currentPlayer: state.currentPlayer,
		gameCompleted: state.gameCompleted,
		user: state.user,
	}
}


export default connect (mapStateToProps)(GamePlay);