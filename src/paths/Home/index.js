import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

import { Map } from '../../components'

const styles = () => ({
  mapContainer: {
    width: '100%',
    height: 'calc(100vh - 64px)',
  },
})

const Home = ({ classes }) => {
  return (
    <div className={classes.mapContainer}>
      <Map markers={[{ lat: 30.5, long: -92 }, { lat: 30.2, long: -92.2 }]} />
    </div>
  )
}

Home.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Home)
