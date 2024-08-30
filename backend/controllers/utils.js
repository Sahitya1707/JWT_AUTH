const jwt = require("jsonwebtoken");
const createAccessToken = (user) => {
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SIGNATURE, {
    expiresIn: "15m",
    algorithm: "HS256",
    issuer: "sahitya neupane",
  });

  return token;
};
const createRefreshToken = (user) => {
  const token = jwt.sign(user, process.env.REFRESH_TOKEN_SIGNATURE, {
    expiresIn: "1d",
    algorithm: "HS256",
    issuer: "sahitya neupane",
  });
  return token;
};

module.exports = { createAccessToken, createRefreshToken };
