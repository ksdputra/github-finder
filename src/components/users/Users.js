import React, { Component } from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'

function Users (props) {
  if (props.loading) {
    return <Spinner />
  } else {
    return (
      <div style={userStyle}>
        {props.users.map(user =>(
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

User.propTypes = {
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired
}

export default Users
