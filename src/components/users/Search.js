import React, { useState, useContext, Fragment } from 'react';
import Pagination from '@material-ui/lab/Pagination'
import SearchContext from '../../context/search/searchContext';
import AlertContext from '../../context/alert/alertContext';

const Search = (props) => {
  const searchContext = useContext(SearchContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.popAlert('Please enter something', 'light')
    } else {
      searchContext.searchUsers(text, 1);
      setText('');
    }
  };

  const handleChange = (e) => {
    const selectedPage = e.selected + 1

    searchContext.searchUsers(searchContext.searchText, selectedPage);
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input type='text' name='text' placeholder='Search Users...' value={text} onChange={onChange} />
        <input type='submit' value='Search' className='btn btn-dark btn-block' />
      </form>
      {searchContext.users.length > 0 && (
        <Fragment>
          <button className='btn btn-light btn-block' onClick={searchContext.clearUsers}>Clear</button>
          <Pagination
            count={searchContext.pageCount}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
          />
        </Fragment>
        )}
    </div>
  )
};

export default Search
