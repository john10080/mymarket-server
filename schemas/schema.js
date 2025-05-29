// TypeDefs
import { userTypeDefs } from './user/userTypeDefs.js';
import { productTypeDefs } from './product/productTypeDefs.js';
import { sessionTypeDefs } from './session/sessionTypeDefs.js';

// Resolvers
import userResolvers from './user/userResolver.js';
import { productResolvers } from './product/productResolvers.js';
import { sessionResolver } from './session/sessionResolver.js';

//Mutations
import { userMutation } from './user/userMutation.js';
import { sessionMutation } from './session/sessionMutation.js';

// Export typeDefs
export const typeDefs = [userTypeDefs, productTypeDefs, sessionTypeDefs];

// Export resolvers
export const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...productResolvers.Query,
    ...sessionResolver.Query,
  },
  Mutation: {
    ...userMutation.Mutation,
    ...sessionMutation.Mutation,
  },
  User: {
    ...userResolvers.User,
  },
};


