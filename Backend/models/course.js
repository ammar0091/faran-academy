const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  instructor: { type: String, required: true },
  img: { type: String, required: true }, 
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Course", courseSchema);
