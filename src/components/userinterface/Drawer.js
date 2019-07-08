import React from 'react'
import PropTypes from 'prop-types'
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

const styles = theme => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerHeader: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    height: theme.mixins.toolbar.minHeight + 8,
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
})

// eslint-disable-next-line no-unused-vars
const Header = ({ classes, open, closeDrawer }) => {
  return (
    <Drawer
      PaperProps={{
        style: {
          zIndex: 1099,
          width: 240,
        },
      }}
      open={open}
      onClose={closeDrawer}
      // variant="persistent"
      className={classes.drawer}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={closeDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <div className={classes.list}>
        <List>
          {['Home', 'Inspections', 'Stuff', 'More Stuff'].map(text => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  )
}

Header.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Header)
