import React from 'react'
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react'
import { withStyles } from '@material-ui/core'
import { Query } from 'react-apollo'

import { GET_GMAPS_KEY } from '../../util/apollo/queries/keys'
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
      <Query query={GET_GMAPS_KEY}>
        {({ data: { googleMapsKey } }) => {
          if (!googleMapsKey) return null
          return (
            <GoogleMapReact
              bootstrapURLKeys={{
                key: googleMapsKey,
              }}
              defaultCenter={
                center || {
                  lat: 30.25,
                  lng: -92,
                }
              }
              defaultZoom={zoom || 10}
            >
              {markers.map(({ serial, latitude, longitude }) => (
                <Marker key={serial} lat={latitude} lng={longitude} />
              ))}
            </GoogleMapReact>
          )
        }}
      </Query>
      <Filters />
    </div>
  )
}

myMap.propTypes = {
  center: PropTypes.object,
  classes: PropTypes.object,
  markers: PropTypes.array,
  zoom: PropTypes.number,
}

export default withStyles(styles)(myMap)
