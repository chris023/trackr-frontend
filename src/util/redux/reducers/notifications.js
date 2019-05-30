const initState = {
  message: {},
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'NOTIFICATIONS/NEW':
      return { message: action.message }
    default:
      return state
  }
}
