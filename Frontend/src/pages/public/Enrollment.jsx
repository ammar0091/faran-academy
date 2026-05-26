import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  Alert,
  Divider,
  Stack,
} from "@mui/material";
import {
  Person as PersonIcon,
  CalendarMonth as CalendarMonthIcon,
  ContactPhone as ContactPhoneIcon,
  Home as HomeIcon,
  Email as EmailIcon,
  Badge as BadgeIcon,
  InfoOutlined as InfoOutlinedIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  WarningAmberOutlined as WarningAmberOutlinedIcon,
} from "@mui/icons-material";
import { submitEnrollment } from "../../utils/api";
import { classOptions } from "../../constants/enrollment/classOptions";

export default function Enroll() {
  const [form, setForm] = useState({
    name: "",
    dob: "",
    class: "",
    session: "",
    parent: "",
    phone: "",
    email: "",
    address: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await submitEnrollment(form);
      setSuccess(true);
      setForm({
        name: "",
        dob: "",
        class: "",
        session: "",
        parent: "",
        phone: "",
        email: "",
        address: "",
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
        width: "100%",
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 10 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 6, md: 10 },
        alignItems: "flex-start",

      }}
    >
      {/* LEFT SIDE — Text */}
      <Box flex={1} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Typography variant="overline" color="primary" fontWeight={700} letterSpacing={2} mb={2}>
          Admissions Open
        </Typography>
        <Typography variant="h4" fontWeight={700} color="text.primary" mb={3}>
          Join Faran Academy
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ lineHeight: 1.8 }}>
          Faran Academy is dedicated to nurturing students through rigorous academics, creative arts, leadership development, and global engagement.
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={4} sx={{ lineHeight: 1.8 }}>
          Fill in the enrollment form and take the first step towards a bright future for your child.
        </Typography>

        <Stack spacing={2}>
          <Alert icon={<InfoOutlinedIcon />} severity="info" sx={{ bgcolor: "#e8f4ff", color: "#165099", fontWeight: 500 }}>
            Our admissions are open! Complete the form and our team will contact you.
          </Alert>
          <Alert icon={<WarningAmberOutlinedIcon />} severity="warning" sx={{ bgcolor: "#fffbe6", color: "#ea9800", fontWeight: 500 }}>
            Please double-check all details. Submit only one application per student. Call <b>+91-8860917726</b> for queries.
          </Alert>
        </Stack>
      </Box>

      {/* RIGHT SIDE — Form */}
      <Box
        flex={1}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: {  xs: "320px", md: "480px" },
            px: { xs: 1, md: 0 },
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {success && (
            <Alert
              icon={<CheckCircleOutlineIcon />}
              severity="success"
              sx={{ mb: 1 }}
            >
              Your application has been submitted successfully!
            </Alert>
          )}
          {error && <Alert severity="error">{error}</Alert>}

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
            }}
          >
            {/* ---------------- STUDENT DETAILS ---------------- */}
            <Divider sx={{ fontWeight: 700 }}>Student Details</Divider>

            {/* Name */}
            <TextField
              fullWidth
              label="Student Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              InputProps={{
                startAdornment: <PersonIcon sx={{ mr: 1, color: "#005baa" }} />,
              }}
            />

            {/* DOB + CLASS */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
              }}
            >
              <TextField
                fullWidth
                type="date"
                label="Date of Birth"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
                InputProps={{
                  startAdornment: (
                    <CalendarMonthIcon sx={{ mr: 1, color: "#005baa" }} />
                  ),
                }}
              />

              <TextField
                select
                fullWidth
                label="Admission to Class"
                name="class"
                value={form.class}
                onChange={handleChange}
                required
                InputProps={{
                  startAdornment: <BadgeIcon sx={{ mr: 1, color: "#005baa" }} />,
                }}
              >
                {classOptions.map((cls) => (
                  <MenuItem key={cls} value={cls}>
                    {cls}
                  </MenuItem>
                ))}
              </TextField>
            </Box>

            {/* Session */}
            <TextField
              fullWidth
              label="Session / Year"
              name="session"
              value={form.session}
              onChange={handleChange}
              required
              placeholder="2025-2026"
            />

            {/* ---------------- GUARDIAN ---------------- */}
            <Divider sx={{ fontWeight: 700 }}>Parent / Guardian Details</Divider>

            <TextField
              fullWidth
              label="Parent / Guardian Name"
              name="parent"
              value={form.parent}
              onChange={handleChange}
              required
              InputProps={{
                startAdornment: <HomeIcon sx={{ mr: 1, color: "#005baa" }} />,
              }}
            />

            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              InputProps={{
                startAdornment: (
                  <ContactPhoneIcon sx={{ mr: 1, color: "#005baa" }} />
                ),
              }}
            />

            <TextField
              fullWidth
              label="Email Address"
              name="email"
              value={form.email}
              onChange={handleChange}
              InputProps={{
                startAdornment: <EmailIcon sx={{ mr: 1, color: "#005baa" }} />,
              }}
            />

            <TextField
              fullWidth
              label="Home Address"
              name="address"
              value={form.address}
              onChange={handleChange}
              multiline
              rows={2}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                bgcolor: "#005baa",
                color: "#fff",
                fontWeight: 700,
                py: 1.4,
                borderRadius: 2,
                fontSize: 16,
              }}
            >
              Submit Application
            </Button>
          </Box>
        </Box>
      </Box>

    </Box>
  );
}
