import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'defaultsecret';
const EXPIRES_IN = '1d'; // You can change this to '2h', '7d', etc.

/**
 * Generates a JWT token.
 * @param {Object} payload - The data you want to include in the token (e.g., user ID).
 * @param {string} [expiresIn] - Optional expiration time.
 * @returns {string} JWT token
 */
export const generateToken = (payload, expiresIn = EXPIRES_IN) => {
    return jwt.sign(payload, SECRET_KEY, { expiresIn });
};

/**
 * Verifies a JWT token.
 * @param {string} token - The token to verify.
 * @returns {Object} Decoded payload if valid.
 * @throws {Error} If the token is invalid or expired.
 */
export const verifyToken = (token) => {
    return jwt.verify(token, SECRET_KEY);
};
