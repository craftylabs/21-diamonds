import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Header from './header';

import * as actions from '../actions/actions';

class Leaderboard extends Component {
	constructor(props) {
		super(props);

	}

    componentDidMount() {
//dispatch asyc fetch to retrieve top 10 user lifetime scores.
//will need to build an endpoint to support this.

    }  	

	render() {

		return (
		<div>
			<Header />	
			<p>Top 10 All Time</p>

            <button>
                <Link to={'/app'}>
                Back
                </Link>
            </button>
        </div>    
		)
	}
}

export default connect()(Leaderboard);