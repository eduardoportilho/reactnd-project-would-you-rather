import React, { Component } from 'react'
import '../style/App.css'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import LoginContainer from '../containers/LoginContainer'
import Home from '../components/Home'
import Dashboard from '../components/Dashboard'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginContainer}/>
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    )
  }
}

export default App
