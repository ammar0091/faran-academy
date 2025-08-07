const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  class: { type: String, required: true },
  dob: String,
  rollNo: String,
  address: String,
  parentName: String,
  phone: String
}, { timestamps: true });

module.exports = mongoose.model('Student', StudentSchema);
