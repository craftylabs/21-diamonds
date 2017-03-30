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
                Main Menu
                </Link>
            </button>
            <table >
  <tr>
    <th>UserName</th>
    <th>Wins</th> 
    <th>Losses</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td> 
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td> 
    <td>94</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td> 
    <td>94</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td> 
    <td>94</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td> 
    <td>94</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td> 
    <td>94</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td> 
    <td>94</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td> 
    <td>94</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td> 
    <td>94</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td> 
    <td>94</td>
  </tr>
</table>
        </div>    
		)
	}
}

export default connect()(Leaderboard);