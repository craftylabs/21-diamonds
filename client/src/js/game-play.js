import React, { Component } from 'react';
import Button from './button';
import Header from './header';


class GamePlay extends Component {
	render() {
		return (
			<div className="GamePlay">
			<Header />
			<p>Player 1 vs. Computer</p>
			<img alt="game-play-canvas" src="http://placehold.it/350x350" text="GamePlayBoard Placeholder" />
			<p>count: props.running total here</p>
			<Button text="1" />
			<Button text="2" />
			<Button text="3" />
			</div>
		)
	}
}

export default GamePlay;