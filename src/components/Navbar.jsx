import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            ProjRedux
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <NavLink to="/home" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/create-question" className="nav-link">
                New Question
              </NavLink>
              <NavLink to="/leaderboard" className="nav-link">
                Leaderboard
              </NavLink>
            </ul>
            {this.props.isLoggedIn && (
              <span className="navbar-text">
                Hello, {this.props.username}! {"   "}
                <span type="button" onClick={this.props.onLogoutClick}>
                  Logout
                </span>
              </span>
            )}
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
