const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
  try {
    const message = new Contact(req.body);
    await message.save();
    res.status(201).json({ message: "Contact message received!" });
  } catch (err) {
    res.status(400).json({ error: "Failed to send message." });
  }
});

module.exports = router;