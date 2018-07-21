import React, { Component } from 'react'

import { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import Login from '../components/Login';

class LoginContainer extends Component {
  componentDidMount () {
    this.props.fetchUsers()
  }
  render () {
    const { users, isLoading, errorFetchingUsers } = this.props

    let loginContent
    if (errorFetchingUsers) {
      loginContent = <div>Error: {errorFetchingUsers}</div>
    } else if (isLoading) {
      loginContent = <div>Loading...</div>
    } else {
      loginContent = <Login users={users} />
    }

    return (
      <div>
        { loginContent }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users.userList,
  isLoading: !state.users.isUsersFetched,
  errorFetchingUsers: state.users.errorFetchingUsers,
})

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer)
