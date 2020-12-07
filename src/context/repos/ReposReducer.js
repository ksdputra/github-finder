import {
  SEARCH_REPOS,
  CLEAR_REPOS,
  CLEAR_SEARCH,
  SET_PAGE,
  SET_LOADING,
} from '../types';

export default (state, action) => {
  switch(action.type) {
    case SEARCH_REPOS:
      return {
        ...state,
        repos: action.payload.items,
        page: action.page,
        pageCount: Math.ceil(action.payload.total_count / 30),
        loading: false
      }
    case CLEAR_REPOS:
      return {
        ...state,
        repos: [],
        loading: false
      }
    case CLEAR_SEARCH:
      return {
        ...state,
        repos: [],
        page: null,
        pageCount: null,
        loading: false
      }
    case SET_PAGE:
      return {
        ...state,
        page: action.page
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}