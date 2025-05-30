import { gql } from "apollo-server-express";

export const userTypeDefs = gql`
    type User {
      uid: ID!
      email: String!
      password: String!
      first_name: String!
      last_name: String!
      birth_date: String!
      contact_number: String!
      address: String!
      role: Int!
      last_login: String!
      created_date: String
      products: [Product]
    }

    type Query {
      users: [User]
      user(uid: ID!): User
      userCount: Int
    }

    type Auth {
      isAuthenticated: Boolean
      user: User
      accessToken: String
      code: Int!
    }

    type Mutation {
      createUser(
        uid: ID!
        email: String!
        password: String!
        first_name: String!
        last_name: String!
        birth_date: String!
        contact_number: String!
        address: String!
      ): User

      deleteUser(uid: ID!): [User]

      loginUser(email: String!, password: String!): Auth!
    }
`;