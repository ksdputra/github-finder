import React, { useReducer } from 'react';
import ReposContext from './reposContext';
import ReposReducer from './ReposReducer';
import {
  SEARCH_REPOS,
  CLEAR_REPOS,
  CLEAR_SEARCH,
  SET_PAGE,
  SET_LOADING
} from '../types';

const ReposState = (props) => {
  const initialState = {
    repos: [],
    page: null,
    pageCount: null,
    loading: false
  }

  const [state, dispatch] = useReducer(ReposReducer, initialState);

  const dispatchRepos = (text, page, data) => {
    dispatch({
      type: SEARCH_REPOS,
      searchText: text,
      page: page,
      payload: data
    })
  }

  const clearRepos = () => dispatch({ type: CLEAR_REPOS })

  const clearSearch = () => dispatch({ type: CLEAR_SEARCH });

  const setPage = (page) => dispatch({ type: SET_PAGE, page: page })

  const setLoading = () => dispatch({ type: SET_LOADING });

  return <ReposContext.Provider
    value={{
      repos: state.repos,
      loading: state.loading,
      page: state.page,
      pageCount: state.pageCount,
      dispatchRepos,
      clearRepos,
      clearSearch,
      setPage,
      setLoading
    }}>
    {props.children}
  </ReposContext.Provider>
}

export default ReposState;