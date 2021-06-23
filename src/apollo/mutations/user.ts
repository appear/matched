import { gql } from '@apollo/client'

import { USER_FRAGMENT } from '$fragments/user'

export const SIGNUP = gql`
  ${USER_FRAGMENT}

  mutation Signup($user: SignUpMutationArgs!) {
    SignUp(user: $user) {
      status
      token
      user {
        ...UserFragment
      }
    }
  }
`
