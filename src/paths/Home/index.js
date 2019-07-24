import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { withApollo } from 'react-apollo'
import { withStyles } from '@material-ui/core'

import { Map } from '../../components'
import { GET_TRACKERS } from '../../util/apollo/queries/trackers'

const styles = () => ({
  mapContainer: {
    width: '100%',
    height: 'calc(100vh - 64px)',
  },
})

const Home = ({ classes, client }) => {
  const [markers, setMarkers] = useState([])

  client
    .query({ query: GET_TRACKERS })
    .then(({ data: { trackers } }) => setMarkers(trackers))

  return (
    <div className={classes.mapContainer}>
      <Map markers={markers} />
    </div>
  )
}

Home.propTypes = {
  classes: PropTypes.object,
  client: PropTypes.object,
}

export default compose(
  withStyles(styles),
  withApollo
)(Home)
