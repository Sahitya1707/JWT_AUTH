const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
const cors = require("cors");

const port = process.env.PORT || 301;

app.use(cors());
app.use(express.json());
connectDB();
app.listen(port, () => {
  console.log(`App running in ${port}`);
});
