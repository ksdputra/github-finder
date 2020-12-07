import {
  SET_TEXT,
  CLEAR_SEARCH
} from '../types';

export default (state, action) => {
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