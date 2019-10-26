import React, { Component } from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

class Page404 extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            {" "}
            404 <br /> Sorry, the page you requested is not found!{" "}
          </h2>
        </div>
        <div className="lead grey-text w-responsive mx-auto mb-5">
          Since it’s unavailable, step over to one of these instead:
        </div>
        <div className="d-flex justify-content-center align-items-center ">
          <Link to="/home" className="nav-link">
            <button
              gradient="blue"
              type="button"
              className="btn-block z-depth-2"
            >
              Go Home
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Page404;
