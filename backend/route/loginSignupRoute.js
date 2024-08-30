const express = require("express");
const signupController = require("../controllers/signupController");
const loginController = require("../controllers/loginController");
const router = express.Router();

router.post("/signup", signupController);
router.post("/login", loginController);

module.exports = router;
