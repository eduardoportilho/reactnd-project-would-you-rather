import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom"
import { logout } from '../actions'

/**
 * Wrap components that need a logged user, redirecting to login if not logged.
 * @param {*} WrappedComponent 
 */
const withLoggedUser = (WrappedComponent) => {
  class LoggedUserComponent extends Component {
    logoutAndRedirect = () => {
      const { logout, history } = this.props
      logout()
      history.replace('/login')
    }

    render() {
      const { loggedUser } = this.props
      return loggedUser !== undefined ? (
        <WrappedComponent 
          {...this.props}
          logout={this.logoutAndRedirect}
        />
      ) : (
        <Redirect
            to={{
              pathname: "/login",
              state: { from: this.props.location },
            }}
          />
      )
    }
  }

  const mapStateToProps = state => ({
    loggedUser: state.login.loggedUser,
  })

  const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(LoggedUserComponent)
}

export default withLoggedUser
