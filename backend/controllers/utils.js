const jwt = require("jsonwebtoken");
const createAccessToken = (email) => {
  const token = jwt.sign(email, process.env.ACCESS_TOKEN_SIGNATURE, {
    expiresIn: "15m",
    algorithm: "HS256",
    issuer: "sahitya neupane",
  });

  return token;
};
const createRefreshToken = (email) => {
  const token = jwt.sign(email, process.env.REFRESH_TOKEN_SIGNATURE, {
    expiresIn: "1d",
    algorithm: "HS256",
    issuer: "sahitya neupane",
  });
  return token;
};

module.exports = { createAccessToken, createRefreshToken };
