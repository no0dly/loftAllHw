import React from "react";
import { Link } from "react-router-dom";

const Follower = props => {
  const image = props.avatar_url;
  const name = props.login;
  return (
    <Link
      to={`/user/${name}`}
      title={name}
      className="column is-2 is-marginless is-paddingless"
    >
      <img className="image" src={image} alt={name} />
    </Link>
  );
};

export default Follower;
