import React, { Fragment, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchRepos } from '../../actions/searchActions';
import Pagination from '@material-ui/lab/Pagination';
import Skeleton from '@material-ui/lab/Skeleton';
import AlertContext from '../../context/alert/alertContext';
import TimeAgo from 'timeago-react';

const SkeletonRepoItem = () => {
  return (
    <div>
      {[1,2,3].map((x) => (
        <div className='card-skeleton' key={`skeleton-${x}`}>
          <Skeleton variant='rect' width={1036} height={59} />
        </div>
      ))}
    </div>
  )
}

const Repos = () => {
  const alertContext = useContext(AlertContext);

  const dispatch = useDispatch()

  const searchState = useSelector(state => state.search)
  const reposState = useSelector(state => state.repoList)
  const { loading, page, pageCount, repos, error } = reposState

  useEffect(() => {
    if (error) {
      alertContext.popAlert(error, 'error')
    }
  }, [error])

  const handleChange = (e, value) => {
    dispatch(searchRepos(searchState.text, value))
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
      {loading && (<SkeletonRepoItem />)}
      {!loading && (
        <div>
          {repos.map((repo) => (
            <Fragment key={`repo-${repo.id}`}>
              <div className='card'>
                <h3><a href={repo.html_url}>{repo.full_name}</a></h3>
                <p>{repo.description}</p>
                <div>
                  {repo.language && <div className='badge badge-success'>{repo.language}</div>}
                  <div className='badge badge-light'>Updated on <TimeAgo datetime={repo.updated_at} /></div>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      )}
      
    </Fragment>
  )
}

export default Repos
