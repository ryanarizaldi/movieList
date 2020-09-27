import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import noImg from "../assets/img/noimg.png";

export default class DetailMovie extends Component {
  state = {
    movies: [],
    casts: [],
    similiar: [],
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);

    const { id } = this.props;
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=0f4cb6189e20110c05e4b524ae7821ac`
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          movies: json,
        });
      });
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=0f4cb6189e20110c05e4b524ae7821ac`
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          casts: json.cast.slice(0, 5),
        });
        // console.log(this.state.casts);
      });
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=0f4cb6189e20110c05e4b524ae7821ac`
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          similiar: json.results.slice(0, 5),
        });
        console.log(this.state.similiar);
      });
  };

  componentDidUpdate = (prevProps) => {
    const { id } = this.props;
    if (id !== prevProps.id) {
      window.scrollTo(0, 0);

      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=0f4cb6189e20110c05e4b524ae7821ac`
      )
        .then((response) => response.json())
        .then((json) => {
          this.setState({
            movies: json,
          });
        });
      fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=0f4cb6189e20110c05e4b524ae7821ac`
      )
        .then((response) => response.json())
        .then((json) => {
          this.setState({
            casts: json.cast.slice(0, 5),
          });
          // console.log(this.state.casts);
        });
      fetch(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=0f4cb6189e20110c05e4b524ae7821ac`
      )
        .then((response) => response.json())
        .then((json) => {
          this.setState({
            similiar: json.results.slice(0, 5),
          });
          console.log(this.state.similiar);
        });
    }
  };

  //   matchMovie = () => {
  //     const movieDetail = this.state.movies.find((mov) => mov.id === 694919);

  //     console.log("movieDetail");
  //   };
  render() {
    const {
      original_title,
      poster_path,
      overview,
      release_date,
      vote_average,
      genres,
    } = this.state.movies;

    const movieCasts = this.state.casts.map((cast) => cast.name).join(", ");

    const year = release_date ? release_date.slice(0, 4) : "no release date";
    const genre = genres ? genres[0].name : "no genre";
    // console.log(year.slice(0, 4));
    return (
      <div className="detail-movie">
        <Container>
          <Row>
            <Col lg="5">
              <img src={"http://image.tmdb.org/t/p/w400" + poster_path}></img>
            </Col>
            <Col lg="7">
              <h3>{original_title}</h3>
              <span className="title">
                <p>{year}</p>
                <span className="small">
                  <p>{genre}</p>
                </span>
              </span>
              <span className="description">
                <p>{overview}</p>
              </span>
              <span className="casts">
                <p>Starring: {movieCasts}</p>
              </span>
              <span className="rate">
                <p>Rate {vote_average} of 10 </p>
              </span>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <h1 className="similiar">Similiar Movie</h1>
            </Col>
            {this.state.similiar.length ? (
              this.state.similiar.map((mov) => (
                <Col>
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
              <Col lg="8">
                {/* <Card>
                  <Card.Img variant="top" src="../assets/img/404.jpg" />
                  <Card.Body>
                    <Card.Title>No Movie Found</Card.Title>
                  </Card.Body>
                </Card> */}
                <h4>No similiar movie found :(</h4>
              </Col>
            )}
          </Row>
        </Container>
      </div>
    );
  }
}
