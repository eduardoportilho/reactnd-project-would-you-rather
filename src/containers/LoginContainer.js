import React, { Component } from 'react'

import { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import Login from '../components/Login';

class LoginContainer extends Component {
  componentDidMount () {
    this.props.fetchUsers()
  }
  render () {
    const { users, isLoading } = this.props
    return (
      <div>
        { isLoading ? (
          <div>Loading...</div>
        ) : (
          <Login users={users} />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.userList,
    isLoading: !state.users.isUsersFetched,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer)
