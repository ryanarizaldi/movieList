import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
// import { browserHistory } from "react-router-dom";
import { createBrowserHistory } from "history";
import {
  Jumbotron,
  Button,
  Container,
  Form,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Hero extends Component {
  state = {
    input: [],
  };

  handleInput = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const page = createBrowserHistory();
    const query = this.state.input;
    page.push("/search/" + query);
    // browserHistory.push("/search");
  };
  render() {
    // console.log(history);
    return (
      <div>
        <Jumbotron>
          <Container>
            <div className="jumbotron-content">
              <h1>This is not a Netflix</h1>
              <p>its only a movie list</p>
              <p>
                <Form inline onSubmit={this.handleSubmit}>
                  <FormControl
                    type="text"
                    placeholder="Search movie..."
                    className="mr-sm-2"
                    onChange={this.handleInput}
                  />
                  <Button variant="danger" type="submit">
                    Search
                  </Button>
                </Form>
              </p>
            </div>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
