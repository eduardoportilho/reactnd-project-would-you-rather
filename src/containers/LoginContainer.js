import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers, login } from '../actions'
import Login from '../components/Login';

class LoginContainer extends Component {
  componentDidMount () {
    this.props.fetchUsers()
  }
  render () {
    const { 
      users,
      isLoading,
      errorFetchingUsers,
      login,
      isLogged,
      location, // From Redirect
    } = this.props

    let loginContent
    if (errorFetchingUsers) {
      loginContent = <div>Error: {errorFetchingUsers}</div>
    } else if (isLoading) {
      loginContent = <div>Loading...</div>
    } else {
      loginContent = (
        <Login 
          users={users}
          onLogin={login}
          isLogged={isLogged}
          location={location}
        />
      )
    }

    return (
      <div>
        { loginContent }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.userInfo.users,
  isLoading: !state.userInfo.isUsersFetched,
  errorFetchingUsers: state.userInfo.errorFetchingUsers,
  isLogged: state.login.loggedUser !== undefined,
})

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  login: user => dispatch(login(user)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer)
