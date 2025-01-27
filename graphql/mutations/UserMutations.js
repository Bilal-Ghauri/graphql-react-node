const { GraphQLString, GraphQLID, GraphQLError } = require("graphql");
const User = require("../models/User");
const UserType = require("../types/UserType");

const UserMutations = {
  addUser: {
    type: UserType,
    args: {
      name: { type: GraphQLString },
      role: { type: GraphQLString },
      email: { type: GraphQLString },
      password: { type: GraphQLString },
    },
    resolve: async (parent, args) => {
      let findUser = await User.findOne({ email: args.email })
      console.log('findUser',findUser)
      if (findUser) {
        throw new Error("User already exists")
      }
      const newUser = new User(args);
      return await newUser.save();
    },
  },
  editUser: {
    type: UserType,
    args: {
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      role: { type: GraphQLString },
      email: { type: GraphQLString },
      password: { type: GraphQLString },
    },
    resolve: async (parent, args) => {
      const updateData = {};
      if (args.name) {
        updateData.name = args.name;
      }
      if (args.role) {
        updateData.role = args.role;
      }
      if (args.email) {
        updateData.email = args.email;
      }
      if (args.password) {
        updateData.password = args.password;
      }

      return await User.findByIdAndUpdate(args.id, updateData, { new: true });
    },
  },
  deleteUser: {
    type: UserType,
    args: {
      id: { type: GraphQLID },
    },
    resolve: async (_, { id }) => {
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) {
        const error = new Error("User not found");
        error.code = "USER_NOT_FOUND"; // Custom error code
        error.status = 404; // Custom status code
        throw error;
      }
      return deletedUser;
    },
  },
};

module.exports = UserMutations;
