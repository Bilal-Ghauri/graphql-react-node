const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull, GraphQLEnumType } = require('graphql');
const UserType = require('./UserType');
const User = require('../models/User')

const BorrowType = new GraphQLObjectType({
  name: "Borrow",
  fields: () => ({
    id: { type: GraphQLID },
    user: {
      type: UserType, resolve: async (parent, args, context) => {
        console.log('parent', parent, 'args', args, 'context', context)
        return await User.findById(parent.userId);
      }
    },
    bookId: { type: new GraphQLNonNull(GraphQLID) },
    borrowDate: { type: GraphQLString },
    returnDate: { type: GraphQLString },
    status: {
      type: GraphQLString
    },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

module.exports = BorrowType;