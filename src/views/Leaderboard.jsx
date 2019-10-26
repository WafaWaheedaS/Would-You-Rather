import React, { Component } from "react";
import logo from "../logo.svg";
import LeaderboardItem from "../components/LeaderboardItem";
import { connect } from "react-redux";

class Leaderboard extends Component {
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
          <ul>
            {this.props.usersScore &&
              this.props.usersScore.map((user, i) => (
                <LeaderboardItem key={i} user={user} />
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  let appUsers = { ...state.users };
  delete appUsers.selectedUser;
  appUsers = Object.values(appUsers).sort((a, b) => {
    let aSize =
      a.questions && a.questions.length + Object.keys(a.answers).length;
    let bSize =
      b.questions && b.questions.length + Object.keys(b.answers).length;
    return aSize > bSize ? -1 : 1;
  });
  console.log(appUsers, state.users);
  return {
    usersScore: appUsers
  };
}

export default connect(mapStateToProps)(Leaderboard);
