import React from 'react';
import PropTypes from 'prop-types';

const User = ({ login, followers_url, following_url, url, avatar_url }) => (
  <figure>
    <img src={avatar_url} alt={login}/>
    <figcaption>
      <p>{login}</p>
      <p>Followes:{followers_url}</p>
      <p>Following:{following_url}</p>
      <p>{url}</p>
    </figcaption>
  </figure>
);

User.propTypes = {
  login: PropTypes.string.isRequired,
  followers_url: PropTypes.string.isRequired,
  following_url: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired

};

export default User;
