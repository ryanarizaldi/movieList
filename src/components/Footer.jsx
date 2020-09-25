import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

export default class Footer extends Component {
  render() {
    return (
      <div className="footerr">
        <h1>
          Ini Footer guys <FontAwesomeIcon icon={["fab", "facebook"]} />
        </h1>
      </div>
    );
  }
}
