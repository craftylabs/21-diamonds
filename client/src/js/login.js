import React, {Component} from 'react';
import Header from './header';
import Button from './button';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

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

      return (
      <div>
       <Header />

        <div className="login">
            <button>
                <Link to={'/app'}>
                Back
                </Link>
            </button>

            <button>
                <Link to={'/{`${SERVER_ROOT}/auth/facebook`}'}  >
                Login with Facebook
                </Link>
            </button>

            <button>
                <Link to={'/{`${SERVER_ROOT}/auth/google`}'} >
                Login with Google
                </Link>
            </button>

            <button>
                <Link to={'/gamemodes'} onClick={this.submitNewGame}>
                Play as Guest
                </Link>
            </button>


        </div>
      
      </div>
    )
  }
}

export default connect ()(Login);