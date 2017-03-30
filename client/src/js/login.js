import React, {Component} from 'react';
import Header from './header';
import Button from './button';
import {connect} from 'react-redux';
import cookie from 'react-cookie';

import {Link} from 'react-router-dom';
import GameMode from './game-mode';

import * as actions from '../actions/actions';

class Login extends Component {
      constructor(props) {
        super(props);
        this.getUserInfo = this.getUserInfo.bind(this);        
      }

      getUserInfo(event) {
        event.preventDefault();
        window.location.href='/api/auth/facebook';
        let savedCookie = cookie.load('accessToken');        
        if (savedCookie !== null) {
         this.props.dispatch(actions.getUserInfo('10110600674071001'));         
        }

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

            <button className='button-facebook' onClick={this.getUserInfo}>
                  Login with Facebook
            </button>
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

export default connect (mapStateToProps)(Login);