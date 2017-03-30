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
        this.fbLogIn = this.fbLogIn.bind(this);        
      }

      fbLogIn(event) {
        this.props.dispatch(actions.logIn());
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

            <button onClick={this.fbLogIn}>
                  Login with Facebook
            </button>
 
           
            <button>
                <Link to={'/gamemodes'}>
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

export default connect (mapStateToProps)(Login);