const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull, GraphQLEnumType } = require('graphql');

const BorrowType = new GraphQLObjectType({
  name: "Borrow",
  fields: () => ({
    id: { type: GraphQLID },
    userId: { type: new GraphQLNonNull(GraphQLID) },
    bookId: { type: new GraphQLNonNull(GraphQLID) },
    borrowDate: { type: GraphQLString },
    returnDate: { type: GraphQLString },
    status: { 
      type: new GraphQLEnumType({
        name: "BorrowStatus",
        values: {
          BORROWED: { value: "borrowed" },
          RETURNED: { value: "returned" },
        },
      }),
    },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

module.exports = BorrowType;