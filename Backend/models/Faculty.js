const mongoose = require('mongoose');

const FacultySchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String },      // Example: "Math Teacher"
  subject: { type: String },
  email: { type: String },
  phone: { type: String },
  profileImg: { type: String } // Optional profile photo URL
}, { timestamps: true });

module.exports = mongoose.model('Faculty', FacultySchema);
