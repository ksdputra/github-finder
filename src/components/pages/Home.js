import React, { Fragment, useState, useContext } from 'react';
import Search from '../users/Search';
import Users from '../users/Users';
import Repos from '../users/Repos';
import SearchContext from '../../context/search/searchContext';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Home = () => {
  const searchContext = useContext(SearchContext);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <Search />
      {(searchContext.users.length > 0 || searchContext.loading) && (
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label='Users' />
          <Tab label='Repos' />
        </Tabs>
      )}
      {value == 0 && <Users />}
      {value == 1 && <Repos />}
    </Fragment>
  )
}

export default Home
