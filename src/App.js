import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './About';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
