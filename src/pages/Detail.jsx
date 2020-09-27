import React, { Component } from "react";
import Navigation from "../components/Navigation";
import DetailMovie from "../components/DetailMovie";
import { withRouter } from "react-router-dom";

// import NavigationNoBg from "../components/NavigationNoBg";

class Detail extends Component {
  render() {
    // const t = "asd";
    const id = this.props.match.params.id;
    // console.log(id, t);
    return (
      <div>
        <Navigation />
        <DetailMovie id={id} />
      </div>
    );
  }
}

export default withRouter(Detail);
