const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    country: { type: String, default: "IND" },
    currency: { type: String, default: "INR" },
  },
  { timestamps: true, versionKey: false }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
