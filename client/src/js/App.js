import React, { Component } from 'react';
import Button from './button';
import Header from './header';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          
          <Header />
          <h3> A modern spin to the timeless classic, Nim </h3>
        </div>

            <button>
                <Link to={'/login'} >
                Start Game
                </Link>
            </button>

            <button>
                <Link to={'/leaderboard'} >
                Leaderboard
                </Link>
            </button>

            <button>
                <Link to={'/instructions'} >
                Instructions
                </Link>
            </button>

      </div>
    );
  }
}

export default connect ()(App);
