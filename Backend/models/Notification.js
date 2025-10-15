const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  message: { type: String, required: true },
  pushDate: { type: Date, default: Date.now },
  audience: { type: String, default: 'all' }, // e.g., all, students, faculty
  seenBy: [{ type: String }] // IDs or usernames who saw it (optional)
}, { timestamps: true });

module.exports = mongoose.model('Notification', NotificationSchema);
