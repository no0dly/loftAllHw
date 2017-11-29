import React, { Component } from "react";
import { connect } from "react-redux";
import { getLogin } from "reducers/login";
import { getToken } from "reducers/auth";
import { fetchLoginRequest } from "actions/login";
import Followers from "components/Followers";
import "./UserPage.css";
class UserPage extends Component {
  componentDidMount() {
    const { fetchLoginRequest } = this.props;
    fetchLoginRequest();
  }
  render() {
    const { login } = this.props;
    return (
      <div>
        <Followers login={login} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  login: getLogin(state),
  auth: {
    token: getToken(state)
  }
});
const mapDispatchToProps = {
  fetchLoginRequest
};
export default connect(mapStateToProps, mapDispatchToProps)(
  UserPage
);
