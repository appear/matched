import { gql } from '@apollo/client'

export const USER_FRAGMENT = gql`
  fragment UserFragment on User {
    id
    thumbnail
    name
    email
    about
    socialId
    provider
    isCompleted
    isVisible
    links
    interestedJobs {
      id
      name
      updatedAt
    }
    interestedDomains {
      id
      name
      updatedAt
    }
    createdAt
    updatedAt
  }
`
