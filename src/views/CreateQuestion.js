import React, { Component } from "react";
import logo from "../logo.svg";
import { Card, Button } from "react-bootstrap";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

const createQuestionValidationSchema = Yup.object().shape({
  optionOne: Yup.string()
    .trim()
    .required("Option One is required"),
  optionTwo: Yup.string()
    .trim()
    .required("Option Two is required")
});

class CreateQuestion extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values, { setStatus }) {
    // this.props.handleSubmit(values, setStatus);
  }

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
                <Formik
                  initialValues={{
                    optionOne: "",
                    optionTwo: ""
                  }}
                  onSubmit={this.handleSubmit}
                  validationSchema={createQuestionValidationSchema}
                >
                  {({ status, errors }) => (
                    <Form>
                      <div className="col-3" style={{ marginBottom: "10px" }}>
                        <label htmlFor="optionOne" style={{ display: "block" }}>
                          Option One <sup>*</sup>
                        </label>
                        <Field
                          type="text"
                          name="optionOne"
                          className="form-control "
                        />
                        <ErrorMessage
                          name="optionOne"
                          className="error"
                          component="div"
                        />
                      </div>
                      <div className="col-3" style={{ marginBottom: "10px" }}>
                        <label htmlFor="optionTwo" style={{ display: "block" }}>
                          Option Two <sup>*</sup>
                        </label>
                        <Field
                          type="text"
                          name="optionTwo"
                          className="form-control "
                        />
                        <ErrorMessage
                          name="optionTwo"
                          className="error"
                          component="div"
                        />
                      </div>
                    </Form>
                  )}
                </Formik>
                {/* <Form>
                  <Form.Row>
                    <Col>
                      <Form.Control placeholder="First option" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Second option" />
                    </Col>
                  </Form.Row>
                </Form> */}
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
