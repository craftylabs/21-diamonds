import React, { Component } from 'react';
import Header from './header';
import Button from './button';
import {connect} from 'react-redux';

class GameResult extends Component {
  render() {
    return (
      <div>
       <Header />


        <div className="game-result">
          <p> Whoever Loses Goes Here </p>
          <Button text={"Retry"}> </Button>
          <Button text={"Login"}> </Button>
          <Button text={"Main Menu"}> </Button>
        </div>
         <p>Login to rank up, challenge friends and track your stats.</p>
      </div>
    );
  }
}

export default connect()(GameResult);