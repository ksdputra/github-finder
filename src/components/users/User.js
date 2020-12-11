import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserDetail, fetchUserRepo } from '../../actions/userActions';
import CircularProgress from '@material-ui/core/CircularProgress'
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';

const User = (props) => {

  const dispatch = useDispatch()

  const userDetailState = useSelector(state => state.userDetail)
  const userReposState = useSelector(state => state.userRepos)

  useEffect(() => {
    dispatch(fetchUserDetail(props.match.params.username))
    dispatch(fetchUserRepo(props.match.params.username))
    // eslint-disable-next-line
  }, [dispatch])

  const { name, avatar_url, location, company, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable } = userDetailState.user

  const { loading, repos } = userReposState

  if (loading) return <CircularProgress alt='Loading...' style={{ margin: 'auto', display: 'block' }} />;

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>Back to search</Link>
      Hireable:{' '}
      {hireable ? <i className='fas fa-check text-success' /> : <i className='fas fa-times-circle text-danger' />}
      <div className='card grid-2'>
        <div className='all-center'>
          <img src={avatar_url} className='round-img' alt='' style={{ width: '150px' }} />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>
          <ul>
            <li>
              {login && <Fragment>
                  <strong>Username: </strong> {login}
                </Fragment>}
            </li>

            <li>
              {company && <Fragment>
                  <strong>Company: </strong> {company}
                </Fragment>}
            </li>

            <li>
              {login && <Fragment>
                  <strong>Blog: </strong> {blog}
                </Fragment>}
            </li>
          </ul>
        </div>
      </div>

      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-light'>Public Repos: {public_repos}</div>
        <div className='badge badge-dark'>Public Gists: {public_gists}</div>
      </div>

      <Repos repos={repos} />
    </Fragment>
  )
}

export default User
