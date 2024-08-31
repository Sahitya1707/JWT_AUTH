const jwt = require("jsonwebtoken");
const { createAccessToken } = require("../controllers/utils");

const authUser = (req, res) => {
  console.log(req.cookies);
  const accessToken = req.cookies["accessToken"];
  const refreshToken = req.cookies["refreshToken"];

  //   checking if both token are not available
  if (!accessToken && !refreshToken) {
    return res.status(401).send("Access Denied. No token provided");
  }
  try {
    const decodeAccessToken = jwt.verify(
      accessToken,
      process.env.ACCESS_TOKEN_SIGNATURE
    );
    console.log(decodeAccessToken);
  } catch (err) {
    if (!accessToken) {
      console.log("No access token provided");
    }
    try {
      const decodeRefreshToken = jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SIGNATURE
      );

      const { email } = decodeRefreshToken;

      const accessToken = createAccessToken({ email });

      res.cookie("accessToken", accessToken, {
        secure: false,

        httpOnly: true,
        sameSite: "", // Helps prevent CSRF attacks
        // making it valid for 15 min
        expires: new Date(Date.now() + 15 * 60 * 1000), //
      });
      res.json({
        message: "User Verifies",
        email: email,
        conditon: "Access Token Refresh",
      });
    } catch (err) {
      console.log(err);
    }
  }
};

module.exports = authUser;
