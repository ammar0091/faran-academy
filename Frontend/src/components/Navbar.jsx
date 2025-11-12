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
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Academics", path: "/courses" },
  { label: "Admissions", path: "/admissions" },
  { label: "Campus Life", path: "/gallery" },
  { label: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [elevate, setElevate] = useState(false);
  const { pathname } = useLocation();

  // Add scroll effect (shadow when scrolled)
  useEffect(() => {
    const handleScroll = () => setElevate(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(10px)",
          color: "#1a1a1a",
          boxShadow: elevate ? "0 2px 10px rgba(0,0,0,0.08)" : "none",
          transition: "box-shadow 0.3s ease, background-color 0.3s ease",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              minHeight: { xs: 70, md: 90 },
              justifyContent: "space-between",
              px: 0,
            }}
            disableGutters
          >
            {/* Logo */}
            <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="School Logo"
                sx={{ height: 55, width: "auto" }}
              />
            </Box>

            {/* Desktop Menu */}
            <Stack
              direction="row"
              spacing={4}
              sx={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                display: { xs: "none", md: "flex" },
              }}
            >
              {navLinks.map(({ label, path }) => (
                <Button
                  key={path}
                  component={Link}
                  to={path}
                  disableRipple
                  sx={{
                    position: "relative",
                    fontSize: 16,
                    fontWeight: 500,
                    color: pathname === path ? "#0078d4" : "#333",
                    textTransform: "none",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      bottom: 0,
                      width: pathname === path ? "100%" : 0,
                      height: "2px",
                      bgcolor: "#0078d4",
                      transition: "width 0.3s ease",
                    },
                    "&:hover::after": { width: "100%" },
                    "&:hover": { color: "#0078d4" },
                  }}
                >
                  {label}
                </Button>
              ))}
            </Stack>

            {/* Apply Button */}
            <Button
              variant="contained"
              component={Link}
              to="/enroll"
              sx={{
                bgcolor: "#0078d4",
                color: "#fff",
                fontWeight: 600,
                fontSize: 15,
                px: 3,
                py: 1,
                borderRadius: "8px",
                textTransform: "none",
                boxShadow: "none",
                "&:hover": { bgcolor: "#005fa3" },
                display: { xs: "none", md: "inline-flex" },
              }}
            >
              Apply Now
            </Button>

            {/* Mobile Menu Button */}
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 240,
            bgcolor: "#fff",
          },
        }}
      >
        <List sx={{ mt: 2 }}>
          {navLinks.map(({ label, path }) => (
            <ListItemButton
              key={path}
              component={Link}
              to={path}
              onClick={() => setDrawerOpen(false)}
              selected={pathname === path}
              sx={{
                "&.Mui-selected": { bgcolor: "#e3f2fd" },
              }}
            >
              <ListItemText primary={label} />
            </ListItemButton>
          ))}
          <Divider sx={{ my: 1 }} />
          <ListItemButton
            component={Link}
            to="/enroll"
            onClick={() => setDrawerOpen(false)}
            sx={{
              bgcolor: "#0078d4",
              color: "#fff",
              mx: 2,
              mt: 1,
              borderRadius: 1,
              "&:hover": { bgcolor: "#005fa3" },
            }}
          >
            <ListItemText primary="Apply Now" />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
}
