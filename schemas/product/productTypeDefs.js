export const productTypeDefs = `
    type Product {
        id: ID!
        name: String!
        description: String
        price: Float!
        inStock: Boolean!
        userId: ID!
        user: User!
        createdAt: String
        updatedAt: String
    }

    type Query {
        products: [Product!]!
        product(id: ID!): Product
    }
`;

