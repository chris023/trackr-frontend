import React from 'react'
import PropTypes from 'prop-types'
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import clsx from 'clsx'

import LogoutMenu from './LogoutMenu'

const styles = theme => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
  },
  content: {
    alignItems: 'center',
    display: 'flex',
  },
  drawerOpen: {
    paddingLeft: 240,
  },
  filler: theme.mixins.toolbar,
  headerText: {
    color: theme.palette.primary.contrastText,
  },
  menuIcon: {},
})

const Header = ({ classes, open, toggleDrawer }) => {
  return (
    <>
      <div className={classes.filler} />
      <AppBar>
        <Toolbar>
          <div className={classes.root}>
            <div className={classes.content}>
              <IconButton
                onClick={toggleDrawer}
                className={clsx(classes.menuIcon, classes.headerText)}
              >
                <MenuIcon />
              </IconButton>
              <Typography className={classes.headerText} variant="h6">
                TheoForce
              </Typography>
            </div>
            <div />
            <LogoutMenu />
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

Header.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Header)
