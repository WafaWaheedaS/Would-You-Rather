import React, { Component } from "react";
import logo from "../logo.svg";
import { Button, Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import Question from "../components/Question";
import { connect } from "react-redux";
import { handleGetQuestions } from "../actions/shared";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(handleGetQuestions());
  }

  render() {
    return (
      <Container>
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
                  defaultActiveKey="home"
                  transition={false}
                  id="noanim-tab-example"
                >
                  <Tab eventKey="unanswered" title="Unanswered">
                    <Question />
                  </Tab>
                  <Tab eventKey="answered" title="Answered"></Tab>
                </Tabs>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default connect()(Home);
