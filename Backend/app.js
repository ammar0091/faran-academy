require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import routes
const studentRoutes = require('./routes/student');
const facultyRoutes = require('./routes/faculty');
const eventRoutes = require('./routes/events');
const notificationRoutes = require('./routes/Notification');
const enrollmentRoutes = require('./routes/enrollment');
const contactRoutes = require('./routes/contact');
// const admissionFormRoute = require('./routes/admissionForm');
const adminRoutes = require("./routes/adminRoutes");
const courseRoutes = require("./routes/course");


const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log(" Connected to MongoDB"))
.catch((err) => {
  console.error(" MongoDB connection error:", err);
  process.exit(1);
});

// Mount routes
app.use('/api/student', studentRoutes);
app.use('/api/faculty', facultyRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/enroll', enrollmentRoutes);
app.use('/api/contact', contactRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/courses", courseRoutes);

// Root route for health check
app.get("/", (req, res) => {
  res.send(" Faran Academy Backend API is running.");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
