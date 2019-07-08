import React from 'react'
import PropTypes from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'

const styles = theme => ({
  root: {
    backgroundColor: '#fff',
    border: 'solid 1px black',
    cursor: 'pointer',
    padding: theme.spacing.unit * 2,
    position: 'absolute',
    bottom: 'calc(100%)',
    width: 200,
  },
})

// eslint-disable-next-line no-unused-vars
const InfoBox = ({ classes, open, setOpen }) => {
  if (open)
    return (
      <div className={classes.root}>
        <Typography align="right">close</Typography>
        <Typography>Type: crate</Typography>
        <Typography>Size: 12ft. x 24ft x 12ft</Typography>
        <Typography>ID: 12349073</Typography>
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
