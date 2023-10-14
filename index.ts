import { createServer } from "http";
import { createSchema, createYoga } from "graphql-yoga";
import { Resolvers } from "./resolvers.js";
import { readFileSync } from "fs";

const resolvers: Resolvers = {
  Query: {
    hello: () => "Hello World!",
  },
};

const typeDefs = readFileSync("./schema.gql", { encoding: "utf-8" });

const yoga = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
});

const server = createServer(yoga);

server.listen(4000, () => {
  console.info("Server is running on http://localhost:4000/graphql");
});
