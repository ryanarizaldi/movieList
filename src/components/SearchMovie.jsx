import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Card, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import noImg from "../assets/img/noimg.png";

export default class SearchMovie extends Component {
  state = {
    movies: [],
  };

  componentDidMount = () => {
    const keyword = this.props.keyword;
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=0f4cb6189e20110c05e4b524ae7821ac&query=${keyword}`
    )
      .then((response) => response.json())
      .then((json) => {
        const data =
          json.results.length > 19 ? json.results.slice(0, 20) : json.results;
        this.setState({
          movies: data,
        });
      });
  };
  render() {
    const keyword = this.props.keyword;

    return (
      <div className="search">
        <Container>
          <h1>You Are Searching for "{keyword}" </h1>
          <Row>
            {this.state.movies.length ? (
              this.state.movies.map((mov) => (
                <Col lg="3">
                  <Link to={`/detail/${mov.id}`}>
                    <Card>
                      <Card.Img
                        variant="top"
                        src={
                          mov.poster_path
                            ? "http://image.tmdb.org/t/p/w500" + mov.poster_path
                            : noImg
                        }
                      />
                      <Card.Body>
                        <Card.Title>{mov.original_title}</Card.Title>
                        <Card.Text>{mov.release_date.slice(0, 4)}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))
            ) : (
              <Col>
                {/* <Card>
                  <Card.Img variant="top" src="../assets/img/404.jpg" />
                  <Card.Body>
                    <Card.Title>No Movie Found</Card.Title>
                  </Card.Body>
                </Card> */}
                <h3 className="search-msg">Sorry, No movie found yet :(</h3>
              </Col>
            )}
          </Row>
        </Container>
      </div>
    );
  }
}
