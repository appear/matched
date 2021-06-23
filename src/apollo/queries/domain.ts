import { gql } from '@apollo/client'

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
