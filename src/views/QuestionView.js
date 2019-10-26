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
      getAnswer(this.props.match.params.id, this.state.selectedOption)
    );

    setTimeout(() => {
      this.props
        .dispatch(
          submitAnswerToQuestions(
            this.props.selectedUser,
            this.props.match.params.id,
            this.state.selectedOption
          )
        )
        .then(() => {
          this.props.history.push("/viewpoll/" + this.props.match.params);
        });
    }, 500);
  }
  render() {
    const question = this.props.questions[this.props.match.params.id];

    console.log(this.props.match.params, question);
    return (
      <Col>
        <Card>
          <Card.Header>{question.author} asks:</Card.Header>
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
                  {question.optionOne.text}
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
                  {question.optionTwo.text}
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
    selectedUser: state.users.selectedUser,
    questions: state.questions
  };
}

export default withRouter(connect(mapStateToProps)(QuestionView));
