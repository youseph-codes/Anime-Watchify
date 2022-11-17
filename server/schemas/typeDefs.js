const { gql } = require('apollo-server-express');
const typeDefs =  gql`
    type Auth {
        token: ID!
        user: User
    }

    type Anime {
        _id: ID
        voteCount: Int
        title: String
        likedUsers: [User]
        dislikedUsers: [User]
    }

    type User {
        _id: ID
        username: String
        email: String
    }

    type Query {

    }

    type Mutation {
        
    }
    }
`;

module.exports = typeDefs;