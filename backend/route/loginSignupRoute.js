const express = require("express");
const signupController = require("../controllers/signupcontroller");
const router = express.Router();

router.post("/signup", signupController);
router.post("/login", (req, res) => {
  console.log(req.body);
});

module.exports = router;
