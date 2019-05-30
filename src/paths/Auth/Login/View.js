import React from 'react'
import PropTypes from 'prop-types'
import { Paper, withStyles } from '@material-ui/core'

const styles = () => ({
  paper: {
    width: 350,
  },
})

const Login = ({ classes }) => {
  return <Paper className={classes.paper}>Login</Paper>
}

Login.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Login)
