import React, { Component } from 'react';
import Button from './button';


class GameMode extends Component {
  render() {
    return (
      <div className="GameMode">
          <Button text={"Back"}> </Button>
          <Button text={"Multiplater"}> </Button>
          <Button text={"SinglePlayer"}> </Button>
          <Button text={"Instructions"}> </Button>
      </div>
    );
  }
}

export default GameMode;