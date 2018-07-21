import React from "react"
import { connect } from 'react-redux'
import {
  Route,
  Redirect,
} from "react-router-dom"

/*
 * PrivateRoute implementation based on https://reacttraining.com/react-router/web/example/auth-workflow
 */
const PrivateRoute = ({ component: Component, loggedUser, ...rest }) => { 
  const isLogged = loggedUser !== undefined
  return (
    <Route
      {...rest}
      render={props =>
        isLogged ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}

const mapStateToProps = state => ({
  loggedUser: state.login.loggedUser,
})

export default connect(
  mapStateToProps,
)(PrivateRoute)
