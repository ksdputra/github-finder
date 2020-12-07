import React, { Fragment, useContext } from 'react';
import UserItem from './UserItem';
import Pagination from '@material-ui/lab/Pagination';
import Skeleton from '@material-ui/lab/Skeleton';
import SearchContext from '../../context/search/searchContext';
import AlertContext from '../../context/alert/alertContext';
import { searchUsers } from '../../services/GithubService';

const SkeletonUserItem = () => {
  return (
    <div style={userStyle}>
      {[1,2,3].map((x) => (
        <div className='card-skeleton' key={`skeleton-${x}`}>
          <Skeleton variant='rect' height={191.59}/>
        </div>
      ))}
    </div>
  )
}

function Users () {
  const searchContext = useContext(SearchContext);
  const alertContext = useContext(AlertContext);

  const handleChange = (e, value) => {
    searchUsers(searchContext.searchText, value, searchContext, alertContext)
  };

  return (
    <Fragment>
      {(searchContext.pageCount !== null || searchContext.loading) && (
        <div className='card'>
            <Pagination
              count={searchContext.pageCount}
              variant="outlined"
              shape="rounded"
              page={searchContext.page}
              siblingCount={6}
              color='primary'
              onChange={handleChange}
              showFirstButton
              showLastButton
              style={{ display: 'flex', justifyContent: 'center' }}
              disabled={searchContext.pageCount === 0 ? true : false}
            />
        </div>
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
