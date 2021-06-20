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

export const GET_DOMAINS = gql`
  query GetDomainsQuery {
    GetDomains {
      status
      domains {
        id
        name
      }
    }
  }
`
