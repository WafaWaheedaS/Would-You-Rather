import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";

class Question extends Component {
  constructor(props) {
    super(props);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
  }
  state = {
    selectedOption: "optionOne"
  };
  handleOptionChange(current) {
    this.setState({
      selectedOption: current.target.value
    });
  }
  submitAnswer(e) {
    e.preventDefault();
    console.log(this.state.selectedOption);
  }
  render() {
    console.log(this.props);
    return (
      <Col>
        <Card>
          <Card.Header>{this.props.question.author} asks:</Card.Header>
          <Card.Body>
            <Card.Title>Would you rather...</Card.Title>
            <form onSubmit={this.handleFormSubmit}>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value="optionOne"
                    checked={this.state.selectedOption === "optionOne"}
                    onChange={this.handleOptionChange}
                    style={{ marginRight: "5px" }}
                  />
                  {this.props.question.optionOne.text}
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value="optionTwo"
                    checked={this.state.selectedOption === "optionTwo"}
                    onChange={this.handleOptionChange}
                    style={{ marginRight: "5px" }}
                  />
                  {this.props.question.optionTwo.text}
                </label>
              </div>

              <button
                className="btn btn-primary"
                type="submit"
                onClick={this.submitAnswer}
              >
                Submit
              </button>
            </form>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default Question;
