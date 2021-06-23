import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  // uri: 'https://study.olaf-dev.com/api',
  uri: 'http://localhost:4000/api',
  cache: new InMemoryCache(),
})

export default client
