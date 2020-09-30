import React, { Component } from 'react';
import PadBanks from './PadBanks';
import Logo from './Logo';
import Control from './Control';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      display: 'drumpad'
    }
    this.updateDisplay = this.updateDisplay.bind(this);
  }
  updateDisplay(name){
    this.setState({
      display: name
    });
  }
  render(){
    return (
      <div id="drum-machine">
          <PadBanks updateDisplay={this.updateDisplay}/>
          <Logo></Logo>
          <Control display={this.state.display}></Control>
      </div>
    );
  }
  }


export default App;
