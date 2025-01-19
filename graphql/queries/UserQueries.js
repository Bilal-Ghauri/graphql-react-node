const { GraphQLList, GraphQLID } = require("graphql");
const UserType = require("../types/UserType");
const User = require("../models/User");

const UserQueries = {
  users: {
    type: new GraphQLList(UserType),
    resolve: async () => await User.find(),
  },
  user: {
    type: UserType,
    args: { id: { type: GraphQLID } },
    resolve: async (_, args) => await User.findById(args.id),
  },
};

module.exports = UserQueries;
