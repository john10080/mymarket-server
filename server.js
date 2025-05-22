import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs, resolvers } from "./schemas/schema.js";

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: 9000 },
  cors: {
    origin: "http://localhost:3000", // Allow requests from your React app
    credentials: true,
  }
});

console.log(`Server Running at: ${url}`);

///// Query, Mutation
//// typeDefs, resolvers