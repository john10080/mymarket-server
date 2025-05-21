import User from "../../models/user.js";

export const userMutation = {
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      return await User.findByPk(user.uid);
    },

    deleteUser: async (parent, { uid }) => {
      const user = await User.destroy({
        where: {
          uid: uid,
        },
      });
      return await User.findAll();
    },
  },
};