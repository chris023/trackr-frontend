import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { createUploadLink } from 'apollo-upload-client'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'

const cache = new InMemoryCache()

const uploadLink = createUploadLink({
  // uri: 'https://crate-tracker-backend.herokuapp.com/graphql',
  uri: 'http://localhost:8000/graphql',
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    // do something with graphql error
  }

  if (networkError) {
    // do something with network error
  }
})

const link = ApolloLink.from([errorLink, uploadLink])

const client = new ApolloClient({
  link,
  cache,
})

export default client
