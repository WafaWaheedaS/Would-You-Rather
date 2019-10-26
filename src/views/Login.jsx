import React, { Component } from "react";
import logo from "../logo.svg";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { handleGetUsers } from "../actions/shared";
import { getSelectedUser } from "../actions/users";
import Select from "react-select";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleUserChange = this.handleUserChange.bind(this);
  }
  state = {
    selectedUser: { value: "sarahedo", label: "Sarah Edo" }
  };
  componentDidMount() {
    this.props.dispatch(handleGetUsers());
  }
  handleUserChange(selectedOption) {
    this.props.dispatch(getSelectedUser(selectedOption.value));
    this.setState({ selectedUser: selectedOption });
  }
  render() {
    const userOptions = Object.keys(this.props.users).map(user => {
      let obj = {};
      obj.value = this.props.users[user].id;
      obj.label = this.props.users[user].name;
      return obj;
    });
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Would You Rather Game</h2>
        </div>
        <div className="App-intro row" style={{ marginTop: "20px" }}>
          To get started, Login As: <br />
          <Select
            className="col-6"
            options={userOptions}
            value={this.state.selectedUser}
            onChange={this.handleUserChange}
          />
          <Button variant="outline-primary" onClick={this.props.onLogin}>
            Login
          </Button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(mapStateToProps)(Login);
