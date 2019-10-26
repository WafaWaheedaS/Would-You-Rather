import React, { Component } from "react";
import logo from "../logo.svg";
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
    selectedOption: "optionOne",
    hasAnswered: false
  };
  handleOptionChange(current) {
    this.setState({
      selectedOption: current.target.value
    });
  }
  submitAnswer(e) {
    e.preventDefault();

    console.log(
      this.props.match.params.id,
      this.props.selectedUser,
      this.state.selectedOption
    );
    // this.props
    //   .dispatch(
    //     getAnswer(this.props.match.params.id, this.state.selectedOption)
    //   )
    //   .then(() => {
    this.props
      .dispatch(
        submitAnswerToQuestions({
          id: this.props.match.params.id,
          selectedUser: this.props.selectedUser,
          answer: this.state.selectedOption
        })
      )
      .then(() => {
        this.props.history.push("/viewpoll/" + this.props.match.params.id);
      });
    // });
  }
  render() {
    const question = this.props.questions[this.props.match.params.id];

    console.log(this.props.match.params, question);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Question</h2>
        </div>
        <div className="App-intro">
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

export default withRouter(connect(mapStateToProps)(QuestionView));
