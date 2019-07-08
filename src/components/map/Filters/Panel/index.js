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
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

const styles = theme => ({
  drawer: {
    width: 280,
    flexShrink: 0,
  },
  drawerHeader: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-start',
    height: theme.mixins.toolbar.minHeight + 8,
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
})

const Panel = ({ classes, open, closeFiltersPanel }) => {
  return (
    <Drawer
      PaperProps={{
        style: {
          zIndex: 1099,
          width: 280,
        },
      }}
      anchor="right"
      open={open}
      onClose={closeFiltersPanel}
      className={classes.drawer}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={closeFiltersPanel}>
          <ChevronRightIcon />
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

Panel.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Panel)
