import Session from "../../models/session.js";

export const sessionResolver = {
    Query: {
        sessions: async () => {
            return Session.findAll();
        }
    } 
}