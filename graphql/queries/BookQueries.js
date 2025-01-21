const { GraphQLList } = require("graphql");
const BookType = require("../types/BookType");
const Book = require("../models/Book");


const BookQueries = {
    books: {
        type: new GraphQLList(BookType),
        resolve: async () => {
            return await Book.find()
        }
    }
}

module.exports =  BookQueries