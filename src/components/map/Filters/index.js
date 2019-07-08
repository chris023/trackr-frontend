import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

import Panel from './Panel'

const styles = () => ({
  root: {
    alignItems: 'center',
    background: 'rgb(255, 255, 255)',
    border: '0px none',
    borderRadius: 2,
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px -1px',
    color: '#666666',
    cursor: 'pointer',
    display: 'flex',
    height: 40,
    justifyContent: 'center',
    margin: 10,
    position: 'absolute',
    right: 50,
    width: 40,
    top: 0,
    '&:hover': {
      color: '#333333',
    },
  },
  searchIcon: {},
})

const Filters = ({ classes }) => {
  const [open, setOpen] = useState(false)

  const openFiltersPanel = () => setOpen(true)
  const closeFiltersPanel = () => setOpen(false)

  return (
    <>
      <div className={classes.root}>
        <SearchIcon onClick={openFiltersPanel} className={classes.searchIcon} />
      </div>
      <Panel open={open} closeFiltersPanel={closeFiltersPanel} />
    </>
  )
}

Filters.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Filters)
