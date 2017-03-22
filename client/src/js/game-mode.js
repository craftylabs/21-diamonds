import React, { Component } from 'react';
import Button from './button';
import Header from './header';


class GameMode extends Component {
  render() {
    return (
      <div className="GameMode">
          <Header />
          <Button text={"Back"}> </Button>
          <Button text={"Multiplater"}> </Button>
          <Button text={"SinglePlayer"}> </Button>
          <Button text={"Instructions"}> </Button>
      </div>
    );
  }
}

export default GameMode;