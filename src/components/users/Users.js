import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchUsers } from '../../actions/searchActions';
import { popAlert } from '../../actions/alertActions';
import UserItem from './UserItem';
import Pagination from '@material-ui/lab/Pagination';
import Skeleton from '@material-ui/lab/Skeleton';

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
  
  const dispatch = useDispatch()

  const searchState = useSelector(state => state.search)
  const usersState = useSelector(state => state.userList)
  const { loading, page, pageCount, users, error } = usersState

  useEffect(() => {
    if (error) {
      dispatch(popAlert(error, 'error'))
    }
  }, [error])

  const handleChange = (e, value) => {
    dispatch(searchUsers(searchState.text, value))
  };

  return (
    <Fragment>
      {(pageCount !== null || loading) && (
        <div className='card'>
            <Pagination
              count={pageCount}
              variant="outlined"
              shape="rounded"
              page={page}
              siblingCount={6}
              color='primary'
              onChange={handleChange}
              showFirstButton
              showLastButton
              style={{ display: 'flex', justifyContent: 'center' }}
              disabled={pageCount === 0}
            />
        </div>
      )}
      {loading && (<SkeletonUserItem />)}
      {!loading && (<div style={userStyle}>
        {users.map(user =>(
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
