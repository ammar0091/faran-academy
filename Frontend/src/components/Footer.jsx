import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  Link as MuiLink,
  Divider,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from '../assets/hero-logo.png';

// Edit your navigation links here
const navLinks = [
  { label: " History", to: "/history" },
  { label: "News and Events", to: "/newsevents" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0a101bff",
        color: "#fff",
        pt: { xs: 4, md: 6 },
        pb: 0,
        mt: 8,
        fontFamily: "Montserrat,Roboto,sans-serif",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 1, sm: 4, md: 8 } }}>
        {/* Main Flex Container (Info + Links, then Map) */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 0 },
            mx : { xs: 4, md: 6 },
            justifyContent: "space-between",
          }}
        >
          {/* Left: Info + Links in a flex row */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              flex: 2,
              gap: { xs: 4, sm: 6, md: 12 },
              mb: { xs: 4, md: 0 },
            }}
          >
            {/* Info Box */}
            <Box
              sx={{
                minWidth: 175,
                mr: { xs: 0, sm: 4, md: 6 },
                mb: { xs: 2, sm: 0 },
                alignItems: { xs: "center", sm: "flex-start" },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Box
                  component="img"
                  src={logo}
                  alt="Faran Academy"
                  sx={{ width: 180, height: 55, mr: 1.3 }}
                />
                
              </Box>
              <Typography
                sx={{
                  fontSize: 14.5,
                  color: "#cae2fa",
                  mb: 1.2,
                  lineHeight: 1.65,
                }}
              >
                Khankhanapur panchu<br />
                Hisua - 805103<br />
                Bihar [India]
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mb: 0.5 }}>
                 <MuiLink
                href="callto:+91-8860917726"
                color="#ffffffff"
                fontSize={15}
                underline="hover"
              >
               +91-8860917726
              </MuiLink>

               <MuiLink
                href="callto:+91-7352391764"
                color="#ffffffff"
                fontSize={15}
                underline="hover"
              >
               +91-7352391764
              </MuiLink>
               
               
              </Stack>
              <MuiLink
                href="mailto:principal@Faran.com"
                color="#ffffffff"
                fontSize={15}
                underline="hover"
                sx={{ fontWeight: 300 }}
              >
                principal@Faran.com
              </MuiLink>
            </Box>
            
            {/* Links Box */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: { xs: "flex-start", sm: "flex-start" },
                minWidth: 140,
              }}
            >
              <Typography
                variant="h6"
                fontWeight={400}
                mb={2}
                color="#ffe678"
                sx={{ letterSpacing: 1, fontSize: 18, textAlign: { xs: "center", sm: "left" } }}
              >
                QUICK LINKS
              </Typography>
              <Stack spacing={1} alignItems={{ xs: "flex-start", sm: "flex-start" }}>
                {navLinks.map(({ label, to }) => (
                  <MuiLink
                    key={to}
                    component={RouterLink}
                    to={to}
                    underline="hover"
                    color="#fff"
                    sx={{
                      fontSize: 15.5,
                      fontWeight: 400,
                      borderRadius: 1,
                      transition: "background 0.11s, color 0.11s",
                      px: 0.5,
                      py: 0.1,
                      
                      textAlign: { xs: "left", sm: "left" }
                    }}
                  >
                    &rsaquo; {label}
                  </MuiLink>
                ))}
              </Stack>
            </Box>
          </Box>
          {/* Right: Map box */}
          <Box
            sx={{
              flex: 1.55,
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              alignItems: "center",
              pt: { xs: 2, md: 0 }
            }}
          >
            <Box
              sx={{
                border: "1.5px solid #ffe67855",
                borderRadius: 3.5,
                overflow: "hidden",
                bgcolor: "#0f244a",
                width: { xs: "100%", sm: 340, md: 430 },
                minHeight: { xs: 220, sm: 260, md: 300 },
                boxShadow: "0 5px 30px 0 #0002",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <iframe
                title="Faran Academy Location"
                src="https://maps.google.com/maps?q=Faran%20Academy%20Hisua&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="300"
                style={{ border: 0, display: "block" }}
                allowFullScreen=""
                loading="lazy"
              />
            </Box>
          </Box>
        </Box>
        {/* Divider and Social/Copy Row */}
        <Divider sx={{ mt: { xs: 5, md: 6 }, mb: 2.2, borderColor: "#fff3", opacity: 0.45 }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            py: 1.2,
            color: "#fff",
            gap: 3,
          }}
        >
          <Typography fontSize={15.5} color="#eee" sx={{ textAlign: { xs: "center", sm: "left" } }}>
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            <IconButton size="small" sx={{ color: "#ffffffff", bgcolor: "#194367", "&:hover": { color: "#194367", bgcolor: "#ffffffff" } }}>
              <FaFacebookF />
            </IconButton>
            <IconButton size="small" sx={{ color: "#ffffffff", bgcolor: "#194367", "&:hover": { color: "#194367", bgcolor: "#ffffffff" } }}>
              <FaTwitter />
            </IconButton>
            <IconButton size="small" sx={{ color: "#ffffffff", bgcolor: "#194367", "&:hover": { color: "#194367", bgcolor: "#ffffffff" } }}>
              <FaInstagram />
            </IconButton>
            <IconButton size="small" sx={{ color: "#ffffffff", bgcolor: "#194367", "&:hover": { color: "#194367", bgcolor: "#ffffffff" } }}>
              <FaLinkedinIn />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
