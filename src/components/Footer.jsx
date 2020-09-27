import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

library.add(fab);

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <FontAwesomeIcon icon={["fab", "linkedin"]} />
        <FontAwesomeIcon icon={["fab", "github"]} />
        <FontAwesomeIcon icon={["fab", "facebook"]} />
        <FontAwesomeIcon icon={["fab", "instagram"]} />
        <br />
        <h5>Ryan Achmad Rizaldi 2020</h5>
      </div>
    );
  }
}
