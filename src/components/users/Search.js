import React, { useState, useContext } from 'react';
import SearchContext from '../../context/search/searchContext';
import UsersContext from '../../context/users/usersContext';
import AlertContext from '../../context/alert/alertContext';
import { searchUsers } from '../../services/GithubService';

const Search = (props) => {
  const searchContext = useContext(SearchContext);
  const usersContext = useContext(UsersContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.popAlert('Please enter something', 'error')
    } else {
      searchContext.dispatchText(text)
      searchUsers(text, 1, usersContext, alertContext)
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);

  const clearButtonClicked = e => {
    searchContext.clearSearch()
    usersContext.clearSearch()
  }

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input type='text' name='text' placeholder='Search Users...' value={text} onChange={onChange} />
        <input type='submit' value='Search' className='btn btn-dark btn-block' />
      </form>
      {searchContext.isSearching && (
        <button className='btn btn-light btn-block' onClick={clearButtonClicked}>Clear</button>
      )}
    </div>
  )
};

export default Search
