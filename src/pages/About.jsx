import React, { Component } from "react";
import Navigation from "../components/Navigation";
import { Container } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Container>
          <h3>Hi im ryan</h3>
        </Container>
      </div>
    );
  }
}
