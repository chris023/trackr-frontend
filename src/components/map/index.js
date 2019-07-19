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

const myMap = ({ classes, center, markers, zoom }) => {
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
        {markers.map(({ lat, long }) => (
          <Marker key={lat * long} lat={lat} lng={long} />
        ))}
      </GoogleMapReact>
      <Filters />
    </div>
  )
}

myMap.propTypes = {
  center: PropTypes.object,
  markers: PropTypes.array,
  zoom: PropTypes.number,
}

export default withStyles(styles)(myMap)
