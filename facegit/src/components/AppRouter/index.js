import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import AuthPage from "../AuthPage";
import UserPage from "../UserPage";
import PrivateRoute from "../PrivateRoute";

class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <PrivateRoute path="/user/:name" component={UserPage} />
        <Route path="/login" exact={true} component={AuthPage} />
        <Redirect to="/user/dex157" />
      </Switch>
    );
  }
}

export default AppRouter;
