const { GraphQLString, GraphQLInt } = require("graphql");
const BookType = require("../types/BookType");
const Book = require("../models/Book");

const BookMutations = {
    addBook: {
        type: BookType,
        args: {
            title: { type: GraphQLString },
            author: { type: GraphQLString },
            category: { type: GraphQLString },
            isbn: { type: GraphQLString },
            copiesAvailable: { type: GraphQLInt },
            totalCopies: { type: GraphQLInt },
        },
        resolve: async (_, args) => {
            const newBook = new Book(args)
            return await newBook.save()
        }
    }
}

module.exports = BookMutations