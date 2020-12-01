import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = (props) => {
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      props.popAlert('Please enter something', 'light')
    } else {
      props.searchUsers(text);
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input type='text' name='text' placeholder='Search Users...' value={text} onChange={onChange} />
        <input type='submit' value='Search' className='btn btn-dark btn-block' />
      </form>
      {props.showClearButton && (<button className='btn btn-light btn-block' onClick={props.clearUsers}>Clear</button>)}
    </div>
  )
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClearButton: PropTypes.bool.isRequired,
  popAlert: PropTypes.func.isRequired
};

export default Search