const { sign, verify } = require("jsonwebtoken");
require('dotenv').config();

const createTokens = (user) => {
  const accessToken = sign(
    { username: user.username, id: user.id },
    process.env.JWT_SECRET,
    {expiresIn: 300000}
  );

  return accessToken;
};

const validateToken = (req, res, next) => {
  const accessToken = req.headers.Cookie;

  if (!accessToken)
    return res.status(400).json({ error: "User not Authenticated!" });

  try {
    const validToken = verify(accessToken, process.env.JWT_SECRET);
    if (validToken) {
      req.authenticated = true;
      return next();
    }
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

module.exports = { createTokens, validateToken };