const express = require('express');
const router = express.Router();
const Student = require('../models/Student'); 

// GET all students
router.get('/', async (req, res) => {
  const data = await Student.find();
  res.json(data);
});

// POST a new student
router.post('/', async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.status(201).json(student);
});

// PUT update student
router.put('/:id', async (req, res) => {
  const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE student
router.delete('/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
