import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { IconButton, Menu, MenuItem, withStyles } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'

import { user } from '../../util/redux/actions'
import withNotifications from '../../util/notifications'

const styles = theme => ({
  headerText: {
    color: theme.palette.primary.contrastText,
  },
})

const LogoutMenu = ({ classes, clearReduxToken, history, notifications }) => {
  const [logoutMenuAnchor, setLogoutMenuAnchor] = useState(null)

  const setLogoutMenu = clearAnchor => e =>
    setLogoutMenuAnchor(clearAnchor ? null : e.currentTarget)

  const logout = () => {
    try {
      clearReduxToken()
      let stored = sessionStorage.getItem('theoTracker')
      if (stored) {
        stored = JSON.parse(stored)
        stored.token = ''
        sessionStorage.setItem('theoTracker', JSON.stringify(stored))
      }
      notifications.notify('Logged Out Successfully')
      history.push('/app/auth/login')
    } catch {
      notifications.notifyError('Error Logging Out')
    }
  }

  return (
    <>
      <IconButton onClick={setLogoutMenu()} className={classes.headerText}>
        <PersonIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={logoutMenuAnchor}
        keepMounted
        open={Boolean(logoutMenuAnchor)}
        onClose={setLogoutMenu('clear')}
      >
        <MenuItem onClick={setLogoutMenu('clear')}>Profile</MenuItem>
        <MenuItem onClick={setLogoutMenu('clear')}>My account</MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  clearReduxToken: () => dispatch(user.logout()),
})

LogoutMenu.propTypes = {
  classes: PropTypes.object,
  clearReduxToken: PropTypes.func,
  history: PropTypes.object,
  notifications: PropTypes.object,
}

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withNotifications,
  withRouter,
  withStyles(styles)
)(LogoutMenu)
