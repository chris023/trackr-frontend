import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import SearchInput from './SearchInput'

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
    // left: 10,
    margin: 10,
    position: 'absolute',
    right: 50,
    width: 40,
    top: 0,
    '&:hover': {
      color: '#333333',
    },
  },
  closeSearch: {
    visibility: 'hidden',
    width: 0,
  },
  closeSearchVisible: {
    width: '100%',
  },
  open: {
    width: 300,
  },
  searchIcon: {
    margin: 16,
  },
})

const Filters = ({ classes }) => {
  const [open, setOpen] = useState(false)

  const openOrSearch = () => {
    setOpen(true)
  }

  return (
    <>
      <div className={clsx(open && classes.open, classes.root)}>
        <div className={classes.closeSearch}>
          <ChevronRightIcon />
        </div>
        <SearchIcon onClick={openOrSearch} className={classes.searchIcon} />
        <SearchInput open={open} />
      </div>
    </>
  )
}

Filters.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Filters)
