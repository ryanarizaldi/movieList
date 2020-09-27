import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import noImg from "../assets/img/noimg.png";

export default class PopularMovies extends Component {
  state = {
    movies: [],
  };

  componentDidMount = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=0f4cb6189e20110c05e4b524ae7821ac"
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          movies: json.results,
        });
      });
  };
  render() {
    return (
      <div className="popular-movies">
        <Container>
          <h1>Popular Movies</h1>
          <Row>
            {this.state.movies ? (
              this.state.movies.slice(0, 5).map((mov) => (
                <Col>
                  <Link to={`/detail/${mov.id}`}>
                    <Card>
                      <Card.Img
                        variant="top"
                        src={"http://image.tmdb.org/t/p/w500" + mov.poster_path}
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
                <Card>
                  <Card.Img variant="top" src="../assets/img/404.jpg" />
                  <Card.Body>
                    <Card.Title>No Movie Found</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            )}
          </Row>
          <Row>
            {this.state.movies ? (
              this.state.movies.slice(5, 10).map((mov) => (
                <Col>
                  <Link to={"/detail/" + mov.id}>
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
                        <Card.Title>
                          {mov.original_title.length > 13
                            ? mov.original_title.slice(0, 10) + "..."
                            : mov.original_title}
                        </Card.Title>
                        <Card.Text>{mov.release_date.slice(0, 4)}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))
            ) : (
              <Col>
                <Card>
                  <Card.Img variant="top" src="../assets/img/404.jpg" />
                  <Card.Body>
                    <Card.Title>No Movie Found</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            )}
          </Row>
        </Container>
      </div>
    );
  }
}
