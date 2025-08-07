const mongoose = require('mongoose');
const EnrollmentSchema = new mongoose.Schema({
  name: String,
  dob: String,
  class: String,
  session: String,
  parent: String,
  phone: String,
  email: String,
  address: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Enrollment', EnrollmentSchema);
