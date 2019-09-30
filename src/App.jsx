import React, { Component } from "react";
import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/Home";
import Leaderboard from "./views/Leaderboard";
import CreateQuestion from "./views/CreateQuestion";
import Page404 from "./views/Page404";

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
      <div>
        <Switch>
          <Route exact path="/home" component={Home} />
          {/* <Route
            path="/"
            render={() =>
              this.state.loggedIn ? (
                <Redirect to="/home" />
              ) : (
                <Login
                  isLoggedIn={this.state.loggedIn}
                  onLogin={this.handleLogin}
                />
              )
            }
          />
          <Route
            exact
            path="/home"
            render={() =>
              this.state.loggedIn ? <Home /> : <Redirect to="/" />
            }
          />
          <Route
            exact
            path="/create-question"
            render={() =>
              this.state.loggedIn ? <CreateQuestion /> : <Redirect to="/" />
            }
          />
          <Route
            exact
            path="/leaderboard"
            render={() =>
              this.state.loggedIn ? <Leaderboard /> : <Redirect to="/" />
            }
          /> */}
          <Route render={() => <Page404 isLoggedIn={this.state.loggedIn} />} />
        </Switch>
      </div>
    );
  }
}

export default App;