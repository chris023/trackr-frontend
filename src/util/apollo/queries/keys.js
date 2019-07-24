import gql from 'graphql-tag'

const GET_GMAPS_KEY = gql`
  query {
    googleMapsKey
  }
`

export { GET_GMAPS_KEY }
