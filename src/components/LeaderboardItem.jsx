import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";

class LeaderboardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.user);
    return (
      <Col>
        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Header>{this.props.user && this.props.user.name}</Card.Header>
          <Card.Body>
            <Card.Title>
              {" "}
              Score :{" "}
              {this.props.user &&
                this.props.user.questions.length +
                  Object.keys(this.props.user.answers).length}
            </Card.Title>
            <div>
              Answered Questions :{" "}
              {this.props.user && Object.keys(this.props.user.answers).length}{" "}
            </div>
            <div>
              Created Questions :{" "}
              {this.props.user && this.props.user.questions.length}
            </div>
          </Card.Body>
        </Card>
        <br />
      </Col>
    );
  }
}

export default LeaderboardItem;
