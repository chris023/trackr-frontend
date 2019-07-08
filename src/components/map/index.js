import React from 'react'
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react'
import { withStyles } from '@material-ui/core'

import Marker from './Marker'
import Filters from './Filters'

const styles = () => ({
  root: {
    height: '100%',
    position: 'relative',
    width: '100%',
  },
})

const myMap = ({ classes, center, zoom }) => {
  return (
    <div className={classes.root}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key:
            process.env.NODE_ENV === 'development' &&
            process.env.REACT_APP_GMAPS_KEY,
        }}
        defaultCenter={
          center || {
            lat: 30.25,
            lng: -92,
          }
        }
        defaultZoom={zoom || 10}
      >
        <Marker lat={30.5} lng={-92} />
        <Marker lat={30.2} lng={-92.2} />
      </GoogleMapReact>
      <Filters />
    </div>
  )
}

myMap.propTypes = {
  center: PropTypes.object,
  zoom: PropTypes.number,
}

export default withStyles(styles)(myMap)
