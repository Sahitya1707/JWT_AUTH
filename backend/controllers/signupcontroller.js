const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const signupController = async (req, res, next) => {
  const { email, password } = req.body;
  const salt = await bcrypt.genSaltSync(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  console.log(req.body);
  const newUser = new User({
    email: email,
    password: hashedPassword,
  });
  newUser
    .save()
    .then((success) => {
      return res.status(200).json({ message: "User has been saved" });
    })
    .catch((err) => {
      if (err.errorResponse.code === 11000) {
        console.log("dublicate");
        return res.status(400).json({ message: "User Already Detected" });
      }
      console.log(err);
    });
};

module.exports = signupController;
