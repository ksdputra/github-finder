import React, { Fragment, useState, useContext } from 'react';
import Search from '../users/Search';
import Users from '../users/Users';
import Repos from '../users/Repos';
import SearchContext from '../../context/search/searchContext';
import UsersContext from '../../context/users/usersContext';
import ReposContext from '../../context/repos/reposContext';
import AlertContext from '../../context/alert/alertContext';
import { searchUsers, searchRepos } from '../../services/GithubService';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Home = () => {
  const searchContext = useContext(SearchContext);
  const usersContext = useContext(UsersContext);
  const reposContext = useContext(ReposContext);
  const alertContext = useContext(AlertContext);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    switch(value) {
      case 0:
        searchUsers(searchContext.text, 1, usersContext, alertContext)
      case 1:
        searchRepos(searchContext.text, 1, reposContext, alertContext)  
    }
  };

  const initiateSearch = () => {
    setValue(0)
  }

  return (
    <Fragment>
      <Search initiateSearch={initiateSearch}/>
      {searchContext.isSearching && (
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
