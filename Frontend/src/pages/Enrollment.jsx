import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Grid,
  Typography,
  Divider,
  MenuItem,
  Alert,
  Stack,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import BadgeIcon from "@mui/icons-material/Badge";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import axios from "axios";

const classOptions = [
  "Nursery", "KG", "I", "II", "III", "IV", "V", "VI", "VII",
];

export default function Enroll() {
  const [form, setForm] = useState({
    name: "",
    dob: "",
    class: "",
    session: "",
    parent: "",
    phone: "",
    email: "",
    address: ""
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.post("http://localhost:5000/api/enroll", form); // backend API
      setSuccess(true);
      setForm({
        name: "",
        dob: "",
        class: "",
        session: "",
        parent: "",
        phone: "",
        email: "",
        address: ""
      });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error(err);
      setError("Failed to submit. Please try again later.");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        bgcolor: "linear-gradient(120deg, #eef4fa 80%, #eef4fd 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: { xs: 1, md: 0 }
      }}
    >
      <Paper
        elevation={8}
        sx={{
          width: { xs: "98vw", sm: "90vw", md: "65vw", lg: "52vw" },
          maxWidth: 880,
          borderRadius: 4,
          p: { xs: 2, sm: 3.5, md: 5 },
          bgcolor: "#fff",
        }}
      >
        {/* Top Info */}
        <Stack spacing={2} mb={3}>
          <Typography
            variant="h4"
            fontWeight={800}
            color="primary"
            sx={{ display: "flex", alignItems: "center", gap: 1, letterSpacing: 1 }}
          >
            <SchoolIcon sx={{ fontSize: 38, color: "#ffd43b" }} /> Enroll at Faran Academy
          </Typography>
          <Alert icon={<InfoOutlinedIcon fontSize="large" />} severity="info" sx={{ bgcolor: "#e8f4ff", color: "#165099", fontWeight: 500, borderRadius: 2, fontSize: 17, py: 1.4, mb: 0 }}>
            Our admissions are now open! Complete the form below, and our team will contact you soon.
          </Alert>
          <Alert icon={<WarningAmberOutlinedIcon />} severity="warning" sx={{ bgcolor: "#fffbe6", color: "#ea9800", fontWeight: 500, borderRadius: 2, fontSize: 15, mb: 0 }}>
            Please double-check all details. Submit only one application per student. Call <b>+91-8860917726</b> for queries.
          </Alert>
        </Stack>

        {/* Success */}
        {success && (
          <Alert icon={<CheckCircleOutlineIcon fontSize="large" />} severity="success" sx={{ mb: 2, bgcolor: "#e6fbe8", color: "#34883b", fontWeight: 600, fontSize: 18, borderRadius: 2 }}>
            Thank you! Your application has been received.
          </Alert>
        )}

         {error && (
          <Alert icon={<CheckCircleOutlineIcon fontSize="large" />} severity="success" sx={{ mb: 2, bgcolor: "#e6fbe8", color: "#9e1111ff", fontWeight: 600, fontSize: 18, borderRadius: 2 }}>
             failed to send!
          </Alert>
        )}

        {/* Form */}
        <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth label="Student Full Name" name="name"
                value={form.name} onChange={handleChange} required
                InputProps={{ startAdornment: <PersonIcon sx={{ mr: 1, color: "#005baa" }} /> }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth label="Date of Birth" name="dob" type="date"
                value={form.dob} onChange={handleChange} required
                InputLabelProps={{ shrink: true }}
                InputProps={{ startAdornment: <CalendarMonthIcon sx={{ mr: 1, color: "#005baa" }} /> }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select fullWidth label="Admission to Class" name="class"
                value={form.class} onChange={handleChange} required
                InputProps={{ startAdornment: <BadgeIcon sx={{ mr: 1, color: "#005baa" }} /> }}
              >
                {classOptions.map((cls) => <MenuItem key={cls} value={cls}>{cls}</MenuItem>)}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth label="Session/Year" name="session"
                value={form.session} onChange={handleChange} required
                placeholder="2025-2026"
              />
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ my: 2, fontSize: 17, color: "#0c3877" }}>Parent / Guardian Information</Divider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth label="Parent/Guardian Name" name="parent"
                value={form.parent} onChange={handleChange} required
                InputProps={{ startAdornment: <HomeIcon sx={{ mr: 1, color: "#005baa" }} /> }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth label="Phone Number" name="phone"
                value={form.phone} onChange={handleChange} required
                type="tel"
                InputProps={{ startAdornment: <ContactPhoneIcon sx={{ mr: 1, color: "#005baa" }} /> }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth label="Email Address" name="email"
                value={form.email} onChange={handleChange} type="email"
                InputProps={{ startAdornment: <EmailIcon sx={{ mr: 1, color: "#005baa" }} /> }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth label="Home Address" name="address"
                value={form.address} onChange={handleChange} multiline rows={2}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" fullWidth variant="contained" size="large" sx={{
                fontWeight: 700, borderRadius: 2.3, mt: 2, py: 1.24,
                bgcolor: "#005baa", color: "#fff", fontSize: 18,
                boxShadow: "0 4px 18px #005baa1d",
                "&:hover": { bgcolor: "#15325c" }
              }}>
                Submit Application
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Typography sx={{ color: "#456688", textAlign: "center", fontSize: 15.2, mt: 4 }}>
          For walk-in admissions, visit our Admin Block (8 AM–2 PM, working days).
        </Typography>
      </Paper>
    </Box>
  );
}
