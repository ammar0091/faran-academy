const express = require('express');
const router = express.Router();
const Notification = require('../models/Notification');

router.get('/', async (req, res) => {
  res.json(await Notification.find().sort({ pushDate: -1 }));
});
router.post('/', async (req, res) => {
  const notification = new Notification(req.body);
  await notification.save();
  res.status(201).json(notification);
});
router.put('/:id', async (req, res) => {
  const updated = await Notification.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});
router.delete('/:id', async (req, res) => {
  await Notification.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
