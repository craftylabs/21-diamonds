import React from 'react';
import {Link} from 'react-router-dom';
import Header from './header';

function Instructions() {
	return (
		<div>
		<Header />

		<p> 21 Diamonds is a mathematical game of strategy in which two players take turns adding diamonds to a heap. On each turn, a player must add at least one diamond.
		</p>

		<p><strong>Goal</strong>: Do not be the last player to add a diamond to the heap.
		</p>

		<ol> <h3> Game Rules </h3>
		<li> Player 1 always goes first</li>
		<li> The Player can select to add 1, 2, or 3 diamonds to the heap </li>
		<li> If a {`player's`} move would cause them to lose, the game knows that and declares that player the loser. </li>
		<li> The player must make their move in 5 seconds or one will be randomly choosen for them </li>
		</ol>
            <button className="button-back">
                <Link to={'/app'}>
                Main Menu
                </Link>
            </button>	

		</div>
		)
}

export default Instructions;