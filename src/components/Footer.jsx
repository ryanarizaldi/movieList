import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
// import { Link, Redirect } from "react-router-dom";

// import { Navbar, Nav, Container } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

library.add(fab);

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <a
          href="https://www.linkedin.com/in/ryanarizaldi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>

        <a
          href="https://www.github.com/ryanarizaldi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>

        <a
          href="https://www.linkedin.com/in/ryanarizaldi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "facebook"]} />
        </a>

        <a
          href="https://www.instagram.com/ryanarizaldi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "instagram"]} />
        </a>

        <br />
        <h5>Ryan Achmad Rizaldi © 2020</h5>
      </div>
    );
  }
}
