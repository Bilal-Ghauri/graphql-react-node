const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } = require("graphql");

const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        author: { type: GraphQLString },
        category: { type: GraphQLString },
        isbn: { type: GraphQLString },
        copiesAvailable: { type: GraphQLInt },
        totalCopies: { type: GraphQLInt }
    })
})
module.exports = BookType