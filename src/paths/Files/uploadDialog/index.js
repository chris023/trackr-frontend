import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Fab,
  withStyles,
  DialogTitle,
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { withApollo } from 'react-apollo'

import { UPLOAD_FILE } from '../../../util/apollo/queries/uploads'
import { FileSelector } from '../../../components'

const styles = () => ({})

const CreateDialog = ({ classes, client }) => {
  const [open, setOpen] = useState(false)
  const [file, setFile] = useState(null)
  const [saveAs, setSaveAs] = useState('no-name')

  const openDialog = () => setOpen(true)
  const closeDialog = () => setOpen(false)

  const onLoadFile = files => {
    setFile(files[0])
    setSaveAs(files[0].name)
  }

  const uploadFile = () => {
    const variables = {
      file,
      saveAs,
    }

    client
      .mutate({
        mutation: UPLOAD_FILE,
        variables,
      })
      .then(({ error, data }) => {
        if (error) alert(error)
        if (data) closeDialog()
      })
      .catch(e => alert(e))
  }

  return (
    <>
      <Fab color="primary" className={classes.fab} onClick={openDialog}>
        <AddIcon />
      </Fab>
      <Dialog open={open}>
        <DialogTitle>Upload File</DialogTitle>
        <DialogContent>
          <FileSelector onLoadFile={onLoadFile} />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={uploadFile}>
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

CreateDialog.propTypes = {
  classes: PropTypes.object,
  client: PropTypes.object,
}

export default compose(
  withStyles(styles),
  withApollo
)(CreateDialog)
