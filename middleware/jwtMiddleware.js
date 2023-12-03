const jwt = require('jsonwebtoken');

const jwtMiddleware = (req, res, next) => {
  // check existence of JWT in request header
  const token = req.header('x-auth-token');

  if (!token) {
    // respond with  401 Unauthorized HTTP response
    return res.status(401).json({ error: 'Access is Denied' });
  }

  try {
    // verify JWT valid
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    // Allows the request if the JWT valid
    next();
  } catch (error) {
    // If token invalid, respond 401 
    res.status(401).json({ error: 'Access is Denied' });
  }
};

module.exports = jwtMiddleware;