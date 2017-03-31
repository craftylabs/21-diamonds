import React, { Component } from 'react';
import Button from './button';
import Header from './header';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import cookie from 'react-cookie';

import * as actions from '../actions/actions';

class GameMode extends Component {
  constructor(props) {
    super(props);
    this.submitNewGame = this.submitNewGame.bind(this);
  }


  submitNewGame(event) {
    this.props.dispatch(actions.resetGame());
    this.props.dispatch(actions.makeNewGame(2));
  }

  render() {
    return (
      <div className="GameMode">
          <Header />
            <p>{cookie.load('accessToken')}</p>
            <button className='button-back'>
                <Link to={'/login'}>
                Back
                </Link>
            </button>
            <br/>

            <button className='button-singleplayer'>
                <Link to={'/gameplay'} onClick={this.submitNewGame}>
                Play Now !
                </Link>
            </button>
            <br/>
{/*} /// WIP - Multiplayer
            <button className='button-multiplayer'>
                <Link to={'/'}>
                Multi Player
                </Link>
            </button>
*/}
      </div>
    );
  }
}

export default connect()(GameMode);