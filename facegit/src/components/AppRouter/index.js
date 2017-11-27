import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import AuthPage from "../AuthPage";
import UserPage from "../UserPage";
import PrivateRoute from "../PrivateRoute";

import { getToken } from "../../reducers/auth";

export class AppRouter extends Component {
  render() {
    const { token } = this.props;
    return (
      <Switch>
        <Route path="/login" component={AuthPage} />
        <PrivateRoute path="/user/:name" token={token} component={UserPage} />
        <Redirect to="/user/dex157" />
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return { token: getToken(state) };
};

export default connect(mapStateToProps)(AppRouter);
