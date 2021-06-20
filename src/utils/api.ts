import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://study.olaf-dev.com/api',
  cache: new InMemoryCache(),
})

export default client
