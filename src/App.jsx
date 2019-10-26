import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/Home";
import Leaderboard from "./views/Leaderboard";
import ViewPoll from "./views/ViewPoll";
import Question from "./views/Question.js";
import CreateQuestion from "./views/CreateQuestion";
import Page404 from "./views/Page404";
import Navbar from "./components/Navbar";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  state = {
    loggedIn: false
  };

  handleLogin() {
    this.setState({ loggedIn: true });
  }

  handleLogout() {
    this.setState({ loggedIn: false });
  }

  render() {
    return (
      <div className="container-fluid">
        <Navbar
          isLoggedIn={this.state.loggedIn}
          username={this.props.users && this.props.users.selectedUser}
          onLogoutClick={this.handleLogout}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              this.state.loggedIn ? (
                <Redirect to="/home" />
              ) : (
                <Login
                  isLoggedIn={this.state.loggedIn}
                  onLogin={this.handleLogin}
                  allUsers={this.userOptions}
                  onUserChange={this.handleUserChange}
                />
              )
            }
          />
          <Route
            path="/home"
            render={() =>
              this.state.loggedIn ? <Home /> : <Redirect to="/" />
            }
          />
          <Route
            path="/question/:id"
            render={() =>
              this.state.loggedIn ? <Question /> : <Redirect to="/" />
            }
          />

          <Route
            path="/add"
            render={() =>
              this.state.loggedIn ? <CreateQuestion /> : <Redirect to="/" />
            }
          />
          <Route
            exac
            path="/leaderboard"
            render={() =>
              this.state.loggedIn ? <Leaderboard /> : <Redirect to="/" />
            }
          />
          <Route
            path="/viewpoll/:id"
            render={() =>
              this.state.loggedIn ? <ViewPoll /> : <Redirect to="/" />
            }
          />

          <Route render={() => <Page404 isLoggedIn={this.state.loggedIn} />} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(mapStateToProps)(App);
