import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/Home";
import Leaderboard from "./views/Leaderboard";
import ViewPoll from "./views/ViewPoll";
import QuestionView from "./views/QuestionView.js";
import CreateQuestion from "./views/CreateQuestion";
import Page404 from "./views/Page404";
import Navbar from "./components/Navbar";
import { connect } from "react-redux";
import Cookies from "js-cookie";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  state = {
    loggedIn: false
  };

  // componentDidMount() {
  //   if (Cookies.get("signin-status")) {
  //     this.setState({ loggedIn: true });
  //   }
  // }
  handleLogin() {
    const inHalfADay = 0.5;
    this.setState({ loggedIn: true }, () =>
      Cookies.set("signin-status", true, { expires: inHalfADay })
    );
  }

  handleLogout() {
    this.setState({ loggedIn: false }, () => Cookies.remove("signin-status"));
  }

  renderViews() {
    return this.props.selectedUser === null ? (
      <Route path="*" component={Login} />
    ) : (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/leaderboard" exact component={Leaderboard} />
        <Route path="/questions/:id" component={QuestionView} />
        <Route path="/add" exact component={CreateQuestion} />
        <Route path="/*" component={Page404} />
      </Switch>
    );
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
                <Redirect
                  to={{
                    pathname: "/home",
                    state: { from: location.pathname }
                  }}
                />
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
            path="/questions/:id"
            render={() =>
              this.state.loggedIn ? <QuestionView /> : <Redirect to="/" />
            }
          />

          <Route
            path="/add"
            render={() =>
              this.state.loggedIn ? <CreateQuestion /> : <Redirect to="/" />
            }
          />
          <Route
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
  return { users: state.users, selectedUser: state.users.selectedUser };
}

export default withRouter(connect(mapStateToProps)(App));
