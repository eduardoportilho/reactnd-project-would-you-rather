import React from 'react'
import withLoggedUser from '../containers/withLoggedUser'

const Dashboard = ({loggedUser}) => (
  <div>
    <div>Dashboard - Logged User: {loggedUser.name}</div>
  </div>
)

export default withLoggedUser(Dashboard)
