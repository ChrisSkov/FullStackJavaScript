import express from "express";
import graphqlHTTP from "express-graphql"
import {schema} from "./data/schema"
//import schema from "./schemaOriginal"
import cors from "cors";

//import resolvers from "./resolversOriginal"
const app = express();
app.use(cors())

app.get("/", (req, res) => {
  res.send("GraphQL is amazing")
})

//const root = resolvers;

app.use("/graphql", graphqlHTTP({
  schema: schema,
  //rootValue: root,
  graphiql: true
}))

app.listen(8080, () => console.log("Server Started, listening on Port 8080"))