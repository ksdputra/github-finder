import React, { useReducer } from 'react';
import UsersContext from './usersContext';
import UsersReducer from './UsersReducer';
import {
  SEARCH_USERS,
  CLEAR_USERS,
  CLEAR_SEARCH,
  SET_PAGE,
  SET_LOADING
} from '../types';

const UsersState = (props) => {
  const initialState = {
    users: [],
    page: null,
    pageCount: null,
    loading: false
  }

  const [state, dispatch] = useReducer(UsersReducer, initialState);

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

  const setPage = (page) => dispatch({ type: SET_PAGE, page: page })

  const setLoading = () => dispatch({ type: SET_LOADING });

  return <UsersContext.Provider
    value={{
      users: state.users,
      loading: state.loading,
      page: state.page,
      pageCount: state.pageCount,
      dispatchUsers,
      clearUsers,
      clearSearch,
      setPage,
      setLoading
    }}>
    {props.children}
  </UsersContext.Provider>
}

export default UsersState;