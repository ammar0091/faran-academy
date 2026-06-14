import React from "react";
import { Link } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CampaignIcon from "@mui/icons-material/Campaign";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import SchoolIcon from "@mui/icons-material/School";

import { homeUi } from "../../../constants/home/modernHomeData";

const mobileLinks = [
  { label: "Home", to: "/", icon: <SchoolIcon /> },
  { label: "Academics", to: "/academics", icon: <AutoStoriesIcon /> },
  { label: "News", to: "/newsevents", icon: <CampaignIcon /> },
  { label: "Contact", to: "/contact", icon: <Diversity3Icon /> },
];

function MobileQuickNav() {
  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
        position: "fixed",
        left: "50%",
        bottom: 18,
        transform: "translateX(-50%)",
        width: "90%",
        height: 76,
        bgcolor: "rgba(0,67,121,0.96)",
        borderRadius: 8,
        zIndex: 20,
        justifyContent: "space-around",
        alignItems: "center",
        boxShadow: "0 18px 40px rgba(0,0,0,0.28)",
      }}
    >
      {mobileLinks.map((item, index) => (
        <Stack
          key={item.to}
          component={Link}
          to={item.to}
          alignItems="center"
          sx={{
            textDecoration: "none",
            color: index === 0 ? homeUi.gold : "rgba(255,255,255,0.65)",
            fontWeight: 900,
            fontSize: 10,
            textTransform: "uppercase",
          }}
        >
          {item.icon}
          <Box component="span" sx={{ mt: 0.5 }}>
            {item.label}
          </Box>
        </Stack>
      ))}
    </Box>
  );
}

export default React.memo(MobileQuickNav);
