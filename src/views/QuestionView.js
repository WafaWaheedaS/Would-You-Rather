import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { getAnswer } from "../actions/users";
import { submitAnswerToQuestions } from "../actions/shared";
import { withRouter } from "react-router-dom";

class QuestionView extends Component {
  constructor(props) {
    super(props);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
  }
  state = {
    selectedOption: "optionOne"
  };
  handleOptionChange(current) {
    this.setState({
      selectedOption: current.target.value
    });
  }
  submitAnswer(e) {
    e.preventDefault();
    this.props.dispatch(
      getAnswer(this.props.question.id, this.state.selectedOption)
    );

    setTimeout(() => {
      this.props
        .dispatch(
          submitAnswerToQuestions(
            this.props.selectedUser,
            this.props.question.id,
            this.state.selectedOption
          )
        )
        .then(() => {
          this.props.history.push("/viewpoll/" + this.props.question.id);
        });
    }, 500);
  }
  render() {
    return (
      <Col>
        <Card>
          <Card.Header>{this.props.question.author} asks:</Card.Header>
          <Card.Body>
            <Card.Title>Would you rather...</Card.Title>
            <form onSubmit={this.submitAnswer}>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value="optionOne"
                    checked={this.state.selectedOption === "optionOne"}
                    onChange={this.handleOptionChange}
                    style={{ marginRight: "5px" }}
                  />
                  {this.props.question.optionOne.text}
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value="optionTwo"
                    checked={this.state.selectedOption === "optionTwo"}
                    onChange={this.handleOptionChange}
                    style={{ marginRight: "5px" }}
                  />
                  {this.props.question.optionTwo.text}
                </label>
              </div>

              <button
                className="btn btn-primary"
                type="submit"
                onClick={this.submitAnswer}
              >
                Submit
              </button>
            </form>
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

export default withRouter(connect(mapStateToProps)(QuestionView));
