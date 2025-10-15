import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  Divider,
  Stack,
  Container,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/logo.png';

// Sidebar nav links (now with Home and Contact Us)
const drawerLinks = [
  { label: "HOME", path: "/" },
  { label: "ABOUT US", path: "/about" },
  { label: "COURSES", path: "/courses" },
  { label: "ADMISSIONS", path: "/admissions" },
  { label: "NOTIFICATIONS", path: "/notifications" },
  { label: "GALLERY", path: "/gallery" },
  { label: "CONTACT US", path: "/contact" },
];

const desktopMainNavLinks = [
  { label: "ABOUT US", path: "/about" },
  { label: "COURSES", path: "/courses" },
  { label: "ADMISSIONS", path: "/admissions" },
  { label: "GALLERY", path: "/gallery" },
];

const topbarLinks = [
  { label: "Home", path: "/" },
  { label: "Notifications", path: "/notifications" },
  { label: "Contact Us", path: "/contact" },
];

function TopBar() {
  const { pathname } = useLocation();
  return (
    <Box
      sx={{
        bgcolor: "#1c2432",
        color: "#fff",
        fontSize: 16,
        px: { xs: 1, md: 3 },
        py: 1.5,
        // Hide topbar on mobile (xs: display: none; md+: display: block)
        display: { xs: "none", md: "block" }
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {topbarLinks.map((item, idx) => (
            <React.Fragment key={item.path}>
              <Typography
                variant="body2"
                component={Link}
                to={item.path}
                color={pathname === item.path ? "#ffd43b" : "inherit"}
                sx={{
                  cursor: "pointer",
                  fontWeight: 400,
                  textDecoration: "none",
                  transition: "color 0.1s",
                  "&:hover": { color: "#ffd43b" },
                }}
              >
                {item.label}
              </Typography>
              {idx !== topbarLinks.length - 1 && (
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ bgcolor: "#fff", mx: 1, height: 18 }}
                />
              )}
            </React.Fragment>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            fontWeight: 400,
          }}
        >
          <Typography variant="body2">8860917726</Typography>
          <Divider orientation="vertical" flexItem sx={{ bgcolor: "#fff", mx: 1, height: 18 }} />
          <Typography variant="body2">7352391764</Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <TopBar />
      <AppBar
        position="static"
        sx={{
          bgcolor: "#fff",
          color: "#223050",
          boxShadow: "none",
          borderBottom: "1.5px solid #e7ecf2"
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              minHeight: { xs: 72, md: 98 },
              px: 0,
              width: "100%",
              justifyContent: "space-between"
            }}
            disableGutters
          >
            {/* Logo and tagline */}
            <Box
              component={Link}
              to="/"
              sx={{ textDecoration: "none", display: "flex", alignItems: "center" }}
            >
              <Box
                component="img"
                src={logo}
                alt="Faran Academy Logo"
                sx={{ height: 78, width: "auto", mr: 1, display: "block" }}
              />
              
            </Box>

            {/* Desktop nav links (centered) */}
            <Stack
              direction="row"
              spacing={3}
              sx={{
                mx: 4,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "serif",
                fontSize: 18,
                fontWeight: 300,
                color: "#2e3b50",
                display: { xs: "none", md: "flex" }
              }}
            >
              {desktopMainNavLinks.map(({ label, path }) => (
                <Button
                  key={path}
                  component={Link}
                  to={path}
                  disableRipple
                  sx={{
                    color: pathname === path ? "#005baa" : "inherit",
                    bgcolor: "transparent",
                    px: 2,
                    fontWeight: 400,
                    textTransform: "none",
                    borderBottom: pathname === path ? "2.5px solid #ffd43b" : "none",
                    borderRadius: 0,
                    fontSize: "inherit",
                    // "&:hover": { color: "#005baa", bgcolor: "#ffd43b22" }
                  }}
                >
                  {label}
                </Button>
              ))}
            </Stack>

            {/* Desktop Enrollment button */}
            <Button
              variant="contained"
              sx={{
                bgcolor: "#2d435a",
                color: "#fff",
                fontWeight: 700,
                fontSize: 16,
                px: 3.5,
                py: 1.1,
                borderRadius: 0.8,
                textTransform: "uppercase",
                letterSpacing: 1,
                boxShadow: "0 4px 14px 0 rgba(61,70,100,0.06)",
                ml: 2,
                display: { xs: "none", md: "inline-flex" },
                "&:hover": { bgcolor: "#1c2432", color: "#ffd43b" }
              }}
              component={Link}
              to="/enroll"
            >
              ENROLLMENT
            </Button>

            {/* Mobile menu button */}
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <IconButton
                color="inherit"
                edge="end"
                aria-label="open drawer"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon fontSize="medium" />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* Mobile Drawer Navigation */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 240 } }}
      >
        <List sx={{ mt: 3 }}>
          {drawerLinks.map(({ label, path }) => (
            <ListItemButton
              key={path}
              component={Link}
              to={path}
              selected={pathname === path}
              sx={{
                "&.Mui-selected": {
                  bgcolor: "#ffd43b22",
                  color: "primary.main"
                },
                fontWeight: 600
              }}
              onClick={() => setDrawerOpen(false)}
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
              bgcolor: "#2d435a",
              color: "#fff",
              fontWeight: 500,
              textAlign: "center",
              m: 1,
              borderRadius: 1,
              "&:hover": { bgcolor: "#1c2432", color: "#ffd43b" }
            }}
          >
            <ListItemText primary="ENROLLMENT" />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
}
