const initState = {
  token: '',
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'USER/SET_TOKEN':
      return { ...state, token: action.token }
    case 'USER/CLEAR_TOKEN':
      return { token: '' }
    default:
      return state
  }
}
