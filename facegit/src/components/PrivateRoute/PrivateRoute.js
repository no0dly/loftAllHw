import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { getToken } from "../../reducers/auth";

const PrivateRoute = ({ component: Component, token, path, ...rest }) => {
  debugger;
  return (
    <Route
      {...rest}
      render={props => {
        return token ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
};

const mapStateToProps = state => {
  console.log(getToken(state));
  return { token: getToken(state) };
};

export default connect(mapStateToProps, null)(PrivateRoute);
