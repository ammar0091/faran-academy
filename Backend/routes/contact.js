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

router.delete('/:id', async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Contact deleted!" });
  } catch (err) {
    res.status(400).json({ error: "Failed to delete contact." });
  }
});

router.get('/', async (req, res) => {
  res.json(await Contact.find());
});
module.exports = router;