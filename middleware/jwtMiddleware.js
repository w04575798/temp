// jwtMiddleware.js
const jwt = require('jsonwebtoken');

const jwtMiddleware = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    console.error('Access denied: Missing token');
    return res.status(401).json({ error: 'Access is Denied' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user information to the request object
    next(); // Continue to the next middleware or route handler
  } catch (error) {
    console.error('Access denied: Invalid token', error.message);
    return res.status(401).json({ error: 'Access is Denied' });
  }
};

module.exports = jwtMiddleware;
