import React, { Component } from "react";
import { Card } from "react-bootstrap";

class LeaderboardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    return (
      <Card border="primary" style={{ marginRight: "5px" }}>
        <Card.Header>{this.props.user && this.props.user.name}</Card.Header>
        <Card.Body>
          <img src={this.props.user.avatarURL} />
          <Card.Title>
            {" "}
            Score :{" "}
            {this.props.user &&
              this.props.user.questions.length +
                Object.keys(this.props.user.answers).length}
          </Card.Title>
          <div>
            No of Questions Answered:{" "}
            {this.props.user && Object.keys(this.props.user.answers).length}{" "}
          </div>
          <div>
            No of Questions Asked :{" "}
            {this.props.user && this.props.user.questions.length}
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default LeaderboardItem;
