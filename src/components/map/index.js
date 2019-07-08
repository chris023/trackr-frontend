import React from 'react'
import GoogleMapReact from 'google-map-react'

import Marker from './Marker'

const myMap = () => {
  return (
    <GoogleMapReact
      // eslint-disable-next-line no-undef
      bootstrapURLKeys={{ key: process.env.REACT_APP_GMAPS_KEY }}
      defaultCenter={{
        lat: 30.25,
        lng: -92,
      }}
      defaultZoom={10}
    >
      <Marker lat={30.5} lng={-92} />
      <Marker lat={30.2} lng={-92.2} />
    </GoogleMapReact>
  )
}

export default myMap
