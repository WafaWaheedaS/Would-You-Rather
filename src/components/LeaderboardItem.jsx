import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";

class LeaderboardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { user } = this.props.user;
    console.log(user);
    return (
      <Col>
        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Header>{user && user.name}</Card.Header>
          <Card.Body>
            <Card.Title>
              {" "}
              Score :{" "}
              {user && user.questions.length + Object.keys(user.answers).length}
            </Card.Title>
            <div>
              Answered Questions : {user && Object.keys(user.answers).length}{" "}
            </div>
            <div>Created Questions : {user && user.questions.length}</div>
          </Card.Body>
        </Card>
        <br />
      </Col>
    );
  }
}

export default LeaderboardItem;
