import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Stack,
  Divider
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PlaceIcon from "@mui/icons-material/Place";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post("http://localhost:5000/api/contact", form);
      setSuccess(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        message: ""
      });

      setTimeout(() => setSuccess(false), 4000);
    } catch (err) {
      console.error(err);
      setError("Failed to send message. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        py: { xs: 4, md: 6 },
        px: { xs: 3, md: 10 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 6, md: 10 },
        alignItems: "flex-start"
      }}
    >

      {/* LEFT SIDE — TEXT SECTION (Enroll Style, No Alerts) */}
      <Box flex={1} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>

        <Typography
          variant="overline"
          color="primary"
          fontWeight={700}
          letterSpacing={2}
          mb={2}
        >
          Contact Us
        </Typography>

        <Typography variant="h4" fontWeight={700} color="text.primary" mb={2}>
          We’re Here to Assist You
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ lineHeight: 1.8 }}
          mb={2}
        >
          Have questions or need information regarding our school?
          Our team is ready to guide you and provide the help you need.
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ lineHeight: 1.8 }}
          mb={4}
        >
          Get in touch using the details below or fill in the message form.
          We respond as quickly as possible.
        </Typography>

        {/* CONTACT DETAILS */}
        <Stack spacing={3}>

          <Stack direction="row" alignItems="center" gap={2}>
            <MailOutlineIcon fontSize="large" sx={{ color: "#005baa" }} />
            <Box>
              <Typography fontWeight={700} fontSize={16}>Email & Website</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: 15, md: 16 }, lineHeight: 1.8 }}>
                info@faranacademy.edu
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: 15, md: 16 }, lineHeight: 1.8 }}>
                www.faranacademy.edu
              </Typography>
            </Box>
          </Stack>

          <Divider />

          <Stack direction="row" alignItems="center" gap={2}>
            <PhoneIphoneIcon fontSize="large" sx={{ color: "#005baa" }} />
            <Box>
              <Typography fontWeight={700} fontSize={16}>Contact Numbers</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: 15, md: 16 }, lineHeight: 1.8 }}>
                +91-8860917726
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: 15, md: 16 }, lineHeight: 1.8 }}>
                +91-7352391764
              </Typography>
            </Box>
          </Stack>

          <Divider />

          <Stack direction="row" alignItems="center" gap={2}>
            <PlaceIcon fontSize="large" sx={{ color: "#005baa" }} />
            <Box>
              <Typography fontWeight={700} fontSize={16}>Address</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: 15, md: 16 }, lineHeight: 1.8 }}>
                Khankhanapur Panchu, Hisua - 805103, Bihar, India
              </Typography>
            </Box>
          </Stack>

        </Stack>

      </Box>

      {/* RIGHT SIDE — FORM ONLY */}
      <Box flex={1} sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: {  xs: "320px", md: "480px" },
            px: { xs: 1, md: 0 },
            display: "flex",
            flexDirection: "column",
            gap: 3
          }}
        >
          {success && (
            <Box
              sx={{
                bgcolor: "#e8ffe8",
                color: "#1b7c1b",
                py: 1.5,
                px: 2,
                borderRadius: 2,
                fontWeight: 600,
                textAlign: "center",
                border: "1px solid #c4eac4"
              }}
            >
              Your message has been sent successfully!
            </Box>
          )}

          {error && (
            <Box
              sx={{
                bgcolor: "#ffe8e8",
                color: "#cc2f2f",
                py: 1.5,
                px: 2,
                borderRadius: 2,
                fontWeight: 600,
                textAlign: "center",
                border: "1px solid #f2c0c0"
              }}
            >
              {error}
            </Box>
          )}

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Divider sx={{ fontWeight: 700 }}>Send Message</Divider>

            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <TextField
              fullWidth
              type="email"
              label="Email Address"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              multiline
              rows={4}
              label="Your Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
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
                fontSize: 16
              }}
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
