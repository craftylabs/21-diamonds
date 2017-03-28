import React, { Component } from 'react';
import Button from './button';
import Header from './header';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class GameMode extends Component {
  render() {
    return (
      <div className="GameMode">
          <Header />

            <button>
                <Link to={'/login'}>
                Back
                </Link>
            </button>

            <button>
                <Link to={'/gameplay'}>
                Single Player
                </Link>
            </button>

            <button>
                <Link to={'/'}>
                Multi Player
                </Link>
            </button>
      </div>
    );
  }
}

export default connect()(GameMode);