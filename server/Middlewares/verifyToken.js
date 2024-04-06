const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  // Get the token from the Authorization header
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
    req.user = decoded.user; // Add the decoded user object to the request object
    next(); // Call the next middleware or route handler
  } catch (error) {
    console.error('Error verifying token:', error);
    return res.status(403).json({ message: 'Token is not valid' });
  }
};

module.exports = verifyToken;
