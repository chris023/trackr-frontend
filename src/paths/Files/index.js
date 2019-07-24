import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import {
  IconButton,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  withStyles,
} from '@material-ui/core'
import SaveAltIcon from '@material-ui/icons/SaveAlt'
import { withApollo, Query } from 'react-apollo'

import { GET_UPLOAD_URL, GET_UPLOADS } from '../../util/apollo/queries/uploads'
import UploadFile from './uploadDialog'

const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 3,
    width: '100%',
  },
  downloadIcon: {
    marginLeft: theme.spacing.unit * 2,
  },
  header: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing.unit,
  },
})

const Assets = ({ classes, client }) => {
  const downloadFile = ({ s3Key, filename }) => () => {
    client
      .query({
        query: GET_UPLOAD_URL,
        variables: { s3Key },
        fetchPolicy: 'network-only',
      })
      .then(async ({ data: { getUploadUrl: uploadUrl } }) => {
        await fetch(uploadUrl, {
          method: 'GET',
        })
          .then(response => response.blob())
          .then(blob => {
            const url = window.URL.createObjectURL(new Blob([blob]))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', filename)
            document.body.appendChild(link)
            link.click()
            link.parentNode.removeChild(link)
          })
          .catch(error => {
            alert(error)
          })
      })
  }
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h6">Files</Typography>
        <UploadFile />
      </div>
      <Paper>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Query query={GET_UPLOADS}>
              {({ data, loading, error }) => {
                if (loading || error) return null
                return data.uploads.map(upload => (
                  <TableRow key={upload.id} className={classes.tableRow}>
                    <TableCell align="left">
                      {upload.filename}
                      <IconButton
                        className={classes.downloadIcon}
                        onClick={downloadFile(upload)}
                      >
                        <SaveAltIcon />
                      </IconButton>
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
  client: PropTypes.object,
}

export default compose(
  withStyles(styles),
  withApollo
)(Assets)
