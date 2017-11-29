import React, { Component } from "react";
import { isAuthorized } from "./AuthorizeApi";
import { Redirect } from "react-router-dom";

class Private extends Component {
  state = {
    isAuthorized
  };
  render() {
    const { isAuthorized } = this.state;
    return (
      <div>
        {!isAuthorized ? (
          <Redirect from="/private" to="/auth" />
        ) : (
          <p>Private page</p>
        )}
      </div>
    );
  }
}

export default Private;
