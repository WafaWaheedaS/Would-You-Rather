import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";

class LeaderboardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Col>
        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Header>User Name</Card.Header>
          <Card.Body>
            <Card.Title>Score</Card.Title>
            <Card.Text>Answered & Unanswered questions</Card.Text>
          </Card.Body>
        </Card>
        <br />
      </Col>
    );
  }
}

export default LeaderboardItem;
