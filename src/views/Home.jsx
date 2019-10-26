import React, { Component } from "react";
import logo from "../logo.svg";
import { Row, Col, Tab, Tabs } from "react-bootstrap";
import Question from "../components/Question";
import { connect } from "react-redux";
import { handleGetQuestions } from "../actions/shared";

class Home extends Component {
  constructor(props) {
    super(props);
    this.renderUnansweredQuestionsByUser = this.renderUnansweredQuestionsByUser.bind(
      this
    );
  }
  componentDidMount() {
    this.props.dispatch(handleGetQuestions());
    this.props.dispatch(handleGetQuestions());
  }
  renderUnansweredQuestionsByUser() {
    let otherUsers = { ...this.props.users };
    delete otherUsers.selectedUser;
    delete otherUsers[this.props.selectedUser];

    console.log("answers.", this.props.answers);
    const unanswered = Object.keys(this.props.questions).filter(
      q => !Object.keys(this.props.answers).includes(q)
    );
    console.log("unanswered:", unanswered);
    const unansweredQuestions = unanswered.map(q => this.props.questions[q]);
    // Object.keys(this.props.questions).filter(
    //   question => unanswered.includes(question)
    // );
    console.log(unansweredQuestions);
  }
  render() {
    this.renderUnansweredQuestionsByUser();
    const selectedUser = this.props.selectedUser;
    const unanswered = Object.keys(this.props.questions).filter(
      q => !Object.keys(this.props.answers).includes(q)
    );
    const unansweredQuestions = unanswered.map(q => this.props.questions[q]);
    return (
      <div className="App">
        <Row>
          <Col>
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to Would You Rather Game</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <Tabs
                defaultActiveKey="unanswered"
                transition={false}
                id="noanim-tab-example"
              >
                <Tab eventKey="unanswered" title="Unanswered">
                  {unansweredQuestions.length > 0 &&
                    unansweredQuestions.map((q, i) => (
                      <Question key={i} question={q} />
                    ))}
                </Tab>
                <Tab eventKey="answered" title="Answered"></Tab>
              </Tabs>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    selectedUser: state.users.selectedUser,
    answers: state.users[state.users.selectedUser].answers,
    questions: state.questions
  };
}

export default connect(mapStateToProps)(Home);
