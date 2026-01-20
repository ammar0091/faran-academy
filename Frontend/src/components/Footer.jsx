import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../assets/hero-logo.png";

// --- UI Tokens (clean & minimal) ---
const ui = {
  bg: "#0a101b",
  text: "#ffffff",
  subText: "#c7d8f5",
  highlight: "#ffe678",
  iconBg: "#1b3b60",
  border: "#ffffff22",
};

// Navigation links
const navLinks = [
  { label: "History", to: "/history" },
  { label: "News and Events", to: "/newsevents" },
  { label: "Notifications", to: "/notifications" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
];

// Social Icons Component
const SocialIcons = () => {
  const icons = [
    { icon: FaFacebookF, link: "#" },
    { icon: FaTwitter, link: "#" },
    { icon: FaInstagram, link: "#" },
    { icon: FaLinkedinIn, link: "#" },
  ];

  return (
    <Stack direction="row" spacing={2}>
      {icons.map(({ icon: Icon, link }, i) => (
        <IconButton
          key={i}
          component="a"
          href={link}
          sx={{
            bgcolor: ui.iconBg,
            color: ui.text,
            p: 1,
            borderRadius: "8px",
            transition: "0.25s",
            "&:hover": {
              bgcolor: ui.text,
              color: ui.iconBg,
              transform: "scale(1.12)",
            },
          }}
        >
          <Icon size={18} />
        </IconButton>
      ))}
    </Stack>
  );
};

// Link List Component
const LinkList = ({ links }) => (
  <Stack spacing={1}>
    {links.map(({ label, to }) => (
      <RouterLink
        key={to}
        to={to}
        style={{
          color: ui.text,
          fontSize: "15.5px",
          textDecoration: "none",
          transition: "0.2s",
        }}
        onMouseOver={(e) => (e.target.style.color = ui.highlight)}
        onMouseOut={(e) => (e.target.style.color = ui.text)}
      >
        ▸ {label}
      </RouterLink>
    ))}
  </Stack>
);

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: ui.bg, color: ui.text, pt: 8, pb: 3, mt: 10 }}>
      <Container maxWidth="xl">

        {/* --- TOP GRID (Positions unchanged) --- */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.3fr 1fr 1.4fr" },
            gap: 5,
            px: { xs: 2, md: 6 },
          }}
        >
          {/* --- Left: Info Section (same position) --- */}
          <Box>
            <Box component="img" src={logo} alt="Logo" sx={{ width: 170, mb: 2 }} />

            <Typography sx={{ color: ui.subText, fontSize: 15.5, mb: 2, lineHeight: 1.6 }}>
              Khankhanapur Panchu <br />
              Hisua - 805103 <br />
              Bihar (India)
            </Typography>

            <Stack spacing={0.7}>
              <a href="tel:+91-8860917726" style={{ color: ui.text, fontSize: 15 }}>+91-8860917726</a>
              <a href="tel:+91-7352391764" style={{ color: ui.text, fontSize: 15 }}>+91-7352391764</a>
              <a href="mailto:principal@Faran.com" style={{ color: ui.text, fontSize: 15 }}>principal@Faran.com</a>
            </Stack>
          </Box>

          {/* --- Middle: Quick Links (same position) --- */}
          <Box>
            <Typography sx={{ fontSize: 18, color: ui.highlight, mb: 2, fontWeight: 600 }}>
              QUICK LINKS
            </Typography>
            <LinkList links={navLinks} />
          </Box>

          {/* --- Right: Map (same position) --- */}
          <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
            <Box
              sx={{
                border: `1.5px solid ${ui.highlight}55`,
                width: { xs: "100%", sm: 350, md: 420 },
                height: { xs: 240, sm: 270, md: 300 },
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 3px 12px rgba(0,0,0,0.3)",
              }}
            >
              <iframe
                title="Location Map"
                src="https://maps.google.com/maps?q=Faran%20Academy%20Hisua&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0 }}
              />
            </Box>
          </Box>
        </Box>

        {/* --- Divider --- */}
        <Divider sx={{ my: 3, borderColor: ui.border }} />

        {/* --- Bottom Row (same alignment) --- */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 3,
            px: { xs: 2, md: 6 },
          }}
        >
          <Typography fontSize={14.5} color="#dddddd">
            © {new Date().getFullYear()} All Rights Reserved.
          </Typography>

          <SocialIcons />
        </Box>
      </Container>
    </Box>
  );
}
