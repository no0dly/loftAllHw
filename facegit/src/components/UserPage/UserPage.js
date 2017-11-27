import React, { Component } from "react";
import { connect } from "react-redux";

import Followers from "../Followers";

import { fetchUserDataRequest } from "../../actions/users";
import {
  getUserImage,
  getUserName,
  getUserNickname,
  getUserFollowersCount,
  getUserPubReposCount
} from "../../reducers/users";

class UserPage extends Component {
  componentDidMount() {
    const { fetchUserDataRequest } = this.props;
    const userName = this.props.match.params.name;

    fetchUserDataRequest(userName);
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }
  render() {
    const {
      userImage,
      userName,
      userNickname,
      userFollowersCount,
      userPubReposCount
    } = this.props;
    return (
      <div className="columns is-centered">
        <div className="column is-3">
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
                <Followers />
              </div>
            </div>
          </div>
        </div>
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
    userPubReposCount: getUserPubReposCount(state)
  };
};

const mapDispatchToProps = {
  fetchUserDataRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
