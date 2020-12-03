import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
} from '../types';

export default (state, action) => {
  switch(action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload.items,
        pageCount: Math.ceil(action.payload.total_count / 30),
        searchText: action.searchText,
        loading: false
      }
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        pageCount: null,
        searchText: '',
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