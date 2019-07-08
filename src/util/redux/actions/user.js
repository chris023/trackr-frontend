export const setToken = token => ({
  type: 'USER/SET_TOKEN',
  token,
})

export const logout = () => ({
  type: 'USER/CLEAR_TOKEN',
})
