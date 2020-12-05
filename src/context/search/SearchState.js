import React, { useReducer } from 'react';
import SearchContext from './searchContext';
import SearchReducer from './searchReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  CLEAR_SEARCH
} from '../types';

const SearchState = (props) => {
  const initialState = {
    users: [],
    searchText: '',
    page: null,
    pageCount: null,
    loading: false
  }

  const [state, dispatch] = useReducer(SearchReducer, initialState);

  const dispatchUsers = (text, page, data) => {
    dispatch({
      type: SEARCH_USERS,
      searchText: text,
      page: page,
      payload: data
    })
  }

  const clearUsers = () => dispatch({ type: CLEAR_USERS })

  const clearSearch = () => dispatch({ type: CLEAR_SEARCH });

  const setLoading = () => dispatch({ type: SET_LOADING });

  return <SearchContext.Provider
    value={{
      users: state.users,
      loading: state.loading,
      page: state.page,
      pageCount: state.pageCount,
      searchText: state.searchText,
      dispatchUsers,
      clearUsers,
      clearSearch,
      setLoading
    }}>
    {props.children}
  </SearchContext.Provider>
}

export default SearchState;