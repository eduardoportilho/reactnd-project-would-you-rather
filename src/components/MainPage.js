import React, { Component } from 'react'
import withLoggedUser from '../containers/withLoggedUser'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Home from '../components/Home'
import Dashboard from '../components/Dashboard'

const tabs = [
  {
    key: 'home',
    label: 'Home',
    component: Home,
  },
  {
    key: 'new-question',
    label: 'New Question',
    component: Dashboard,
  },
  {
    key: 'leader-board',
    label: 'Leader Board',
    component: Dashboard,
  },
]

const styles = {
  appbar: {
    flexDirection: 'row',
  },
  toolbar: {
    marginLeft: 'auto',
  },
  logoutBtn: {
    marginLeft: 20,
  }
}

class MainPage extends Component {
  state = {
    selectedTab: tabs[0],
  }

  handleChange = (event, value) => {
    this.setState({ selectedTab: value })
  }

  render() {
    const {loggedUser: { name: userName }, logout, classes} = this.props
    const { selectedTab } = this.state
    const TabContent = selectedTab.component

    return (
      <div>
        <AppBar position="static" color="default" className={classes.appbar}>
          <Tabs value={selectedTab} onChange={this.handleChange}>
            {tabs.map(tab => (
              <Tab
                key={tab.key}
                value={tab}
                label={tab.label}
                href={`#${tab.key}`}
              />
            ))}
          </Tabs>
          <Toolbar variant="dense" className={classes.toolbar}>
            <Typography variant="subheading" color="inherit">
              Hello, {userName}
            </Typography>
            <Button
              color="inherit"
              variant="outlined"
              onClick={logout}
              className={classes.logoutBtn}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
        <TabContent {...this.props} />
      </div>
    )
  }
}

export default withLoggedUser(
  withStyles(styles)(MainPage)
)
