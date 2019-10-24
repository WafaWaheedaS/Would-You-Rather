import React, { Component } from "react";
import logo from "../logo.svg";
import {
  Button,
  ButtonToolbar,
  DropdownButton,
  Dropdown
} from "react-bootstrap";

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
          <ButtonToolbar style={{ marginLeft: "40vw" }}>
            {" "}
            <DropdownButton
              id="dropdown-basic-button"
              title="Dropdown button"
              style={{ marginRight: "5px" }}
            >
              {" "}
              {/*select a user by default, so atleast one user is selected*/}
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <Button variant="outline-primary" onClick={this.props.onLogin}>
              Login
            </Button>
          </ButtonToolbar>
        </p>
      </div>
    );
  }
}

export default Login;
