import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "components/PrivateRoute";
import AuthPage from "components/AuthPage";
import UserPage from "components/UserPage";
import { connect } from "react-redux";
import { getIsAuthorized } from "reducers/auth";

class AppRouter extends Component {
  state = {};
  render() {
    const { isAuthorized } = this.props;
    return (
      <div className="App">
        <Switch>
          <Redirect from="/" exact to="/login" />
          <Route path="/login" component={AuthPage} />
          <PrivateRoute path="/user/:name" />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state)
});
export default connect(mapStateToProps, null)(AppRouter);
