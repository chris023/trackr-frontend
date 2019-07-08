import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Typography, withStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    alignItems: 'center',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    left: 0,
    padding: theme.spacing.unit * 2,
    position: 'absolute',
  },
  content: {
    cursor: 'pointer',
    padding: theme.spacing.unit * 2,
  },
})

// eslint-disable-next-line no-unused-vars
const InfoBox = ({ classes, open, setOpen }) => {
  if (open)
    return (
      <div className={classes.root}>
        <Paper className={classes.content}>
          <Typography noWrap>ID: 12349073</Typography>
          <Typography noWrap>Type: Crate</Typography>
          <Typography noWrap>Updated: July 08, 2019 4:44PM</Typography>
          <Link>
            <Typography noWrap>Details</Typography>
          </Link>
        </Paper>
      </div>
    )
  return null
}

InfoBox.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
}

export default withStyles(styles)(InfoBox)
