const express = require('express');
const router = express.Router();
const Enrollment = require('../models/Enrollment');

// Submit new enrollment
router.post('/', async (req, res) => {
  const enroll = new Enrollment(req.body);
  await enroll.save();
  res.status(201).json({ message: "Enrollment submitted!" });
});
// (Optional: fetch all enrollments for admin)
router.get('/', async (req, res) => {
  res.json(await Enrollment.find());
});

module.exports = router;
