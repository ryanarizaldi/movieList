import React, { Component } from "react";
import Navigation from "../components/Navigation";
import SearchMovie from "../components/SearchMovie";
import { withRouter } from "react-router-dom";

class Search extends Component {
  render() {
    const keyword = this.props.match.params.search;
    return (
      <div>
        <Navigation />
        <SearchMovie keyword={keyword} />
      </div>
    );
  }
}

export default withRouter(Search);
