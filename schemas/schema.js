// TypeDefs
import { userTypeDefs } from './user/userTypeDefs.js';
import { productTypeDefs } from './product/productTypeDefs.js';

// Resolvers
import userResolvers from './user/userResolver.js';
import { productResolvers } from './product/productResolvers.js';

//Mutations
import { userMutation } from './user/userMutation.js';

// Export typeDefs
export const typeDefs = [userTypeDefs, productTypeDefs];

// Export resolvers
export const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...productResolvers.Query,
  },
  Mutation: {
    ...userMutation.Mutation,
  },
  User: {
    ...userResolvers.User,
  },
};


