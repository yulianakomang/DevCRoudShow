import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const name = "I Komang Gede Yuliana";
    const mygithub = "https://github.com/yulianakomang";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{name}</h1>
        </header>
        <p className="App-intro">
          {name} <br>
          <a href="{mygithub}">GitHub Link</a>
        </p>
      </div>
    );
  }
}

export default App;
