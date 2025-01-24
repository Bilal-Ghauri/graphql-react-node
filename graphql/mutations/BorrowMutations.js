const { GraphQLNonNull, GraphQLID, GraphQLString, GraphQLEnumType } = require("graphql");
const BorrowType = require("../types/BorrowType");
const Borrow = require('../models/Borrow')

const BorrowMutation = {
    addBorrow: {
        type: BorrowType,
        args: {
            userId: { type: new GraphQLNonNull(GraphQLID) },
            bookId: { type: new GraphQLNonNull(GraphQLID) },
            borrowDate: { type: GraphQLString },
            returnDate: { type: GraphQLString },
            status: {
                type: new GraphQLNonNull(new GraphQLEnumType({
                    name: "BorrowStatuss",
                    values: {
                        BORROWED: { value: "borrowed" },
                        RETURNED: { value: "returned" },
                    },
                })),
            },
        },
        resolve: async (_, args) => {
            const newBorrow = new Borrow(args)
            return await newBorrow.save()
        }
    }
}

module.exports = BorrowMutation;