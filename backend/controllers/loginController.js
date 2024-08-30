const { createAccessToken } = require("./utils");

const loginController = (req, res, next) => {
  console.log(req.body);
  const user = req.body;
  const accessToken = createAccessToken(user);
};

module.exports = loginController;
