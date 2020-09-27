import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/detail/:id?">
            <Detail />
          </Route>
          <Route path="/search/:search?">
            <Search />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
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
