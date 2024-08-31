const express = require("express");
const signupController = require("../controllers/signupController");
const loginController = require("../controllers/loginController");
const authUser = require("../middleware/authUser");
const router = express.Router();

router.post("/signup", signupController);
router.post("/login", loginController);
router.get("/verify", authUser);

module.exports = router;
