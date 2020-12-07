import React, { useReducer } from 'react';
import SearchContext from './searchContext';
import SearchReducer from './searchReducer';
import {
  SET_TEXT,
  CLEAR_SEARCH
} from '../types';

const SearchState = (props) => {
  const initialState = {
    text: '',
    isSearching: false
  }

  const [state, dispatch] = useReducer(SearchReducer, initialState);

  const dispatchText = (text) => {
    dispatch({
      type: SET_TEXT,
      text: text
    })
  }

  const clearSearch = () => {dispatch({ type: CLEAR_SEARCH })}

  return <SearchContext.Provider
    value={{
      text: state.text,
      isSearching: state.isSearching,
      dispatchText,
      clearSearch
    }}>
    {props.children}
  </SearchContext.Provider>
}

export default SearchState;