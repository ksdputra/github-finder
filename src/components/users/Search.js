import React, { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setText as changeText, clearSearch } from '../../actions/searchActions';
import PropTypes from 'prop-types';
import AlertContext from '../../context/alert/alertContext';

const Search = (props) => {
  const alertContext = useContext(AlertContext);

  const dispatch = useDispatch()

  const usersState = useSelector(state => state.userList)
  const reposState = useSelector(state => state.repoList)
  const searchState = useSelector(state => state.search)

  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.popAlert('Please enter something', 'error')
    } else {
      dispatch(changeText(text))
      props.initiateSearch(text)
    }
  };

  const onChange = e => setText(e.target.value);

  const clearButtonClicked = e => {
    setText('')
    dispatch(clearSearch())
  }

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input type='text' name='text' placeholder='Search something...' value={text} onChange={onChange} />
        <input type='submit' value='Search' className='btn btn-dark btn-block' />
      </form>
      {searchState.isSearching && (
        <button className='btn btn-light btn-block' onClick={clearButtonClicked} disabled={usersState.loading || reposState.loading}>Clear</button>
      )}
    </div>
  )
};

Search.propTypes = {
  initiateSearch: PropTypes.func.isRequired
}

export default Search
