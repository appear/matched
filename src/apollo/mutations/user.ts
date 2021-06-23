import { gql } from '@apollo/client'

import { USER_FRAGMENT } from '$fragments/user'

export const SIGNIN = gql`
  ${USER_FRAGMENT}

  mutation Signin($user: SigninMutationArgs!) {
    Signin(user: $user) {
      status
      token
      user {
        ...UserFragment
      }
    }
  }
`
