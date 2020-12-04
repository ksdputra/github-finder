import React, { Fragment, useState, useContext } from 'react';
import UserItem from './UserItem';
import Pagination from '@material-ui/lab/Pagination';
import Skeleton from '@material-ui/lab/Skeleton';
import SearchContext from '../../context/search/searchContext';

const SkeletonUserItem = () => {
  return (
    <div style={userStyle}>
      <div className='card-skeleton'>
        <Skeleton variant='rect' height={191.59}/>
      </div>
    </div>
  )
}

function Users () {
  const searchContext = useContext(SearchContext);

  const [page, setPage] = useState(1);

  const handleChange = (e, value) => {
    setPage(value);
    searchContext.searchUsers(searchContext.searchText, value);
  };

  return (
    <Fragment>
      {searchContext.users.length > 0 && (
        <Pagination
          count={searchContext.pageCount}
          variant="outlined"
          shape="rounded"
          page={page}
          siblingCount={6}
          onChange={handleChange}
        />
      )}
      {searchContext.loading && (<SkeletonUserItem />)}
      {!searchContext.loading && (<div style={userStyle}>
        {searchContext.users.map(user =>(
          <UserItem key={user.id} user={user} />
        ))}
      </div>)}
    </Fragment>
  )
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Users
