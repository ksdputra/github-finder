import React, { useReducer } from 'react';
import axios from 'axios';
import SearchContext from './searchContext';
import SearchReducer from './searchReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
} from '../types';

const SearchState = (props) => {
  const initialState = {
    users: [],
    searchText: '',
    pageCount: null,
    loading: false
  }

  const [state, dispatch] = useReducer(SearchReducer, initialState);

  const searchUsers = async (text, selectedPage) => {
    setLoading();

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&page=${selectedPage}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    dispatch({
      type: SEARCH_USERS,
      payload: res.data,
      searchText: text
    })
  }

  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const setLoading = () => dispatch({ type: SET_LOADING });

  return <SearchContext.Provider
    value={{
      users: state.users,
      loading: state.loading,
      pageCount: state.pageCount,
      searchText: state.searchText,
      searchUsers,
      clearUsers,
    }}>
    {props.children}
  </SearchContext.Provider>
}

export default SearchState;