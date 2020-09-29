import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import { browserHistory } from "react-router-dom";
// import { createBrowserHistory } from "history";
import {
  Jumbotron,
  Button,
  Container,
  Form,
  FormControl,
  Alert,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Hero extends Component {
  state = {
    input: "",
    redirect: false,
    err: false,
  };

  handleInput = (e) => {
    this.setState({ input: e.target.value });
  };

  // errAlert = () => {
  //   console.log("jalan");
  //   return (
  //     <Alert variant="danger" dismissible>
  //       <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
  //       <p>
  //         Change this and that and try again. Duis mollis, est non commodo
  //         luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
  //         Cras mattis consectetur purus sit amet fermentum.
  //       </p>
  //     </Alert>
  //   );
  // };
  handleSubmit = (e) => {
    e.preventDefault();
    // this.setState({ redirect: true });
    // const page = createBrowserHistory();

    this.state.input !== ""
      ? this.setState({ redirect: true })
      : this.setState({ err: true });
  };
  // componentDidUpdate = (prevState) => {
  //   if (this.state.input !== prevState.input) {
  //     this.handleSubmit();
  //   }
  // };
  render() {
    const query = this.state.input;
    const url = `/search/${query}`;
    let pop = false;
    if (this.state.redirect === true) {
      return <Redirect push to={url} />;
    } else if (this.state.err === true) {
      pop = true;
    }
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
                {pop ? (
                  <Row className="d-flex justify-content-center mt-3">
                    <Col lg="5">
                      <Alert variant="danger">No empty string allowed!</Alert>
                    </Col>
                  </Row>
                ) : (
                  ""
                )}
              </p>
            </div>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
