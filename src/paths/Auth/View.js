import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import { Redirect, Route, Switch } from 'react-router-dom'

import Login from './Login'

const styles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 200,
    width: '100%',
  },
})

const View = ({ classes, match }) => {
  return (
    <div className={classes.root}>
      <Switch>
        <Route path={match.url + '/login'} component={Login} />
        <Redirect to="/auth/login" />
      </Switch>
    </div>
  )
}

View.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object,
}

export default withStyles(styles)(View)
