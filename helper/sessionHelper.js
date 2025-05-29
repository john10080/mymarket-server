import jwt from 'jsonwebtoken'
import crypto from 'node:crypto'; // For ES Modules

export const generateSessionId = (length) => {
  return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').substring(0, length);
};

export const generateRefreshToken = (user) => {
    return jwt.sign({ uid: user.uid, token: user.token }, "refresh-token-secret", { expiresIn: '7d' }); // Long-lived
}

export const generateAccessToken = (user) => {
    return jwt.sign({ uid: user.uid, token: user.token }, "access-token-secret", { expiresIn: '15m' }); // Short-lived
}

