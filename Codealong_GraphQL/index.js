import express from "express";
import graphqlHTTP from "express-graphql";
import { schema } from "./data/schema";
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
});

const app = express();

app.get("/", async (req, res) => {
  res.send("Satan");
});


app.use(
  "/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(8080, () =>
  console.log("Running server on port localhost:8080/graphql")
);
