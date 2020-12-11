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

const userInitialState = {
  users: [],
  page: null,
  pageCount: null,
  loading: false,
  error: null
}

export const userListReducer = (state = userInitialState, action) => {
  switch(action.type) {
    case USER_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        users: [],
        error: null,
        page: action.page
      }
    case USER_LIST_SUCCESS:
      return {
        ...state,
        users: action.payload.items,
        pageCount: Math.ceil(action.payload.total_count / 30),
        loading: false,
      }
    case USER_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case CLEAR_SEARCH:
      return {
        users: [],
        pageCount:null
      }
    default:
      return state;
  }
}

const repoInitialState = {
  repos: [],
  page: null,
  pageCount: null,
  loading: false,
  error: null
}

export const repoListReducer = (state = repoInitialState, action) => {
  switch(action.type) {
    case REPO_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        repos: [],
        error: null,
        page: action.page
      }
    case REPO_LIST_SUCCESS:
      return {
        ...state,
        repos: action.payload.items,
        pageCount: Math.ceil(action.payload.total_count / 30),
        loading: false,
      }
    case REPO_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case CLEAR_SEARCH:
      return {
        repos: [],
        pageCount: null
      }
    default:
      return state;
  }
}

const searchInitialState = {
  text: '',
  isSearching: false
}

export const searchReducer = (state = searchInitialState, action) => {
  switch(action.type) {
    case SET_TEXT:
      return {
        text: action.text,
        isSearching: true
      }
    case CLEAR_SEARCH:
      return {
        text: '',
        isSearching: false
      }
    default:
      return state;
  }
}