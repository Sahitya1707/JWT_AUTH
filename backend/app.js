const express = require("express");
const connectDB = require("./config/db");
const loginRoute = require("./route/loginSignupRoute");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
const cors = require("cors");

const port = process.env.PORT || 301;

// this has been used so to allow the server side to put the cookie in the frontend site
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, // Allow credentials
};

app.use(cors(corsOptions));
app.use(express.json());
connectDB();
// cookie parser is used for handling the cookies
app.use(cookieParser());
app.listen(port, () => {
  console.log(`App running in ${port}`);
});

app.use("/", loginRoute);
