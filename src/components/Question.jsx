import React, { Component } from "react";
import { Button, Card, Col, Form } from "react-bootstrap";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Col>
        <Card>
          <Card.Header>Question 1: User X asks:</Card.Header>
          <Card.Body>
            <Card.Title>Would you rather...</Card.Title>
            <Form.Check type="radio" label={"Option 1"} />
            <Form.Check type="radio" label={"Option 2"} />
            <Button variant="primary">view poll</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default Question;
