import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "react-svg-spinner";

import Followers from "../Followers";

import { fetchUserDataRequest } from "../../actions/users";
import {
  getUserImage,
  getUserName,
  getUserNickname,
  getUserFollowersCount,
  getUserPubReposCount,
  getIsFetching,
  getIsFetched,
  getError
} from "../../reducers/users";

export class UserPage extends Component {
  componentDidMount() {
    const { fetchUserDataRequest } = this.props;
    const userName = this.props.match.params.name;
    fetchUserDataRequest(userName);
  }
  componentWillReceiveProps(nextProps) {
    const userName = this.props.match.params.name;
    const newUserName = nextProps.match.params.name;
    const { fetchUserDataRequest } = this.props;
    if (newUserName !== userName) {
      fetchUserDataRequest(newUserName);
    }
  }
  renderContent = () => {
    const {
      userImage,
      userName,
      userNickname,
      userFollowersCount,
      userPubReposCount,
      isFetching,
      isFetched,
      error
    } = this.props;
    if (isFetching) {
      return <Spinner size="64px" color="fuchsia" gap={5} />;
    } else if (!isFetching && isFetched && !userName) {
      return <p className="error">there is no user with this name</p>;
    } else if (!isFetching && isFetched && userName) {
      return (
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={userImage} alt="Avatar" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{userName}</p>
                <p className="subtitle is-6">{userNickname}</p>
              </div>
            </div>
            <div className="content">
              <ul>
                <li>Followers: {userFollowersCount}</li>
                <li>Repos: {userPubReposCount}</li>
              </ul>
              <Followers login={userNickname} />
            </div>
          </div>
        </div>
      );
    } else if (error) {
      return <p>{error}</p>;
    }
  };
  render() {
    return (
      <div className="columns is-centered">
        <div className="column is-4">{this.renderContent()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userImage: getUserImage(state),
    userName: getUserName(state),
    userNickname: getUserNickname(state),
    userFollowersCount: getUserFollowersCount(state),
    userPubReposCount: getUserPubReposCount(state),
    isFetching: getIsFetching(state),
    isFetched: getIsFetched(state),
    error: getError(state)
  };
};

const mapDispatchToProps = {
  fetchUserDataRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
