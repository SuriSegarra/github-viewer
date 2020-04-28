import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';

const Users = ({ users }) => {
  const userElement = users.map(user => (
    //key gives an identifier to react to each of this things
    <li key={user.id}>
      <User {...user} />
    </li>
  ));
  
  return (
    <ul>
      {userElement}
    </ul>
  );
};

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    followers_url: PropTypes.string.isRequired,
    following_url: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired    
  })).isRequired
};

export default Users;
