const Contact = require('../models/Contact');

// Submit new contact message
exports.submitContact = async (req, res) => {
  try {
    const message = new Contact(req.body);
    await message.save();
    res.status(201).json({ message: "Contact message received!" });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Failed to send message." });
  }
};

// Fetch all contact messages (for admin)
exports.getAllContacts = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch messages." });
  }
};
