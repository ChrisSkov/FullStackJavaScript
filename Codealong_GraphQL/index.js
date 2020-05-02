import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";
const app = express();

app.get("/", async (req, res) => {
  res.send("Satan");
});

const root = { friend: () => {
    return {
        "id": 666,
        "firstName": "Satan",
        "lastName": "The Moist",
        "gender": "Male",
        "language": "yes",
        "email": "satan@satan.com",
    }
} };
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(8080, () =>
  console.log("Running server on port localhost:8080/graphql")
);
