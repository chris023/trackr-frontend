import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

import Header from './Header'
import Drawer from './Drawer'

const styles = () => ({
  root: {
    height: '100%',
  },
  belowHeader: {
    display: 'flex',
  },
  viewArea: {
    width: '100%',
  },
})

const UserInterface = ({ classes, children }) => {
  const [open, setOpen] = useState(false)

  const toggleDrawer = () => setOpen(prev => !prev)
  return (
    <div className={classes.root}>
      <Header open={open} toggleDrawer={toggleDrawer} />
      <div className={classes.belowHeader}>
        <Drawer open={open} toggleDrawer={toggleDrawer} />
        {children}
      </div>
    </div>
  )
}

UserInterface.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node,
}

export default withStyles(styles)(UserInterface)
