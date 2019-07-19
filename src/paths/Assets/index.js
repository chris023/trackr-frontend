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

import { GET_ASSETS } from '../../util/apollo/queries/assets'
import CreateAsset from './createDialog'

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

const Assets = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h6">Assets</Typography>
        <CreateAsset />
      </div>
      <Paper>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Nearest Address</TableCell>
              <TableCell>Tracker Serial</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Query query={GET_ASSETS}>
              {({ data, loading, error }) => {
                if (loading || error) return null
                return data.assets.map(asset => (
                  <TableRow key={asset.id} className={classes.tableRow} hover>
                    <TableCell>{asset.identifier}</TableCell>
                    <TableCell>{asset.type}</TableCell>
                    <TableCell>
                      1234 Jones Street, Lafayette, LA 54321
                    </TableCell>
                    <TableCell>
                      {asset.tracker ? asset.tracker.serial : '-'}
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

Assets.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Assets)
