import React, { Component } from 'react';
import logo from '../logo.svg';



class Login extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Would You Rather Game</h2>
        </div>
        <p className="App-intro">
          To get started, Login As:
          DROPDOWN HERE..
          <button onClick={this.props.onLogin}>Login</button>
        </p>
      </div>
    );
  }
}

export default Login;
