import React, { Fragment, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchUsers, searchRepos } from '../../actions/searchActions';
import Search from '../users/Search';
import Users from '../users/Users';
import Repos from '../users/Repos';
import AlertContext from '../../context/alert/alertContext';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Home = () => {
  const alertContext = useContext(AlertContext);

  const dispatch = useDispatch()

  const searchState = useSelector(state => state.search)

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    switch(newValue) {
      case 0:
        return dispatch(searchUsers(searchState.text, 1))
      case 1:  
        return dispatch(searchRepos(searchState.text, 1))
      default:
        return
    }
  };

  const initiateSearch = (text) => {
    switch(value) {
      case 0:
        return dispatch(searchUsers(text, 1))
      case 1:
        return dispatch(searchRepos(text, 1))
      default:
        return
    }
  }

  return (
    <Fragment>
      <Search initiateSearch={initiateSearch}/>
      {searchState.isSearching && (
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label='Users' />
          <Tab label='Repos' />
        </Tabs>
      )}
      {value === 0 && <Users />}
      {value === 1 && <Repos />}
    </Fragment>
  )
}

export default Home
