import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Fab,
  MenuItem,
  TextField,
  withStyles,
  DialogTitle,
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { withApollo } from 'react-apollo'

import { CREATE_ASSET } from '../../../util/apollo/queries/assets'

const styles = () => ({})

const CreateDialog = ({ classes, client }) => {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({
    name: '',
    type: '',
    tracker: '',
  })

  const openDialog = () => setOpen(true)
  const closeDialog = () => setOpen(false)

  const handleChange = key => ({ target: { value } }) =>
    setForm(prev => ({ ...prev, [key]: value }))

  const createNewAsset = () => {
    const variables = {
      identifier: form.name,
      type: form.type,
    }

    if (form.tracker.length) variables.serial = form.tracker

    client
      .mutate({
        mutation: CREATE_ASSET,
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
        <DialogTitle>Create New Asset</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={form.name}
            onChange={handleChange('name')}
            variant="outlined"
            fullWidth
            margin="dense"
          />
          <TextField
            label="Type"
            value={form.type}
            onChange={handleChange('type')}
            variant="outlined"
            fullWidth
            margin="dense"
            select
          >
            <MenuItem value="crate">Crate</MenuItem>
          </TextField>
          <TextField
            label="Tracker Serial Number (Optional)"
            value={form.tracker}
            onChange={handleChange('tracker')}
            variant="outlined"
            fullWidth
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={createNewAsset}>
            Create
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
