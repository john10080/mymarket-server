import User from "../../models/user.js";
import { products } from "../product/productResolvers.js";

const userResolvers = {
  /**
   * Query Users
   */
  Query: {
    users: async () => {
      return User.findAll();
    },
    user: async (parent, { id }) => {
      const user = users.find((u) => u.id === id);
      return user
    },
    userCount: async () => {
      return User.count();
    }
  },
  
  /**
   * Get Users with products
   */
  User: {
    // Get products for a user
    products(parent) {
      return products.filter(
        (p) => p.userId === parent.id
      );
    }
  },

};

export default userResolvers;
