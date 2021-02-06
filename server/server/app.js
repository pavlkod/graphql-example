const express = require("express");
const graphqlHTTP = require("express-graphql");

const app = express();
const PORT = 3055;

console.log(graphqlHTTP);
app.use("/graphql", graphqlHTTP.graphqlHTTP({}));

app.listen(PORT, err => {
  console.log("Server started");
});
