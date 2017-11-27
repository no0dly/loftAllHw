import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, token, path, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return token ? <Component {...props} /> : <Redirect to="/login" />;
    }}
  />
);

export default PrivateRoute;
