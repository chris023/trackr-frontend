import gql from 'graphql-tag'

const GET_UPLOADS = gql`
  query {
    uploads {
      filename
      s3Key
    }
  }
`

const GET_UPLOAD_URL = gql`
  query($s3Key: String!) {
    getUploadUrl(s3Key: $s3Key)
  }
`

const UPLOAD_FILE = gql`
  mutation($file: Upload!, $saveAs: String) {
    singleUpload(file: $file, saveAs: $saveAs) {
      filename
    }
  }
`

export { GET_UPLOADS, GET_UPLOAD_URL, UPLOAD_FILE }
