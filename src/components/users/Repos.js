import React, { Fragment, useContext } from 'react'
import Pagination from '@material-ui/lab/Pagination';
import Skeleton from '@material-ui/lab/Skeleton';
import SearchContext from '../../context/search/searchContext';
import ReposContext from '../../context/repos/reposContext';
import AlertContext from '../../context/alert/alertContext';
import { searchRepos } from '../../services/GithubService';
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
  const searchContext = useContext(SearchContext);
  const reposContext = useContext(ReposContext);
  const alertContext = useContext(AlertContext);

  const handleChange = (e, value) => {
    searchRepos(searchContext.text, value, reposContext, alertContext)
  };

  return (
    <Fragment>
      {(reposContext.pageCount !== null || reposContext.loading) && (
        <div className='card'>
            <Pagination
              count={reposContext.pageCount}
              variant="outlined"
              shape="rounded"
              page={reposContext.page}
              siblingCount={6}
              color='primary'
              onChange={handleChange}
              showFirstButton
              showLastButton
              style={{ display: 'flex', justifyContent: 'center' }}
              disabled={reposContext.pageCount === 0 ? true : false}
            />
        </div>
      )}
      {reposContext.loading && (<SkeletonRepoItem />)}
      {!reposContext.loading && (
        <div>
          {reposContext.repos.map((repo) => (
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
