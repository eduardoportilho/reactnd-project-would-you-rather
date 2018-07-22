import React from 'react'
import withLoggedUser from '../containers/withLoggedUser'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const Home = ({loggedUser, logout}) => (
  <div>
    <div>Home - Logged User: {loggedUser.name}</div>
    <Link to="/dashboard">Dashboard</Link>
    <Button onClick={logout}>Logout</Button>
  </div>
)

export default withLoggedUser(Home)
