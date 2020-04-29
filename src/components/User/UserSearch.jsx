import React from 'react';
import PropTypes from 'prop-types';

const userSearch = ({ username, onSubmit }) => (
  <>
    <input type='text' name='username' value={username} />
    <button type='button' name='search' onClick={onSubmit}>Search</button>
  </>
);

userSearch.propTypes = {
  username: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default userSearch;
