import React, { Component } from "react";
import { connect } from "react-redux";
import { getToken } from "reducers/auth";
import { authorize } from "actions/auth";
import UserPage from "components/UserPage";
import { Redirect } from "react-router-dom";
import "./AuthPage.css";

class AuthPage extends Component {
  state = {
    input: ""
  };
  handleChange = event => {
    this.setState({ input: event.target.value });
  };
  handleKeyDown = event => {
    const { authorize } = this.props;
    if (event.keyCode === 13) {
      authorize(this.state.input);
    }
  };
  render() {
    return (
      <div className="Auth_page">
        <p>
          Получить токен нужно на своей странице github,
          перейдите по
          <a
            target="_blank"
            href="https://github.com/settings/tokens"
          >
            адресу
          </a>
          и создать себе токен. Запишите куда нибудь токен,
          так как после создания доступ к нему будет только
          один раз.
        </p>
        <input
          placeholder="auth_token"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <p>После ввода нажать Enter</p>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  token: getToken(state)
});
const mapDispatchToProps = {
  authorize
};
export default connect(mapStateToProps, mapDispatchToProps)(
  AuthPage
);
