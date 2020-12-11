import {
  USER_DETAIL_REQUEST,
  USER_DETAIL_SUCCESS,
  USER_DETAIL_FAIL,
  USER_REPO_REQUEST,
  USER_REPO_SUCCESS,
  USER_REPO_FAIL
} from '../constants/userConstants'

const userDetailInitialState = {
  user: {},
  loading: false,
}

export const userDetailReducer = (state = userDetailInitialState, action) => {
  switch(action.type) {
    case USER_DETAIL_REQUEST:
      return {
        user: {},
        loading: true
      }
    case USER_DETAIL_SUCCESS:
      return {
        user: action.payload,
        loading: false
      }
    case USER_DETAIL_FAIL:
      return {
        error: action.payload,
        loading: false
      }
    default:
      return state
  }
}

const userReposInitialState = {
  repos: [],
  loading: false
}

export const userReposReducer = (state = userReposInitialState, action) => {
  switch(action.type) {
    case USER_REPO_REQUEST:
      return {
        repos: [],
        loading: true
      }
    case USER_REPO_SUCCESS:
      return {
        repos: action.payload,
        loading: false
      }
    case USER_REPO_FAIL:
      return {
        error: action.payload,
        loading: false
      }
    default:
      return state
  }
}