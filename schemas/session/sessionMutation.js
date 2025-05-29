import Session from "../../models/session.js";

export const sessionMutation = {
    Mutation: {
        createSession: async (parent, args) => {
            return Session.create(args);
        }
    } 
}