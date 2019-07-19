import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

import InfoBox from '../InfoBox'

const styles = () => ({
  root: {
    alignItems: 'center',
    borderRadius: 15,
    cursor: 'pointer',
    display: 'flex',
    height: 30,
    justifyContent: 'center',
    width: 30,
  },
  marker: {
    backgroundColor: 'red',
    borderRadius: 2,
    height: 10,
    width: 10,
    position: 'relative',
    transition: '.2s',
  },
})

const Marker = ({ classes }) => {
  const [open, setOpen] = useState(false)

  const showInfo = () => setOpen(true)
  const hideInfo = () => setOpen(false)
  const toggleInfo = e => {
    e.stopPropagation()
    setOpen(prev => !prev)
  }

  return (
    <div
      className={classes.root}
      onClick={toggleInfo}
      onMouseEnter={showInfo}
      onMouseLeave={hideInfo}
    >
      <div className={classes.marker}>
        <InfoBox open={open} setOpen={setOpen} />
      </div>
    </div>
  )
}

Marker.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Marker)
