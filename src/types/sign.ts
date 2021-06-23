import { User } from './user'

export interface SignupMutationArgs {
  user: {
    email: string
    provider: User['provider']
    name: string
    socialId: string
    thumbnail?: string
  }
}

export interface SignupMutationResponse {
  SignUp: {
    status: number
    token: string
    user: User
  }
}
