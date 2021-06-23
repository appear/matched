import { ApolloClient, InMemoryCache } from '@apollo/client'

import { isDev } from '$constants/env'

const client = new ApolloClient({
  uri: isDev ? 'http://localhost:4000/api' : 'https://study.olaf-dev.com/api',
  cache: new InMemoryCache(),
})

export default client
