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
          <Route path="/login" exact component={AuthPage} />
          <Redirect to="/user/dex157" />
        </Switch>
      </div>
    );
  }
}

export default AppRouter;
