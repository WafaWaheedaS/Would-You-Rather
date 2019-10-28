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
    const oneVotes = question.optionOne.votes.length;
    const twoVotes = question.optionTwo.votes.length;

    const total = oneVotes + twoVotes;
    const onePercentage = Math.floor((oneVotes / total) * 100);
    const twoPercentage = Math.floor((twoVotes / total) * 100);
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
                      {onePercentage}
                    </label>
                  </div>
                  <div>
                    <label>
                      {question.optionTwo.text}
                      {" -->"}
                      {twoPercentage}
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
