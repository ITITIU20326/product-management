const mongoose = require("mongoose");

module.exports.connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("db connected");
  } catch (err) {
    console.log("connection failed");
  }
};
