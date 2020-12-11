import axios from 'axios'
import {
  USER_DETAIL_REQUEST,
  USER_DETAIL_SUCCESS,
  USER_DETAIL_FAIL,
  USER_REPO_REQUEST,
  USER_REPO_SUCCESS,
  USER_REPO_FAIL
} from '../constants/userConstants'

export const fetchUserDetail = (username) => async (dispatch) => {
  const url = `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`

  try {
    dispatch({ type: USER_DETAIL_REQUEST })
    const response = await axios.get(url)
    dispatch({ type: USER_DETAIL_SUCCESS, payload: response.data})
  } catch (error) {
    if (error.response) {
      dispatch({ type: USER_DETAIL_FAIL, payload: error.response.data.message })
    } else if (error.request) {
      console.log(error.request)
      dispatch({ type: USER_DETAIL_FAIL, payload: error.request })
    } else {
      console.log(error)
      dispatch({ type: USER_DETAIL_FAIL, payload: error })
    }
  }
}

export const fetchUserRepo = (username) => async (dispatch) => {
  const url = `https://api.github.com/users/${username}/repos?sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`

  try {
    dispatch({ type: USER_REPO_REQUEST })
    const response = await axios.get(url)
    dispatch({ type: USER_REPO_SUCCESS, payload: response.data})
  } catch (error) {
    if (error.response) {
      dispatch({ type: USER_REPO_FAIL, payload: error.response.data.message })
    } else if (error.request) {
      console.log(error.request)
      dispatch({ type: USER_REPO_FAIL, payload: error.request })
    } else {
      console.log(error)
      dispatch({ type: USER_REPO_FAIL, payload: error })
    }
  }
}