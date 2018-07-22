import React from 'react'
import withLoggedUser from '../containers/withLoggedUser'
import { Link } from 'react-router-dom'

const Dashboard = ({loggedUser}) => (
  <div>
    <div>Dashboard - Logged User: {loggedUser.name}</div>
    <Link to="/">Home</Link>
  </div>
)

export default withLoggedUser(Dashboard)
