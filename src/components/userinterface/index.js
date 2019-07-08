import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

import Header from './Header'
import Drawer from './Drawer'

const styles = () => ({
  root: {
    height: '100%',
  },
  belowHeader: {},
  viewArea: {},
})

const UserInterface = ({ classes, children }) => {
  const [open, setOpen] = useState(true)

  const closeDrawer = () => setOpen(false)
  const toggleDrawer = () => setOpen(prev => !prev)
  return (
    <div className={classes.root}>
      <Header open={open} toggleDrawer={toggleDrawer} />
      <div className={classes.belowHeader}>
        <Drawer open={open} closeDrawer={closeDrawer} />
        <div className={classes.viewArea}>{children}</div>
      </div>
    </div>
  )
}

UserInterface.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node,
}

export default withStyles(styles)(UserInterface)
