import React, { Component } from 'react';
import './App.css';
import AppBar from './Components/Constants/AppBar'
import SignUp from './Screens/SignUp'

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppBar />
        </header>
        <SignUp />
      </div>
    );
  }
}

export default App;
