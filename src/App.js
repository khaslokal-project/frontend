import React, { Component } from 'react';
import './App.css';
import Navbar from './component/Navbar';

class App extends Component {
  render() {
    return (
      <div>
      <div className="App" justify="center">
        <Navbar />
      </div>
      </div>
    );
  }
}

export default App;
