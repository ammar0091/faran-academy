import React from "react";
import { Link } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import NewspaperIcon from "@mui/icons-material/Newspaper";

import { enrollmentUi } from "../../../constants/enrollment/enrollmentData";

const links = [
  { label: "Home", to: "/", icon: <HomeIcon /> },
  { label: "Apply", to: "/enroll", icon: <MenuBookIcon />, active: true },
  { label: "News", to: "/newsevents", icon: <NewspaperIcon /> },
  { label: "Help", to: "/contact", icon: <ContactSupportIcon /> },
];

function EnrollmentMobileNav() {
  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        bgcolor: enrollmentUi.primary,
        justifyContent: "space-around",
        alignItems: "center",
        px: 2,
        py: 1.2,
        zIndex: 40,
        boxShadow: "0 -10px 24px rgba(0,0,0,0.18)",
      }}
    >
      {links.map((item) => (
        <Stack
          key={item.to}
          component={Link}
          to={item.to}
          alignItems="center"
          sx={{
            textDecoration: "none",
            color: item.active ? enrollmentUi.goldText : "#fff",
            bgcolor: item.active ? enrollmentUi.gold : "transparent",
            borderRadius: 999,
            px: item.active ? 2 : 1,
            py: item.active ? 0.5 : 0,
            opacity: item.active ? 1 : 0.78,
            fontSize: 12,
            fontWeight: 800,
          }}
        >
          {item.icon}
          <Box component="span">{item.label}</Box>
        </Stack>
      ))}
    </Box>
  );
}

export default React.memo(EnrollmentMobileNav);
