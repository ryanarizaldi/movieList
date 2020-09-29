import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
// import { createBrowserHistory } from "history";

import "./App.css";

export default class App extends Component {
  // state = {
  //   input: "",
  // };

  // handleInput = (e) => {
  //   this.setState({ input: e.target.value });
  // };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const query = this.state.input;
  //   const url = `/search/${query}`
  //   <Route path={url} />
  // };
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Home />
          </Route> */}
          <Route path="/detail/:id?">
            <Detail />
          </Route>
          <Route path="/search/:keyword?">
            <Search />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="*">
            <Navigation />
            <div className="container">
              <h1>NO PAGE FOUND</h1>
              <h1>NO PAGE FOUND</h1>
              <h1>NO PAGE FOUND</h1>
              <h1>NO PAGE FOUND</h1>
              <h1>NO PAGE FOUND</h1>
              <h1>NO PAGE FOUND</h1>
              <h1>NO PAGE FOUND</h1>
              <h1>NO PAGE FOUND</h1>
              <h1>NO PAGE FOUND</h1>
            </div>
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
