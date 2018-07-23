import React from 'react'
import withLoggedUser from '../containers/withLoggedUser'

const Home = ({loggedUser}) => (
  <div>
    <div>Home - Logged User: {loggedUser.name}</div>
  </div>
)

export default withLoggedUser(Home)