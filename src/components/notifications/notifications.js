import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import {
  IconButton,
  Snackbar,
  SnackbarContent,
  withStyles,
} from '@material-ui/core'
import { red, grey, green, yellow } from '@material-ui/core/colors'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import WarningIcon from '@material-ui/icons/Warning'
import CloseIcon from '@material-ui/icons/Close'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'

const styles = theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: red[500],
  },
  info: {
    backgroundColor: grey[800],
  },
  warning: {
    backgroundColor: yellow[800],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
})

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
}

const SnackbarContentWrapper = withStyles(styles)(
  ({ classes, className, message, onClose, variant, ...other }) => {
    const Icon = variantIcon[variant]

    return (
      <SnackbarContent
        className={clsx(classes[variant], className)}
        message={
          <span className={classes.message}>
            <Icon className={clsx(classes.icon, classes.iconVariant)} />
            {message}
          </span>
        }
        action={[
          <IconButton key="close" color="inherit" onClick={onClose}>
            <CloseIcon className={classes.icon} />
          </IconButton>,
        ]}
        {...other}
      />
    )
  }
)

SnackbarContentWrapper.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
  other: PropTypes.object,
}

const Notifications = ({ message }) => {
  const [open, setOpen] = useState(!!message.body)
  const closeSnackbar = () => setOpen(false)

  useEffect(() => {
    setOpen(!!message.body)
  }, [message])

  //
  // Set to true to style snackbars
  //
  const styling = false

  if (!styling && message && message.body)
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={3000}
        onClose={closeSnackbar}
      >
        <SnackbarContentWrapper
          onClose={closeSnackbar}
          variant={message.variant || 'info'}
          message={message.body}
        />
      </Snackbar>
    )

  if (styling)
    return (
      <>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={true}
          autoHideDuration={3000000}
          onClose={closeSnackbar}
        >
          <SnackbarContentWrapper
            onClose={closeSnackbar}
            variant={'info'}
            message={'INFO sample-message'}
          />
        </Snackbar>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          open={true}
          autoHideDuration={3000000}
          onClose={closeSnackbar}
        >
          <SnackbarContentWrapper
            onClose={closeSnackbar}
            variant={'success'}
            message={'SUCCESS sample-message'}
          />
        </Snackbar>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={true}
          autoHideDuration={3000000}
          onClose={closeSnackbar}
        >
          <SnackbarContentWrapper
            onClose={closeSnackbar}
            variant={'warning'}
            message={'WARNING sample-message'}
          />
        </Snackbar>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={true}
          autoHideDuration={3000000}
          onClose={closeSnackbar}
        >
          <SnackbarContentWrapper
            onClose={closeSnackbar}
            variant={'error'}
            message={'ERROR sample-message'}
          />
        </Snackbar>{' '}
      </>
    )

  return null
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
