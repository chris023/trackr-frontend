import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://crate-tracker-backend.herokuapp.com/graphql',
  }),
  cache: new InMemoryCache(),
})

const getClient = () => client

export default getClient
