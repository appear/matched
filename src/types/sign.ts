import { User } from './user'

export interface SigninMutationArgs {
  user: {
    email: string
    provider: User['provider']
    name: string
    socialId: string
    thumbnail?: string
  }
}

export interface SigninMutationResponse {
  Signin: {
    status: number
    token: string
    user: User
  }
}
