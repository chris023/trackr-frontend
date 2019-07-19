import React from 'react'
import PropTypes from 'prop-types'
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  withStyles,
} from '@material-ui/core'
import { Query } from 'react-apollo'

import { GET_TRACKERS } from '../../util/apollo/queries/trackers'

const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 3,
    width: '100%',
  },
  header: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing.unit,
  },
})

const Trackers = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h6">Trackers</Typography>
      </div>
      <Paper>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Serial</TableCell>
              <TableCell>Battery</TableCell>
              <TableCell>Longitude</TableCell>
              <TableCell>Latitude</TableCell>
              <TableCell>Asset</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Query query={GET_TRACKERS}>
              {({ data, loading, error }) => {
                if (loading || error) return null
                return data.trackers.map(tracker => (
                  <TableRow key={tracker.id} className={classes.tableRow} hover>
                    <TableCell>{tracker.serial}</TableCell>
                    <TableCell>{tracker.battery || '-'}</TableCell>
                    <TableCell>{tracker.latitude || '-'}</TableCell>
                    <TableCell>{tracker.longitude || '-'}</TableCell>
                    <TableCell>
                      {tracker.asset ? tracker.asset.identifier : '-'}
                    </TableCell>
                  </TableRow>
                ))
              }}
            </Query>
          </TableBody>
        </Table>
      </Paper>
    </div>
  )
}

Trackers.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Trackers)
