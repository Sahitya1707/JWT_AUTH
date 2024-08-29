const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGODB_CONNECTION, {})
    .then(() => {
      console.log("Mongoose has been connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
