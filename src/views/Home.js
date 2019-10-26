import React, { Component } from "react";
import logo from "../logo.svg";
import { Row, Col, Tab, Tabs, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { handleGetQuestions } from "../actions/shared";
import AnsweredQuestion from "../components/AnsweredQuestion";
import { withRouter } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleViewQuestion = this.handleViewQuestion.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(handleGetQuestions());
  }

  handleViewQuestion(id) {
    console.log(id);
    this.props.history.push("/question/" + id);
  }
  render() {
    if (!this.props.questions && !this.props.answers) {
      return null;
    } else if (this.props.questions && this.props.answers) {
      const unanswered = Object.keys(this.props.questions).filter(
        q => !Object.keys(this.props.answers).includes(q)
      );
      const unansweredQuestions = unanswered.map(q => this.props.questions[q]);
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
                        <Col key={i}>
                          <Card>
                            <Card.Header>{q.author} asks:</Card.Header>
                            <Card.Body>
                              <Card.Title>Would you rather...</Card.Title>
                              <div>
                                <label>{q.optionOne.text}</label>
                              </div>
                              <div>
                                <label>{q.optionTwo.text}</label>
                              </div>
                              <div>
                                <button
                                  className="btn btn-primary"
                                  type="submit"
                                  onClick={() => this.handleViewQuestion(q.id)}
                                >
                                  View Question
                                </button>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
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

export default withRouter(connect(mapStateToProps)(Home));
