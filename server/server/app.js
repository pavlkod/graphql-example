const express = require("express");

const { graphqlHTTP } = require("express-graphql");
const schema = require("../schema/schema");

const app = express();
const PORT = 3055;

// console.log(schema);
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, err => {
  console.log("Server started");
});
