import React, { Component } from "react";
import {
  isAuthorized,
  authorizeUser
} from "./AuthorizeApi";
import { Redirect } from "react-router-dom";
let errorMessage;
class Auth extends Component {
  state = {
    email: "",
    password: "",
    isAuthorized
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = () => {
    authorizeUser(this.state.email, this.state.password);
    this.setState({ isAuthorized });
    errorMessage = !isAuthorized ? (
      <p className="error">Неверный email или пароль</p>
    ) : null;
  };
  render() {
    const { isAuthorized } = this.state;
    return (
      <div>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>
        {errorMessage}
        {isAuthorized ? <Redirect to="/" /> : null}
      </div>
    );
  }
}

export default Auth;
