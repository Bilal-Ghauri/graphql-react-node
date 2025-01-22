require("dotenv").config();
require("./db");
const express = require("express");
const app = express();

const cors = require("cors");

const { graphqlHTTP } = require("express-graphql");
const UserQueries = require("./graphql/queries/UserQueries");
const UserMutations = require("./graphql/mutations/UserMutations");
const BookQueries = require('./graphql/queries/BookQueries')
const BookMutations = require('./graphql/mutations/BookMutations')
const { GraphQLObjectType, GraphQLSchema } = require("graphql");

app.use(cors());
app.use(express.json());

const rootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    ...UserQueries,
    ...BookQueries
  },
});

const rootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  fields: {
    ...UserMutations,
    ...BookMutations
  },
});

const schema = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation,
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const imageUploadToS3 = require('./util/UploadToS3')
imageUploadToS3()


app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
  console.log("Graphql Server is running on port http://localhost:3000/graphql");
});
