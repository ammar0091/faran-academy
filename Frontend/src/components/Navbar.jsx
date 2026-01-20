// Navbar.js
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Stack,
  Container,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Academics", path: "/academics" },
  { label: "Admissions", path: "/admissions" },
  { label: "Campus Life", path: "/gallery" },
  { label: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [elevate, setElevate] = useState(false);
  const { pathname } = useLocation();

  // add shadow on scroll
  useEffect(() => {
    const onScroll = () => setElevate(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const styles = {
    appBar: {
      backgroundColor: "rgba(255,255,255,0.96)",
      backdropFilter: "blur(8px)",
      color: "#333",
      boxShadow: elevate ? "0 4px 18px rgba(0,0,0,0.08)" : "none",
    },

    desktopLink: (active) => ({
      fontSize: 15,
      fontWeight: 600,
      textTransform: "none",
      color: active ? "#0078d4" : "#444",
      position: "relative",
      padding: "8px 6px",
      "&::after": {
        content: '""',
        position: "absolute",
        bottom: -2,
        left: 0,
        width: active ? "100%" : 0,
        height: 2,
        backgroundColor: "#0078d4",
        transition: "0.25s",
      },
      "&:hover": { color: "#0063afff" },
      "&:hover::after": { width: "100%" },
    }),

    drawerPaper: {
      width: 300,
      padding: "16px",
    },

    mobileItem: (active) => ({
      mb: 1,
      borderRadius: 3,
      border: active ? "1px solid #0165b1ff" : "1px solid #ddd",
      padding: "10px 14px",
      bgcolor: active ? "#eaf4ff" : "transparent",
      "&:hover": {
        borderColor: "#0078d4",
        backgroundColor: "#f3f9ff",
      },
      "& .MuiListItemText-primary": {
        fontSize: 16,
        fontWeight: active ? 700 : 500,
      },
    }),
  };

  return (
    <>
      {/* NAVBAR TOP */}
      <AppBar position="sticky" sx={styles.appBar}>
        <Container maxWidth="xl">
          <Toolbar sx={{ minHeight: { xs: 70, md: 90 } }}>

            {/* Logo */}
            <Box component={Link} to="/" sx={{ display: "flex", alignItems: "center" }}>
              <img src={logo} alt="Logo" style={{ height: 56 }} />
            </Box>

            {/* Desktop Menu */}
            <Stack
              direction="row"
              spacing={4}
              sx={{
                flex: 1,
                justifyContent: "center",
                display: { xs: "none", md: "flex" },
              }}
            >
              {navLinks.map(({ label, path }) => {
                const active = pathname === path;
                return (
                  <Button
                    key={path}
                    component={Link}
                    to={path}
                    disableRipple
                    sx={styles.desktopLink(active)}
                  >
                    {label}
                  </Button>
                );
              })}
            </Stack>

            {/* Desktop CTA */}
            <Button
              component={Link}
              to="/enroll"
              variant="contained"
              sx={{
                display: { xs: "none", md: "inline-flex" },
                backgroundColor: "#016abbff",
                textTransform: "none",
                fontWeight: 700,
                px: 3,
                py: 1,
                borderRadius: 2,
              }}
            >
              Apply Now
            </Button>

            {/* Mobile Hamburger (fixed right) */}
            <Box
              sx={{
                display: { xs: "block", md: "none" },
                marginLeft: "auto",
              }}
            >
              <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: styles.drawerPaper }}
      >
        {/* Drawer Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img src={logo} alt="Logo" style={{ height: 40 }} />
          </Box>

          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Mobile Links */}
        <List>
          {navLinks.map(({ label, path }) => {
            const active = pathname === path;
            return (
              <ListItemButton
                key={path}
                component={Link}
                to={path}
                sx={styles.mobileItem(active)}
              >
                <ListItemText primary={label} />
              </ListItemButton>
            );
          })}

          <Divider sx={{ my: 2 }} />

          {/* CTA in Drawer */}
          <Button
            component={Link}
            to="/enroll"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#026fc2ff",
              textTransform: "none",
              fontWeight: 800,
              py: 1.2,
              borderRadius: 2,
            }}
          >
            Apply Now
          </Button>
        </List>
      </Drawer>
    </>
  );
}
