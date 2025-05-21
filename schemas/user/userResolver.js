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
  },
  
  /**
   * Get Users with products
   */
  User: {
    products(parent) {
      return products.filter(
        (p) => p.userId === parent.id
      );
    }
  }
};

export default userResolvers;
