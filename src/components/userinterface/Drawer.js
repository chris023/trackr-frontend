import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import {
  Drawer,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  withStyles,
} from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { withRouter } from 'react-router-dom'

const styles = theme => ({
  drawer: {
    flexShrink: 0,
    easing: theme.transitions.easing.easeOut,
    transition: theme.transitions.duration.enteringScreen,
  },
  drawerHeader: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    height: theme.mixins.toolbar.minHeight + 8,
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
  drawerPaper: {
    width: 240,
    zIndex: theme.zIndex.appBar - 1,
  },
})

const MyDrawer = ({ classes, history, open, toggleDrawer }) => {
  const goTo = path => () => {
    toggleDrawer()
    history.push('/' + path)
  }

  return (
    <Drawer
      open={open}
      onClose={toggleDrawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <div className={classes.list}>
        <List>
          {['Home', 'Assets', 'Trackers'].map(text => (
            <ListItem button onClick={goTo(text)} key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  )
}

MyDrawer.propTypes = {
  classes: PropTypes.object,
  history: PropTypes.object,
  open: PropTypes.bool,
  toggleDrawer: PropTypes.func,
}

export default compose(
  withStyles(styles),
  withRouter
)(MyDrawer)
