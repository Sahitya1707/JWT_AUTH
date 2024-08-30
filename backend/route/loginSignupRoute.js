const express = require("express");
const signupController = require("../controllers/signupcontroller");
const router = express.Router();

router.post("/signup", signupController);

module.exports = router;
