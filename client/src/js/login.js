import React, {Component} from 'react';
import Header from './header';
import Button from './button';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';
import GameMode from './game-mode';

import * as actions from '../actions/actions';

class Login extends Component {
      constructor(props) {
        super(props);
        this.submitNewGame = this.submitNewGame.bind(this);        
      }

      submitNewGame(event) {
        console.log(event);
        this.props.dispatch(actions.makeNewGame(2));
      }

      render() {

      if (this.props.loggedIn) {
        return (

          <GameMode />

          )
      }

      else {
      return (
      <div>
       <Header />

        <div className="login">
            <button className='button-back'>
                <Link to={'/app'}>
                Main Menu
                </Link>
            </button>
            <br/>

            <a href='/api/auth/facebook'>
            <button className='button-facebook'>
                  Login with Facebook
            </button>
            </a>
           <br/>
           
            <button className='button-guest'>
                <Link to={'/gamemodes'} onClick={this.submitNewGame}>
                Play as Guest
                </Link>
            </button>


        </div>
      
      </div>
    )
  }
 }
}

const mapStateToProps = (state, props) => {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect ()(Login);