<<<<<<< HEAD
const { gql } = require('apollo-server-express');
const typeDefs =  gql`
type Auth {
    token: ID!
    user: User
`;

module.exports = typeDefs;
=======
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  # User input
  type User {
    _id: ID!
    username: String!
    email: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  # uncomment original code here:
  # type Description {
  #     descriptionText: String
  #     createdAt: String
  #     username: String
  #     title: String
  #   }

  # New Code here
  type Description {
    description_id: ID!
    title: String
    description: String
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    # addDescription(descriptionText: String!): Description
  }
`;

module.exports = typeDefs;
>>>>>>> cb057b068c629d63b05f2533a92c1ee2139dc46e
