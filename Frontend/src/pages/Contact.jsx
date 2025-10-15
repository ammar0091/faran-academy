import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper, Stack, Divider, Alert } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PlaceIcon from "@mui/icons-material/Place";
import axios from "axios"; 

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.post("http://localhost:5000/api/contact", form); 
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error(err);
      setError("Failed to send message. Please try again.");
    }
  };

  return (
    <Box sx={{
      bgcolor: "#f4f7fe",
      minHeight: "calc(100vh - 200px)",
      py: { xs: 2, md: 6 },
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Paper elevation={2} sx={{ maxWidth: 1050, width: "100%", borderRadius: 4, overflow: "hidden", p: { xs: 2, md: 0 } }}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, width: "100%" }}>
          {/* Left info */}
          <Box sx={{
            flex: 1, bgcolor: "#f7fafd", p: { xs: 3, md: 5 }, display: "flex",
            flexDirection: "column", gap: 3, borderRight: { md: "2px solid #eef2f7" }
          }}>
            <Stack direction="row" alignItems="center" gap={2}>
              <MailOutlineIcon fontSize="large" sx={{ color: "#005baa" }} />
              <Stack>
                <Typography fontWeight={700} fontSize={16}>Mail & Website</Typography>
                <Typography variant="body2" color="text.secondary">info@faranacademy.edu</Typography>
                <Typography variant="body2" color="text.secondary">www.faranacademy.edu</Typography>
              </Stack>
            </Stack>
            <Divider />
            <Stack direction="row" alignItems="center" gap={2}>
              <PhoneIphoneIcon fontSize="large" sx={{ color: "#005baa" }} />
              <Stack>
                <Typography fontWeight={700} fontSize={16}>Contact</Typography>
                <Typography variant="body2" color="text.secondary">+91-8860917726</Typography>
                <Typography variant="body2" color="text.secondary">+91-7352391764</Typography>
              </Stack>
            </Stack>
            <Divider />
            <Stack direction="row" alignItems="center" gap={2}>
              <PlaceIcon fontSize="large" sx={{ color: "#005baa" }} />
              <Stack>
                <Typography fontWeight={700} fontSize={16}>Address</Typography>
                <Typography variant="body2" color="text.secondary">
                  Khankhanapur Panchu, Hisua - 805103, Bihar, India
                </Typography>
              </Stack>
            </Stack>
          </Box>
          {/* Right form */}
          <Box sx={{ flex: 1, p: { xs: 3, md: 5 }, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 2 }}
            component="form" onSubmit={handleSubmit}>
            <Typography fontWeight={700} fontSize={28} mb={2} color="#005baa" align="center">Get in Touch</Typography>
            <Stack spacing={2} sx={{ width: "100%" }}>
              <TextField fullWidth label="Full Name" name="name" value={form.name} onChange={handleChange} required />
              <TextField fullWidth label="Email" name="email" value={form.email} onChange={handleChange} required type="email" />
              <TextField fullWidth label="Phone" name="phone" value={form.phone} onChange={handleChange} type="tel" />
              <TextField fullWidth label="Message" name="message" value={form.message} onChange={handleChange} multiline rows={4} required />
              <Button type="submit" variant="contained" size="large" sx={{
                bgcolor: "#005baa", color: "#fff", px: 4, borderRadius: 2, fontWeight: 700, fontSize: 16
              }}>Submit</Button>
              {success && <Alert color="success" sx={{ mt: 2 }}>Thank you! Your message has been sent.</Alert>}
              {error && <Alert color="error" sx={{ mt: 2 }}>{error}</Alert>}
            </Stack>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
