const variants = {
  INFO: 'info',
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
}

export const notify = body => ({
  type: 'NOTIFICATIONS/NEW',
  message: {
    body,
    variant: variants.INFO,
  },
})

export const notifySuccess = body => ({
  type: 'NOTIFICATIONS/NEW',
  message: {
    body,
    variant: variants.SUCCESS,
  },
})
export const notifyError = body => ({
  type: 'NOTIFICATIONS/NEW',
  message: {
    body,
    variant: variants.ERROR,
  },
})
export const notifyWarning = body => ({
  type: 'NOTIFICATIONS/NEW',
  message: {
    body,
    variant: variants.WARNING,
  },
})
