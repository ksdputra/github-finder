import React, { Fragment, useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import Pagination from '@material-ui/lab/Pagination';
import SearchContext from '../../context/search/searchContext';

function Users () {
  const searchContext = useContext(SearchContext);

  const handleChange = (e) => {
    const selectedPage = e.selected + 1

    searchContext.searchUsers(searchContext.searchText, selectedPage);
  };

  if (searchContext.loading) {
    return <Spinner />
  } else {
    return (
      <Fragment>
        {searchContext.users.length > 0 && (
          <Pagination
            count={searchContext.pageCount}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
          />
        )}
        <div style={userStyle}>
          {searchContext.users.map(user =>(
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      </Fragment>
    )
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Users
