import React, { Fragment, useContext } from 'react';
import Search from '../users/Search';
import Pagination from '@material-ui/lab/Pagination'
import Users from '../users/Users';
import SearchContext from '../../context/search/searchContext';

const Home = () => {
  const searchContext = useContext(SearchContext);

  const handleChange = (e) => {
    const selectedPage = e.selected + 1

    searchContext.searchUsers(searchContext.searchText, selectedPage);
  }

  return (
    <Fragment>
      <Search />
      <Pagination
        count={searchContext.pageCount}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
      <Users />
    </Fragment>
  )
}

export default Home
