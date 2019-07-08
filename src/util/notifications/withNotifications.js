import React from 'react'
import { connect } from 'react-redux'

import { notifications } from '../redux/actions'

const mapDispatchToProps = dispatch => ({
  notifications: {
    notify: message => dispatch(notifications.notify(message)),
    notifySuccess: message => dispatch(notifications.notifySuccess(message)),
    notifyError: message => dispatch(notifications.notifyError(message)),
    notifyWarning: message => dispatch(notifications.notifyWarning(message)),
  },
})

const withNotifications = BaseComponent => {
  const ConnectedComponent = props => <BaseComponent {...props} />

  return connect(
    null,
    mapDispatchToProps
  )(ConnectedComponent)
}

export default withNotifications
