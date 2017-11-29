import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "components/PrivateRoute";
import AuthPage from "components/AuthPage";
import UserPage from "components/UserPage";
import { connect } from "react-redux";

class AppRouter extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Switch>
          <PrivateRoute
            path="/user/:name"
            component={UserPage}
          />
          <Redirect from="/login" to="/user/dex157" />
          <Route path="/login" component={AuthPage} />
        </Switch>
      </div>
    );
  }
}

export default AppRouter;
