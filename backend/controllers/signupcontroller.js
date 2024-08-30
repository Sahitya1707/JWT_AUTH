const User = require("../models/userModel");
const signupController = (req, res, next) => {
  console.log(User);
  console.log(req.body);
  const newUser = new User(req.body);
  newUser
    .save()
    .then((success) => {
      return res.status(200).json({ message: "User has been saved" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = signupController;
