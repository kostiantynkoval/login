import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './Header.css';

class Header extends Component{
  
  render() {
    return (
      <header className="App-header">
        <Link to="/login" className="sign-button">Log In</Link>
        <Link to="/register" className="sign-button">Sign In</Link>
      </header>
    );
  }
}

export default Header;