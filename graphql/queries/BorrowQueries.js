const BorrowType = require("../types/BorrowType");
const Borrow = require('../models/Borrow');
const { GraphQLList } = require("graphql");

const BorrowQueries = {
    borrows : {
        type : new GraphQLList(BorrowType),
        resolve: async() => {
            return await Borrow.find();
        }
    }
}

module.exports = BorrowQueries;
