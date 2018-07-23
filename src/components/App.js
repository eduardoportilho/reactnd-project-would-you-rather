import React, { Component } from 'react'
import '../style/App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import LoginContainer from '../containers/LoginContainer'
import MainPage from '../components/MainPage'
import RouteNotFound from '../components/RouteNotFound'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/login" component={LoginContainer}/>
          <Route component={RouteNotFound} />
        </Switch>
      </Router>
    )
  }
}

export default App
