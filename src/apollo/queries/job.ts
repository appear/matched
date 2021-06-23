import { gql } from '@apollo/client'

export const GET_JOBS = gql`
  query GetJobsQuery {
    GetJobs {
      status
      jobs {
        id
        name
      }
    }
  }
`
