import User from "../../models/user.js";
import Session from "../../models/session.js";
import bcrypt from "bcryptjs";
import { generateAccessToken, generateRefreshToken, generateSessionId } from "../../helper/sessionHelper.js"
import pkg from 'sequelize/lib/utils/logger';
const { logger } = pkg;

export const userMutation = {
  Mutation: {
    // Create User
    createUser: async (parent, args) => {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(args.password, salt);
      const user = await User.create({...args, password: hash});
      return await User.findByPk(user.uid);
    },

    // Delete User
    deleteUser: async (parent, { uid }) => {
      const user = await User.destroy({
        where: {
          uid: uid,
        },
      });
      return await User.findAll();
    },

    // Authenticate User
    loginUser: async (parent, args) => {
      
      try {

        // find user
        const user = await User.findOne({ where: {email: args.email} });

        // User not found
        if(!user.email) return {isAuthenticated: false, user: user, accessToken: null, code: 403}
        
        //Check/compare the password hash
        const valid = await bcrypt.compare(args.password, user.password)

        // invalid password
        if(!valid) return {isAuthenticated: false, user: user, accessToken: null, code: 403}

        const sessionId = generateSessionId(12).toUpperCase();
        const refreshToken = generateRefreshToken(user);
        const accessToken =  generateAccessToken(user);

        // create the session
        Session.create({id: sessionId, uid: user.uid, token: refreshToken})
        
        return { isAuthenticated: true, user: user, accessToken, code: 200 }

      } catch (err) {
        return { isAuthenticated: false, user: user, accessToken: null, code: 500 }
      }

    }    
  },


};