import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchFollowersRequest } from "actions/followers";
import { connect } from "react-redux";
import "./Follower.css";

class Follower extends Component {
  state = {};
  componentDidMount() {
    const { fetchFollowersRequest } = this.props;
    fetchFollowersRequest();
  }
  render() {
    const { followers } = this.props;
    const items = followers.map(item => (
      <div className="follower" key={item.id}>
        <img src={item.avatar_url} />
        <Link to={`/user/${item.login}`}>{item.login}</Link>
      </div>
    ));
    return (
      <div className="followers-container">{items}</div>
    );
  }
}
const mapDispatchToProps = {
  fetchFollowersRequest
};
export default connect(null, mapDispatchToProps)(Follower);
