const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
    type Query {
        quotes: [String!]!
    }
`

const resolvers = {
  Query: {
    quotes: () => ['Hello', 'Wesh']
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => console.log('Server is running on http://localhost:4000'))
