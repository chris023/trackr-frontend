import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'

const cache = new InMemoryCache()

const httpLink = new HttpLink({
  uri: 'https://crate-tracker-backend.herokuapp.com/graphql',
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    // do something with graphql error
  }

  if (networkError) {
    // do something with network error
  }
})

const link = ApolloLink.from([errorLink, httpLink])

const client = new ApolloClient({
  link,
  cache,
})

export default client
