import { ApolloServer, gql } from 'apollo-server';

import { resolver as resolvers, schema as typeDefs } from './graphql/schema/index';
import { getUser } from './security/auth'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
  context: ({ req }) => {
    const token = req.headers['authorization'];
    if (!token) {
      return {
        "user": null
      }
    }
    else {
      let user = getUser(token);
      return {
        user
      }
    }
  }
});
const PORT = 8000;
server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});