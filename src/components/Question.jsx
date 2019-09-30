import React, { Component } from "react";
import { Button, Card, Col } from "react-bootstrap";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Question 1</Card.Title>
            <Card.Text>actual question..</Card.Text>
            <Button variant="primary">view poll</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default Question;
