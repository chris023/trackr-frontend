import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

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
    letterSpacing: 0.5,
    fontWeight: 700,
    margin: `${theme.spacing.unit * 2}px 0`,
    width: '100%',
  },
  submitText: {
    color: theme.palette.primary.contrastText,
  },
  textField: {
    width: '100%',
  },
})

const Login = ({ classes }) => {
  const [state, setState] = useState({
    login: '',
    password: '',
  })

  const handleSubmit = e => e.preventDefault

  const changeHandler = ({ target }) =>
    setState(prev => ({ ...prev, [target.name]: target.value }))

  return (
    <Paper className={classes.root}>
      <form onSubmit={handleSubmit}>
        <div className={classes.header}>
          <Typography variant="h5">Login</Typography>
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
}

export default withStyles(styles)(Login)
