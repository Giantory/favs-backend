const { sign, verify } = require('jsonwebtoken');



const signToken = (payload, expiresIn = 86400 ) => {
  sign(payload, 'user', { 
    algorithm: 'RS256',
    expiresIn
  });
}

// middleware auth
const auth = (req, res, next) => {
  let token = req.headers.authorization || '';
  if (token.startsWith('Bearer ')) {
    token = token.substring(7);
  }

  if (!token) {
    res.status(401).json({
      success: false,
      message: 'Unauthorized'
    });
  } else {
    verify(token, 'user', (err, decoded) => {
      if (err) {
        res.status(401).json({
          success: false,
          message: 'Unauthorized'
        });
      }
      req.decoded = decoded;
      next();
    });
  }
}

module.exports = {
  signToken,
  auth,
};