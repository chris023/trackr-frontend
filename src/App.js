import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Redirect, Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core'

import { Assets, Auth, Files, Home, Trackers } from './paths'
import { AuthRoute, UserInterface } from './components'
import { Notifications } from './util/notifications'

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
          <UserInterface>
            <AuthRoute path="/assets" component={Assets} />
            <AuthRoute path="/files" component={Files} />
            <AuthRoute path="/home" component={Home} />
            <AuthRoute path="/trackers" component={Trackers} />
          </UserInterface>
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
