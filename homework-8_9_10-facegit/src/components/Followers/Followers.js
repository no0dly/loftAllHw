import React, { Component } from "react";
import Spinner from "react-svg-spinner";
import { connect } from "react-redux";
import { fetchUserRequest } from "actions/users";
import { getFollowersIds } from "reducers/followers";
import {
  getUserData,
  getUserError,
  getUserFetched,
  getUserFetching
} from "reducers/users";
import { getToken } from "reducers/auth";
import Follower from "components/Followers";
import "./Followers.css";
class Followers extends Component {
  state = {};
  componentDidMount() {
    const { fetchUserRequest, login } = this.props;
    fetchUserRequest(login);
  }
  render() {
    const { user, followers } = this.props;
    const info = user.data.map(item => (
      <div className="user" key={item.id}>
        <img className="user-img" src={item.avatar_url} />
        <div className="user-info">
          <b>{item.login}</b>
          <p>Followers: {item.followers}</p>
          <p>Public repos: {item.public_repos}</p>
        </div>
      </div>
    ));
    if (user.isFetching) {
      return (
        <Spinner size="64px" color="fuchsia" gap={5} />
      );
    } else if (user.error !== null) {
      return (
        <div className="error-block">{user.error}</div>
      );
    } else {
      return (
        <div>
          <div>{info}</div>
          <Follower followers={followers} />
        </div>
      );
    }
  }
}
const mapStateToProps = state => ({
  user: {
    data: getUserData(state),
    error: getUserError(state),
    isFetched: getUserFetched(state),
    isFetching: getUserFetching(state)
  },
  auth: {
    token: getToken(state)
  },
  followers: getFollowersIds(state)
});
const mapDispatchToProps = {
  fetchUserRequest
};
export default connect(mapStateToProps, mapDispatchToProps)(
  Followers
);
