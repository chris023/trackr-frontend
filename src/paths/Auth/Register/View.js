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

import withNotifications from '../../../util/notifications/withNotifications'
import { REGISTER } from '../../../util/apollo/queries/authentication'
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

const Register = ({ classes, client, history, setUserToken }) => {
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleSubmit = async e => {
    e.preventDefault()

    const token = await client
      .mutate({
        mutation: REGISTER,
        variables: {
          username: state.username,
          email: state.email,
          password: state.password,
        },
      })
      .then(({ data }) => data.signUp.token)
      .catch(e => alert(e))

    if (token) {
      setUserToken(token)

      let stored = sessionStorage.getItem('theoTracker')
      stored = stored ? JSON.parse(stored) : {}
      stored.token = token
      sessionStorage.setItem('theoTracker', JSON.stringify(stored))

      history.push('/home')
    }
  }

  const changeHandler = ({ target }) =>
    setState(prev => ({ ...prev, [target.name]: target.value }))

  return (
    <Paper className={classes.root}>
      <form onSubmit={handleSubmit}>
        <div className={classes.header}>
          <Typography variant="h5">Register</Typography>
        </div>
        <TextField
          label="Username"
          name="username"
          margin="normal"
          variant="outlined"
          required
          className={classes.textField}
          value={state.username}
          onChange={changeHandler}
        />
        <TextField
          label="Email"
          name="email"
          margin="normal"
          variant="outlined"
          required
          className={classes.textField}
          value={state.email}
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
            Register
          </Typography>{' '}
          <ChevronRightIcon />
        </Button>
        <Divider light />
        <div className={classes.footer}>
          <Link to="/auth/login/">
            <Button>Have an account?</Button>
          </Link>
        </div>
      </form>
    </Paper>
  )
}

Register.propTypes = {
  classes: PropTypes.object,
  client: PropTypes.object,
  history: PropTypes.object,
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
)(Register)
