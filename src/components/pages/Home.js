import React, { Fragment, useContext } from 'react';
import Search from '../users/Search';
import Pagination from '@material-ui/lab/Pagination'
import Users from '../users/Users';
import GithubContext from '../../context/github/githubContext';

const Home = () => {
  const githubContext = useContext(GithubContext);

  const handleChange = (e) => {
    const selectedPage = e.selected + 1

    githubContext.searchUsers(githubContext.searchText, selectedPage);
  }

  return (
    <Fragment>
      <Search />
      <Pagination
        count={githubContext.pageCount}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
      <Users />
    </Fragment>
  )
}

export default Home
