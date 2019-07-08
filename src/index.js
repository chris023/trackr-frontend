import 'dotenv/config'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core'

import client from './util/apollo'
import { store } from './util/redux'
import theme from './util/material-ui/theme'
import App from './App'

import './index.css'

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter basename="/app">
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
)
