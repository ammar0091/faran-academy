const express = require("express");
const router = express.Router();
const Course = require("../models/course");

// GET all courses
router.get("/", async (req, res) => {
  try {
    const data = await Course.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new course
router.post("/", async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT update course
router.put("/:id", async (req, res) => {
  try {
    const updated = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE course
router.delete("/:id", async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
