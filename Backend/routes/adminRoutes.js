// routes/adminRoutes.js
const express = require("express");
const { registerAdmin, loginAdmin, getDashboardData } = require("../controllers/adminController");

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Admin route working");
});

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.get("/dashboard", getDashboardData);

module.exports = router;
