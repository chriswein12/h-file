const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: STRING!
        email: String
    }
`;

module.exports = typeDefs;