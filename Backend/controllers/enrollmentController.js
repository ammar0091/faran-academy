const Enrollment = require('../models/Enrollment');

// Submit new enrollment
exports.submitEnrollment = async (req, res) => {
  try {
    const enroll = new Enrollment(req.body);
    await enroll.save();
    res.status(201).json({ message: "Enrollment submitted!" });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Failed to submit enrollment." });
  }
};

// Fetch all enrollments (for admin)
exports.getAllEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find().sort({ createdAt: -1 });
    res.json(enrollments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch enrollments." });
  }
};
