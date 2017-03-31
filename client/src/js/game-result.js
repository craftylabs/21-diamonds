import React, { Component } from 'react';
import Header from './header';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

function LoginBtn() {
  return (
    <div> 
      <p>Login to rank up, challenge friends and track your stats.</p>
        <a href='/api/auth/facebook'>
          <button>Login with Facebook</button>
        </a>
    </div>
  );
}

function GameBtn(props) {
  return (
      <div>
        <div className="game-result">
          <p> Player {props.loser} loses!! </p>
            <button>
                <Link to={'/gamemodes'} >
                Retry
                </Link>
            </button>
            <button>
                <Link to={'/app'} >
                Main Menu
                </Link>
            </button>          
        </div>
      </div>
  );
}

class GameResult extends Component {

  render() {
    if (this.props.loggedIn) {
      return (
        <div>
          <Header />
          <GameBtn loser={this.props.loser}/>
        </div>
      )
    }
     return (
       <div>
        <Header />
        <GameBtn />
        <LoginBtn />
       </div>
     )
  }
}

const mapStateToProps = (state, props) => {
  return {
    loser: state.loser,
    loggedIn: state.loggedIn,
    userName: state.userName
  }

}


export default connect(mapStateToProps)(GameResult);