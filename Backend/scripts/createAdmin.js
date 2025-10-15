const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("../models/admin");

mongoose.connect("mongodb://localhost:27017/faran", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const createAdmin = async () => {
  const hashedPassword = await bcrypt.hash("admin123", 10);

  const admin = new Admin({
    email: "admin@example.com",
    password: hashedPassword,
    role: "admin",
  });

  await admin.save();
  console.log("Admin created successfully");
  mongoose.disconnect();
};

createAdmin();
