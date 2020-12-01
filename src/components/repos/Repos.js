import React from 'react';
import PropType from 'prop-types';
import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
  return repos.map(repo => <RepoItem repo={repo} key={repo.id} />)
}

Repos.propTypes = {
  repos: PropType.array.isRequired
}

export default Repos
