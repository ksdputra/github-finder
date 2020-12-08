import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import SearchContext from '../../context/search/searchContext';
import UsersContext from '../../context/users/usersContext';
import ReposContext from '../../context/repos/reposContext';
import AlertContext from '../../context/alert/alertContext';
import { searchUsers } from '../../services/GithubService';

const Search = (props) => {
  const searchContext = useContext(SearchContext);
  const usersContext = useContext(UsersContext);
  const reposContext = useContext(ReposContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.popAlert('Please enter something', 'error')
    } else {
      searchContext.dispatchText(text)
      props.initiateSearch()
    }
  };

  const onChange = e => setText(e.target.value);

  const clearButtonClicked = e => {
    setText('')
    searchContext.clearSearch()
    usersContext.clearSearch()
    reposContext.clearSearch()
  }

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input type='text' name='text' placeholder='Search something...' value={text} onChange={onChange} />
        <input type='submit' value='Search' className='btn btn-dark btn-block' />
      </form>
      {searchContext.isSearching && (
        <button className='btn btn-light btn-block' onClick={clearButtonClicked}>Clear</button>
      )}
    </div>
  )
};

Search.propTypes = {
  initiateSearch: PropTypes.func.isRequired
}

export default Search
