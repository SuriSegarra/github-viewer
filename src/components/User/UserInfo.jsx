import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ login, followers, following, url, avatar_url }) => (
  <figure>
    <img src={avatar_url} alt={login}/>
    <figcaption>
      <h1>{login}</h1>
      <p>Followers:{followers}</p>
      <p>Following:{following}</p>
      <p>Profile:{url}</p>
    </figcaption>
  </figure>
);

UserInfo.propTypes = {
  login: PropTypes.string.isRequired,
  followers: PropTypes.string.isRequired,
  following: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired

};

export default UserInfo;
