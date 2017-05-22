import React from 'react';
import logo from './logo.png';
import './App.css';

class Header extends React.Component {
  render() {
    return (
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome Dota List Hero</h2>
        </div>
    )
  }
}

export default Header;
