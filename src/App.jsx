import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Apa from "./components/Navigation";

export default class App extends Component {
  state = {
    movie: [],
  };

  componentDidMount = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=0f4cb6189e20110c05e4b524ae7821ac&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          movie: json.results,
        });
      });
  };

  render() {
    return (
      <Router>
        <Apa />
        <Switch>
          <Route path="/">
            <Home movie={this.state.movie} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

// <div className="App">
//         <ul>
//           {this.state.movie ? (
//             this.state.movie.map((mov) => <li>{mov.original_title}</li>)
//           ) : (
//             <li>No data gan</li>
//           )}
//         </ul>
//       </div>
