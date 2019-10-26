import React, { Component } from "react";
import logo from "../logo.svg";
import { Card, Button, Form, Col } from "react-bootstrap";

class CreateQuestion extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Ask a New Question</h2>
        </div>
        <div className="App-intro">
          <Card body>
            <Card>
              <Card.Header as="h5">Create New Question</Card.Header>
              <Card.Body>
                <Card.Title>Would you rather ......</Card.Title>
                <Form>
                  <Form.Row>
                    <Col>
                      <Form.Control placeholder="First option" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Second option" />
                    </Col>
                  </Form.Row>
                </Form>
                <Button variant="primary" style={{ marginTop: "10px" }}>
                  Submit{" "}
                </Button>
              </Card.Body>
            </Card>
          </Card>
        </div>
      </div>
    );
  }
}

export default CreateQuestion;
