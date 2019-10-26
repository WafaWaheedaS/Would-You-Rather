import React, { Component } from "react";
import logo from "../logo.svg";
import { Row, Col, Tab, Tabs } from "react-bootstrap";
import Question from "../components/Question";
import { connect } from "react-redux";
import { handleGetQuestions } from "../actions/shared";
import AnsweredQuestion from "../components/AnsweredQuestion";

class Home extends Component {
  constructor(props) {
    super(props);
    this.renderUnansweredQuestionsByUser = this.renderUnansweredQuestionsByUser.bind(
      this
    );
  }
  componentDidMount() {
    this.props.dispatch(handleGetQuestions());
  }
  renderUnansweredQuestionsByUser() {
    let otherUsers = { ...this.props.users };
    delete otherUsers.selectedUser;
    delete otherUsers[this.props.selectedUser];

    const unanswered = Object.keys(this.props.questions).filter(
      q => !Object.keys(this.props.answers).includes(q)
    );
    const unansweredQuestions = unanswered.map(q => this.props.questions[q]);
    // Object.keys(this.props.questions).filter(
    //   question => unanswered.includes(question)
    // );
    const answeredQuestions = Object.keys(this.props.answers).map(
      q => this.props.questions[q]
    );
  }
  render() {
    if (!this.props.questions && !this.props.answers) {
      return null;
    } else if (this.props.questions && this.props.answers) {
      this.renderUnansweredQuestionsByUser();
      const unanswered = Object.keys(this.props.questions).filter(
        q => !Object.keys(this.props.answers).includes(q)
      );
      const unansweredQuestions = unanswered.map(q => this.props.questions[q]);
      // const answers = Object.keys(this.props.answers);
      // const answeredQuestions = answers.map(q => this.props.questions[q]);
      // const answeredQuestionsWithAnswer =
      // answeredQuestions[0] &&
      // answeredQuestions.map(aq =>
      //   answers.map(a => {
      //     a === aq.id && answeredQuestions[aq.id];
      //   })
      // );
      const selectedOptions = Object.keys(this.props.answers).map(a => {
        const x = this.props.questions[a];
        const y = this.props.answers[a];
        const author = x && x.author;
        const answer = x && y && x[y].text;
        const obj = {
          question: a,
          answer: answer,
          author: author
        };
        return obj;
      });
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
                  <Tab eventKey="answered" title="Answered">
                    {selectedOptions.length > 0 &&
                      selectedOptions.map(
                        (q, i) => q && <AnsweredQuestion key={i} question={q} />
                      )}
                  </Tab>
                </Tabs>
              </div>
            </Col>
          </Row>
        </div>
      );
    }
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
