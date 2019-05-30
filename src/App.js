import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import { Auth, Home } from './paths'
import { AuthRoute } from './components'

const App = () => {
  return (
    <Switch>
      <Route exact path="/auth/login" component={Auth} />
      <AuthRoute path="/home" component={Home} />
      <Redirect to="/auth/login" />
    </Switch>
  )
}

export default App
