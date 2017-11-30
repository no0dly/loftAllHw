import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import AuthPage from "../AuthPage";
import UserPage from "../UserPage";
import PrivateRoute from "../PrivateRoute";
import { getLoginFromLocalStorage } from "../../localStorage";

class AppRouter extends Component {
  render() {
    const login = getLoginFromLocalStorage();
    return (
      <Switch>
        <PrivateRoute path="/user/:name" component={UserPage} />
        <Route path="/login" exact={true} component={AuthPage} />
        <Redirect to={`/user/${login}`} />
      </Switch>
    );
  }
}

export default AppRouter;
