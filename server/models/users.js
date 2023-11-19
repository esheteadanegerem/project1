const mongoose = require("mongoose");
const userScema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  filepath: { type: String },
  createdAt: { type: Date, default: Date.now },
  price: { type: String },
  agreement: { type: String },
  role: { type: String, default: "user" },
});
const UserModel = mongoose.model("assigns", userScema);
module.exports = UserModel;
