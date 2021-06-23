import gql from 'graphql-tag'

export const SIGNUP = () => gql`
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
