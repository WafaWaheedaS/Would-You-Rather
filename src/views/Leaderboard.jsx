import React, { Component } from "react";
import logo from "../logo.svg";
import LeaderboardItem from "../components/LeaderboardItem";

class Leaderboard extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Leaderboard</h2>
        </div>
        <p className="App-intro">
          Show leaderboard for all 3 users: username, score, # of questions
          answered and created.
          <LeaderboardItem />
        </p>
      </div>
    );
  }
}

export default Leaderboard;
