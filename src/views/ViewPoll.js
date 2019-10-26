import React, { Component } from "react";
import logo from "../logo.svg";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class ViewPoll extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Leaderboard</h2>
        </div>
        <div className="App-intro">
          This is the leaderboard for all 3 users: username, score, # of
          questions answered and created.
        </div>
      </div>
    );
  }
}

export default withRouter(connect()(ViewPoll));
