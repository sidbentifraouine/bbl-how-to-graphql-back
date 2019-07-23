const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
    type Query {
        quotes: [Quote!]!
        quote(id: ID!): Quote
    }

    type Mutation {
        createQuote(content: String!): Quote!
    }

    type Quote {
        id: ID!
        content: String!
    }
`

const QUOTES = [{ id: 123, content: 'Hello' }, { id: 1234, content: 'Wesh' }]

const resolvers = {
  Query: {
    quotes: () => QUOTES,
    quote: (parent, queryParams) =>
      QUOTES.find((quote) => quote.id == queryParams.id)
  },
  Mutation: {
    createQuote: (content) => {
      const quote = { id: QUOTES.length + 1, content: content }
      QUOTES.push(quote)
      return quote
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => console.log('Server is running on http://localhost:4000'))
