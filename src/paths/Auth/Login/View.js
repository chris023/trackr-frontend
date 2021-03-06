import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withApollo } from 'react-apollo'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import {
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import { LOGIN } from '../../../util/apollo/queries/authentication'
import withNotifications from '../../../util/notifications'
import { user } from '../../../util/redux/actions'

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 3,
    width: 400,
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing.unit,
  },
  submitButton: {
    margin: `${theme.spacing.unit * 2}px 0`,
    width: '100%',
  },
  submitText: {
    letterSpacing: 0.5,
    fontWeight: 700,
    color: theme.palette.primary.contrastText,
  },
  textField: {
    width: '100%',
  },
})

const Login = ({ classes, client, history, notifications, setUserToken }) => {
  const [state, setState] = useState({
    login: '',
    password: '',
  })

  const handleSubmit = async e => {
    e.preventDefault()

    const token = await client
      .mutate({
        mutation: LOGIN,
        variables: {
          login: state.login,
          password: state.password,
        },
      })
      .then(({ data }) => data.signIn.token)
      .catch(e => {
        notifications.notifyError(e.message)
      })

    if (token) {
      setUserToken(token)

      let stored = sessionStorage.getItem('theoTracker')
      stored = stored ? JSON.parse(stored) : {}
      stored.token = token
      sessionStorage.setItem('theoTracker', JSON.stringify(stored))

      notifications.notifySuccess('Logged In Successfully')
      history.push('/home')
    }
  }

  const changeHandler = ({ target }) => {
    setState(prev => ({ ...prev, [target.name]: target.value }))
  }

  return (
    <Paper className={classes.root}>
      <form onSubmit={handleSubmit}>
        <div className={classes.header}>
          <Typography variant="h5">Login</Typography>
        </div>
        <TextField
          label="Username"
          name="login"
          margin="normal"
          variant="outlined"
          required
          className={classes.textField}
          value={state.login}
          onChange={changeHandler}
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          margin="normal"
          variant="outlined"
          required
          className={classes.textField}
          value={state.password}
          onChange={changeHandler}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submitButton}
        >
          <Typography variant="subtitle1" className={classes.submitText}>
            Login
          </Typography>{' '}
          <ChevronRightIcon />
        </Button>
        <Divider light />
        <div className={classes.footer}>
          <Link to="/auth/register/">
            <Button>Create Account</Button>
          </Link>
        </div>
      </form>
    </Paper>
  )
}

Login.propTypes = {
  classes: PropTypes.object,
  client: PropTypes.object,
  history: PropTypes.object,
  notifications: PropTypes.object,
  setUserToken: PropTypes.func,
}

const mapDispatchToProps = dispatch => ({
  setUserToken: token => dispatch(user.setToken(token)),
})

export default compose(
  withNotifications,
  withStyles(styles),
  connect(
    null,
    mapDispatchToProps
  ),
  withApollo
)(Login)
