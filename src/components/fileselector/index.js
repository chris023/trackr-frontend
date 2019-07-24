import React from 'react'
import PropTypes from 'prop-types'

const FileSelector = ({ onLoadFile }) => (
  <input type="file" onChange={({ target: { files } }) => onLoadFile(files)} />
)

FileSelector.propTypes = {
  onLoadFile: PropTypes.func,
}

export default FileSelector
