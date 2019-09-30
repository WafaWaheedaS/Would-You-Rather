import React, { Component } from 'react';
import logo from '../logo.svg';


class CreateQuestion extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Ask a New Question</h2>
        </div>
        <p className="App-intro">
         New question Form UI here
        </p>
      </div>
    );
  }
}

export default CreateQuestion;
