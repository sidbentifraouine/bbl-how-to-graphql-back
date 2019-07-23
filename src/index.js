const { GraphQLServer } = require('graphql-yoga')

const MEMORIES = [
  {
    id: 'memory-1',
    title: 'De la Kraken',
    quote: 'Ramène-moi une biére !',
    imageUrl:
      'https://cdn.mos.cms.futurecdn.net/0bfa6d1cf85568b40f7c5e89dcacb6d9.jpg',
    authorName: 'Rico'
  }
]

const resolvers = {
  Query: {
    memories: () => MEMORIES,
    memory: (parent, args) => MEMORIES.find((memory) => memory.id == args.id)
  },
  Mutation: {
    createMemory: (parent, { title, quote, imageUrl, authorName }) => {
      const memory = {
        id: `memory-${MEMORIES.length + 1}`,
        title,
        quote,
        imageUrl,
        authorName
      }
      MEMORIES.push(memory)
      return memory
    },
    updateMemory: (parent, { id, title, quote, imageUrl, authorName }) => {
      const memoryIndex = MEMORIES.findIndex((memory) => memory.id === id)
      const memory = MEMORIES[memoryIndex]
      const updatedMemory = {
        ...memory,
        title: title || memory.title,
        quote: quote || memory.quote,
        imageUrl: imageUrl || memory.imageUrl,
        authorName: authorName || memory.authorName
      }
      MEMORIES.splice(memoryIndex, 1, updatedMemory)
      return updatedMemory
    },
    deleteMemory: (parent, { id }) => {
      const memoryIndex = MEMORIES.findIndex((memory) => memory.id === id)
      return MEMORIES.splice(memoryIndex, 1)[0]
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
})

server.start(() => console.log('Server is running on http://localhost:4000'))
