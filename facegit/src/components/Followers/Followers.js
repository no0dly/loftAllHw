import React, { Component } from "react";
import { connect } from "react-redux";

import { getUserFollowers } from "../../reducers/followers";

import Follower from "../Follower";

class Followers extends Component {
  renderFollowers = () => {
    const { followers } = this.props;
    return followers.map(follower => {
      return <Follower key={follower.id} {...follower} />;
    });
  };
  render() {
    return <div className="columns is-multiline">{this.renderFollowers()}</div>;
  }
}

const mapStateToProps = state => {
  return { followers: getUserFollowers(state) };
};

export default connect(mapStateToProps, null)(Followers);
