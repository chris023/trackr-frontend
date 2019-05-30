import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { Snackbar, withStyles } from '@material-ui/core'

const styles = () => ({})

const Notifications = ({ classes, message }) => {
  const [open, setOpen] = useState(!!message.body)
  const closeSnackbar = () => setOpen(false)

  useEffect(() => setOpen(!!message.body), [message])

  return (
    <Snackbar
      key={message.body}
      open={open}
      autoHideDuration={message.duration || 2000}
      onClose={closeSnackbar}
      message={message.body}
      classes={classes.snackbar}
    />
  )
}

Notifications.propTypes = {
  classes: PropTypes.object,
  message: PropTypes.object,
}

const mapStateToProps = state => ({
  message: state.notifications.message,
})

export default compose(
  connect(mapStateToProps),
  withStyles(styles)
)(Notifications)
