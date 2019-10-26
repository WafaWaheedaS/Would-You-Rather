import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { getAnswer } from "../actions/users";
import { submitAnswerToQuestions } from "../actions/shared";

class AnsweredQuestion extends Component {
  constructor(props) {
    super(props);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleViewPollClick = this.handleViewPollClick.bind(this);
  }
  state = {
    selectedOption: "optionOne"
  };
  handleOptionChange(current) {
    this.setState({
      selectedOption: current.target.value
    });
  }

  handleViewPollClick() {}
  render() {
    console.log(this.props);
    return (
      <Col>
        <Card>
          <Card.Header>{this.props.question.author} asks:</Card.Header>
          <Card.Body>
            <Card.Title>Would you rather...</Card.Title>
            <p>{this.props.question.answer}</p>
            <button
              className="btn btn-primary"
              type="submit"
              onClick={this.handleViewPollClick}
            >
              View Poll
            </button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedUser: state.users.selectedUser
  };
}

export default connect(mapStateToProps)(AnsweredQuestion);
