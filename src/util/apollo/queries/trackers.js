import gql from 'graphql-tag'

const GET_TRACKERS = gql`
  query {
    trackers {
      id
      latitude
      longitude
      battery
      serial
      asset {
        id
        identifier
      }
    }
  }
`

export { GET_TRACKERS }
