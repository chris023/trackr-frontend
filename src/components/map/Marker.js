import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

import InfoBox from './InfoBox'

const styles = () => ({
  root: {
    backgroundColor: 'red',
    cursor: 'pointer',
    height: 10,
    width: 10,
    position: 'relative',
    transition: '.2s',
  },
})

const Marker = ({ classes }) => {
  const [open, setOpen] = useState(false)
  const toggleInfo = e => {
    e.stopPropagation()
    setOpen(prev => !prev)
  }

  return (
    <div className={classes.root} onClick={toggleInfo} onBlur={toggleInfo}>
      <InfoBox open={open} setOpen={setOpen} />
    </div>
  )
}

Marker.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Marker)
