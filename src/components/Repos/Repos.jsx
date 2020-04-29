import React from 'react';
import PropTypes from 'prop-types';
import Repo from '../repo/Repo';

const Repos = ({ repos }) => {
  const repoData = repos.map(repo => <Repo key={repo.id} {...repo} />);
  return (
    <ul>
      {repoData}
    </ul>
  );
};

Repos.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    html_url:PropTypes.string.isRequired
  })).isRequired
};

export default Repos;

