import "reflect-metadata";
import Express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

(async () => {
  const app = Express();

  const schema = await buildSchema({
    resolvers: [],
  });

  const apolloServer = new ApolloServer({ schema });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("SERVER LISTENED ON: http://localhost:4000/graphql");
  });
})();
