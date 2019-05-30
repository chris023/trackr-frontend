import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Redirect, Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core'

import { Auth, Home } from './paths'
import { AuthRoute, Notifications } from './components'

const styles = theme => ({
  root: {
    background: theme.palette.background.default,
    minHeight: '100vh',
    minWidth: '100vw',
  },
})

const App = ({ classes }) => {
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Switch>
          <Route path="/auth" component={Auth} />
          <AuthRoute path="/home" component={Home} />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
      <Notifications />
    </React.Fragment>
  )
}

App.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(App)
