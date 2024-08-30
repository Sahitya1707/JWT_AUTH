const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  console.log(req.body);
  console.log(res);
});

module.exports = router;
