import React, { Fragment, useContext } from 'react';
import UserItem from './UserItem';
import Pagination from '@material-ui/lab/Pagination';
import Skeleton from '@material-ui/lab/Skeleton';
import SearchContext from '../../context/search/searchContext';
import UsersContext from '../../context/users/usersContext';
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
  const usersContext = useContext(UsersContext);
  const alertContext = useContext(AlertContext);

  const handleChange = (e, value) => {
    searchUsers(searchContext.text, value, usersContext, alertContext)
  };

  return (
    <Fragment>
      {(usersContext.pageCount !== null || usersContext.loading) && (
        <div className='card'>
            <Pagination
              count={usersContext.pageCount}
              variant="outlined"
              shape="rounded"
              page={usersContext.page}
              siblingCount={6}
              color='primary'
              onChange={handleChange}
              showFirstButton
              showLastButton
              style={{ display: 'flex', justifyContent: 'center' }}
              disabled={usersContext.pageCount === 0 ? true : false}
            />
        </div>
      )}
      {usersContext.loading && (<SkeletonUserItem />)}
      {!usersContext.loading && (<div style={userStyle}>
        {usersContext.users.map(user =>(
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
