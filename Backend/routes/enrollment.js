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


router.delete('/:id', async (req, res) => {
  try {
    await Enrollment.findByIdAndDelete(req.params.id);
    res.json({ message: "Enrollment deleted!" });
  } catch (err) {
    res.status(400).json({ error: "Failed to delete enrollment." });
  }
});

module.exports = router;
