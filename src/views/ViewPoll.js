import React, { Component } from "react";
import logo from "../logo.svg";
import { Card, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class ViewPoll extends Component {
  state = {};
  componentdidMount() {
    console.log(this.props.match.params.id);
  }
  render() {
    const question = this.props.questions[this.props.match.params.id];

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>POLL</h2>
        </div>
        <div className="App-intro">
          This is the poll for a particular question.{" "}
          <Col>
            <Card>
              <Card.Header>{question.author} asks:</Card.Header>
              <Card.Body>
                <Card.Title>Would you rather...</Card.Title>
                <form onSubmit={this.submitAnswer}>
                  <div>
                    <label>
                      {question.optionOne.text}
                      {" --> "}
                      {(question.optionOne.votes.length / 3) * 100}
                    </label>
                  </div>
                  <div>
                    <label>
                      {question.optionTwo.text}
                      {" -->"}
                      {(question.optionTwo.votes.length / 3) * 100}
                    </label>
                  </div>
                </form>
              </Card.Body>
            </Card>
          </Col>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedUser: state.users.selectedUser,
    questions: state.questions
  };
}

export default withRouter(connect(mapStateToProps)(ViewPoll));
