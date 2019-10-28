import React, { Component } from "react";
import logo from "../logo.svg";
import { Card, Button } from "react-bootstrap";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { saveQuestion } from "../actions/shared";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

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
  handleSubmit(values) {
    const selectedUser = this.props.selectedUser;
    this.props.dispatch(
      saveQuestion(values.optionOne, values.optionTwo, selectedUser)
    );
    this.props.history.push("/home");
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
                  {({ errors }) => (
                    <Form>
                      <div className="col-12" style={{ marginBottom: "10px" }}>
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
                      <div className="col-12" style={{ marginBottom: "10px" }}>
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
                      {Object.keys(errors).length === 0 ? (
                        <Button
                          variant="primary"
                          style={{ marginTop: "10px" }}
                          type="submit"
                        >
                          Submit{" "}
                        </Button>
                      ) : (
                        <Button
                          variant="primary"
                          style={{ marginTop: "10px" }}
                          disabled
                        >
                          Submit{" "}
                        </Button>
                      )}
                    </Form>
                  )}
                </Formik>
              </Card.Body>
            </Card>
          </Card>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedUser: state.users.selectedUser
  };
}

export default withRouter(connect(mapStateToProps)(CreateQuestion));
