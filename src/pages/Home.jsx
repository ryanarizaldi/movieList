import React, { Component } from "react";
import Hero from "../components/Hero";
import NavigationNoBg from "../components/NavigationNoBg";
import PopularMovies from "../components/PopularMovies";
// import { createBrowserHistory } from "history";

export default class Home extends Component {
  // state = {
  //   movie: [],
  //   input: "",
  // };

  // handleInput = (e) => {
  //   this.setState({ input: e.target.value });
  // };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const page = createBrowserHistory();
  //   const query = this.state.input;
  //   return page.push("/search/" + query);
  //   // page.push("/search/" + query);
  // };

  // handleSubmit = (e) => {
  //   this.props.handleSubmit(e);
  // };

  // handleInput = (e) => {
  //   this.props.handleInput(e);
  // };

  // componentDidMount = () => {
  //   fetch(
  //     "https://api.themoviedb.org/3/movie/popular?api_key=0f4cb6189e20110c05e4b524ae7821ac&language=en-US&page=1"
  //   )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       this.setState({
  //         movie: json.results,
  //       });
  //     });
  // };
  render() {
    return (
      <div>
        <NavigationNoBg />
        <Hero />
        <PopularMovies />
        {/* <ul>
          {this.state.movie ? (
            this.state.movie.map((mov) => <li>{mov.original_title}</li>)
          ) : (
            <li>No data gan</li>
          )}
        </ul> */}
      </div>
    );
  }
}
