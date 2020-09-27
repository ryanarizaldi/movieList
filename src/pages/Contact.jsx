import React, { Component } from "react";
import Navigation from "../components/Navigation";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Container>
          <h3>You can callme on my cellphone</h3>
        </Container>
      </div>
    );
  }
}
