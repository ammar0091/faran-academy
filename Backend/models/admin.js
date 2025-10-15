// models/admin.js
const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, "Password is required"]
  }
}, { timestamps: true });

module.exports = mongoose.model("Admin", adminSchema);
