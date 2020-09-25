import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          {this.props.movie ? (
            this.props.movie.map((mov) => <li>{mov.original_title}</li>)
          ) : (
            <li>No data gan</li>
          )}
        </ul>
      </div>
    );
  }
}
