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
  componentDidMount() {
    if (
      this.props.users[this.props.selectedUser].answers[
        this.props.match.params.id
      ]
    ) {
      this.setState({
        hasAnswered: true
      });
    }
  }
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
    this.setState({ hasAnswered: true }, () =>
      this.props.dispatch(
        submitAnswerToQuestions({
          id: this.props.match.params.id,
          selectedUser: this.props.selectedUser,
          answer: this.state.selectedOption
        })
      )
    );
    // .then(() => {
    //   this.setState({ hasAnswered: true });
    //   //this.props.history.push("/questions/" + this.props.match.params.id);
    // });
  }
  render() {
    const question = this.props.questions[this.props.match.params.id];
    if (this.state.hasAnswered === false) {
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
                  <img src={this.props.users[question.author].avatarURL} />
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
    } else if (this.state.hasAnswered === true) {
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
                  <img src={this.props.users[question.author].avatarURL} />
                  <Card.Title>Would you rather...</Card.Title>
                  <form onSubmit={this.submitAnswer}>
                    <div>
                      <label>
                        {question.optionOne.text}, answered by {oneVotes}{" "}
                        user(s),
                        {" --> "}
                        {onePercentage} %
                      </label>
                    </div>
                    <div>
                      <label>
                        {question.optionTwo.text}, answered by {twoVotes}{" "}
                        users(s),
                        {" -->"}
                        {twoPercentage} %
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
}
function mapStateToProps(state) {
  return {
    selectedUser: state.users.selectedUser,
    users: state.users,
    questions: state.questions
  };
}

export default withRouter(connect(mapStateToProps)(QuestionView));
