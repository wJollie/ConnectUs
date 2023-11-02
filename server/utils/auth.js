// auth.js

const jwt = require('jsonwebtoken');
// const { SECRET_KEY } = require('../config/connection.js'); // Replace with your own secret key or configuration

function verifyToken(req, res, next) {
  // Get the token from the request headers
  const token = req.headers.authorization || '';

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - No token provided' });
  }

  try {
    // Verify the token
    const user = jwt.verify(token, SECRET_KEY);
    req.user = user; // Attach the user object to the request for later use
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized - Invalid token' });
  }
}

module.exports = verifyToken;
