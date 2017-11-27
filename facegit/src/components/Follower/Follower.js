import React from "react";

const Follower = props => {
  const image = props.avatar_url;
  const url = props.html_url;
  const name = props.login;
  return (
    <a
      href={url}
      title={name}
      className="column is-2 is-marginless is-paddingless"
    >
      <img className="image" src={image} alt={name} />
    </a>
  );
};

export default Follower;
