import React, { Component } from 'react';
import Button from './button';
import Header from './header';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as actions from '../actions/actions';

class GameMode extends Component {
  constructor(props) {
    super(props);
    this.submitNewGame = this.submitNewGame.bind(this);
  }

  submitNewGame(event) {
    this.props.dispatch(actions.resetGame());
    this.props.dispatch(actions.makeNewGame('single', 2)); //hard coding single player mode for now
  }

  render() {
    return (
      <div className="GameMode">
          <Header />
            <button className='button-back'>
                <Link to={'/app'}>
                Back
                </Link>
            </button>
            <br/>

            <button className='button-singleplayer'>
                <Link to={'/gameplay'} onClick={this.submitNewGame}>
                Play Now!
                </Link>
            </button>
            <br/>
      </div>
    );
  }
}

export default connect()(GameMode);