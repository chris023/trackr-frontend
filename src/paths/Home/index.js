import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

import { Map, UserInterface } from '../../components'

const styles = () => ({
  mapContainer: {
    width: '100%',
    height: 'calc(100vh - 64px)',
  },
})

const Home = ({ classes }) => {
  return (
    <UserInterface>
      <div className={classes.mapContainer}>
        <Map />
      </div>
    </UserInterface>
  )
}

Home.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Home)
