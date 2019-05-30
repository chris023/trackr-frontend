import React from 'react'
import { Route, Redirect } from 'react-router'
import { connect } from 'react-redux'

const AuthRoute = ({ component: Component, token, ...props }) => {
  const isAuth = <Route {...props} component={Component} />
  const isNotAuth = <Redirect to="/auth/login" />
  return token.length ? isAuth : isNotAuth
}

const mapStateToProps = state => ({
  token: state.user.token,
})

export default connect(mapStateToProps)(AuthRoute)
