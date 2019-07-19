import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { InputBase, withStyles } from '@material-ui/core'

const styles = theme => ({
  textField: {
    width: 0,
  },
  open: {
    width: '100%',
  },
})

const SearchInput = ({ classes, open }) => {
  return (
    <InputBase
      className={clsx(classes.textField, open && classes.open)}
      placeholder="Search..."
    />
  )
}

SearchInput.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(SearchInput)
