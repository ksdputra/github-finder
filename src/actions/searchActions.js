import axios from 'axios'
import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  REPO_LIST_REQUEST,
  REPO_LIST_SUCCESS,
  REPO_LIST_FAIL,
  SET_TEXT,
  CLEAR_SEARCH
} from '../constants/searchConstants'

export const searchUsers = (text, page) => async (dispatch) => {
  const url = `https://api.github.com/search/users?q=${text}&page=${page}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`

  try {
    dispatch({ type: USER_LIST_REQUEST, page: page })
    const response = await axios.get(url);
    dispatch({ type: USER_LIST_SUCCESS, payload: response.data })
  } catch (error) {
    if (error.response) {
      dispatch({ type: USER_LIST_FAIL, payload: error.response.data.message })
    } else if (error.request) {
      console.log(error.request)
      dispatch({ type: USER_LIST_FAIL, payload: error.request})
    } else {
      console.log(error)
      dispatch({ type: USER_LIST_FAIL, payload: error })
    }
  }
}

export const searchRepos = (text, page) => async (dispatch) => {
  const url = `https://api.github.com/search/repositories?q=${text}&page=${page}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`

  try {
    dispatch({ type: REPO_LIST_REQUEST, page: page })
    const response = await axios.get(url);
    dispatch({ type: REPO_LIST_SUCCESS, payload: response.data })
  } catch (error) {
    if (error.response) {
      dispatch({ type: REPO_LIST_FAIL, payload: error.response.data.message })
    } else if (error.request) {
      console.log(error.request)
      dispatch({ type: REPO_LIST_FAIL, payload: error.request})
    } else {
      console.log(error)
      dispatch({ type: REPO_LIST_FAIL, payload: error })
    }
  }
}

export const setText = (text) => async (dispatch) => {
  dispatch({ type: SET_TEXT, text: text })
}

export const clearSearch = () => async (dispatch) => {
  dispatch({ type: CLEAR_SEARCH })
}