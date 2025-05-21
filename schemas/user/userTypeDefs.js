export const userTypeDefs = `
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
        role: Int!
      ): User

      deleteUser(uid: ID!): [User]
    }
`;