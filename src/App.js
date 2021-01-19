import React, { Component } from 'react';
import './App.css';
import Clock from './clock.js';
import MyComponent from './MyComponent';
import ColoredBlock from './components/ColoredBlock';




class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hi {this.props.name}!
        </p>
        <p><Clock /></p>
        <p><MyComponent/></p>
        <ColoredBlock />
      </div>
    );
  }
}

export default App;
