import React, { Component } from 'react';
import Button from './button';
// import logo from './logo.svg';
// import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          
          <h2>21 Diamonds</h2>
          <h3> A modern spin to the timeless classic, Nim </h3>
        </div>
          <Button text={"Start Game"}> </Button>
          <Button text={"LeaderBoard"}> </Button>
          <Button text={"Instructions"}> </Button>
          <Button text={"log in"}> </Button>
      </div>
    );
  }
}

export default App;
