import React from 'react'
import { Route, Redirect } from 'react-router'
import { connect } from 'react-redux'

const AuthRoute = ({ component: Component, tokens, ...props }) => {
  const hasTokens = tokens ? tokens.token : null
  const isAuth = <Route {...props} component={Component} />
  const isNotAuth = <Redirect to="/auth/login" />
  return hasTokens ? isAuth : isNotAuth
}

const mapStateToProps = state => ({
  tokens: state.tokens,
})

export default connect(mapStateToProps)(AuthRoute)
