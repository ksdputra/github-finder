import {
  SEARCH_USERS,
  CLEAR_USERS,
  CLEAR_SEARCH,
  SET_LOADING,
} from '../types';

export default (state, action) => {
  switch(action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload.items,
        page: action.page,
        pageCount: Math.ceil(action.payload.total_count / 30),
        loading: false
      }
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false
      }
    case CLEAR_SEARCH:
      return {
        ...state,
        users: [],
        page: null,
        pageCount: null,
        loading: false
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