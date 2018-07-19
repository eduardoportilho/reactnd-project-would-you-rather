import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  wrapper: {
    display: 'flex',
    height:'100vh',
    justifyContent: 'center',
    alignItems: 'center',

  },
  card: {
    width: 275,
  },
  formControl: {
    width: '100%',
  },
  actions: {
    display: 'flex',
  },
  loginButton: {
    flexGrow: 1,
  },
}

const users = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Mary'},
  {id: 3, name: 'Cris'},
]

class Login extends React.Component {
  state = {
    user: '',
  }

  onUserChange = event => {
    this.setState({ user: event.target.value });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.wrapper}>
        <Card className={classes.card}>
          <CardContent>
            <h1>Login</h1>

            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="user">Select User</InputLabel>
              <Select
                value={this.state.user}
                onChange={this.onUserChange}
                inputProps={{
                  id: 'user',
                }}
              >
                {users.map(user => (
                  <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button variant="contained" color="primary" className={classes.loginButton}>
              Login
            </Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(Login)