export const sessionTypeDefs = `
    type Session {
        id: String!
        uid: ID!
        token: String!
    }

    type Query {
        sessions: [Session]
    }

    type Mutation {
        createSession(
            id: String!
            uid: ID!
            token: String!
        ): Session
    }

`