import gql from 'graphql-tag'

const GET_ASSETS = gql`
  query {
    assets {
      id
      type
      identifier
      tracker {
        id
        serial
      }
    }
  }
`

const CREATE_ASSET = gql`
  mutation($type: String!, $identifier: String!, $serial: String) {
    createAsset(type: $type, identifier: $identifier, serial: $serial) {
      id
      type
      identifier
      tracker {
        serial
      }
    }
  }
`

export { CREATE_ASSET, GET_ASSETS }
