import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { homeUi } from "../../../constants/home/modernHomeData";

export const homeSectionSx = {
  py: { xs: 4, md:8 },
  px: { xs: 2.5, md: 8 },
};

export const homeTitleSx = {
  fontFamily: "Manrope, Arial, sans-serif",
  fontWeight: 700,
  letterSpacing: 0,
  color: homeUi.primary,
  lineHeight: 0.98,
};

export const homeEyebrowSx = {
  color: homeUi.gold,
  fontWeight: 900,
  textTransform: "uppercase",
  letterSpacing: "0.28em",
  mb: 2,
  display: "block",
};

export const ImageCard = React.memo(function ImageCard({ src, alt, sx, children }) {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: { xs: 5, md: 8 },
        boxShadow: "0 24px 60px rgba(0, 67, 121, 0.18)",
        minHeight: 280,
        ...sx,
        "&:hover img": { transform: "scale(1.08)" },
      }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        loading="lazy"
        sx={{
          width: "100%",
          height: "100%",
          display: "block",
          objectFit: "cover",
          transition: "transform 900ms ease",
        }}
      />
      {children}
    </Box>
  );
});

export const PrimaryButton = React.memo(function PrimaryButton({
  children,
  to,
  variant = "primary",
  icon,
}) {
  const isGold = variant === "gold";

  return (
    <Button
      component={Link}
      to={to}
      endIcon={icon}
      sx={{
        bgcolor: isGold ? homeUi.gold : homeUi.primary,
        color: isGold ? homeUi.primary : "#fff",
        px: { xs: 3, md: 5 },
        py: { xs: 1.5, md: 2 },
        borderRadius: 3,
        fontWeight: 900,
        fontSize: { xs: 13, md: 16 },
        textTransform: "uppercase",
        boxShadow: "0 18px 36px rgba(0, 67, 121, 0.16)",
        "&:hover": {
          bgcolor: isGold ? "#ffba3b" : homeUi.primaryContainer,
          // transform: "translateY(-2px)",
        },
      }}
    >
      {children}
    </Button>
  );
});

export const SectionHeading = React.memo(function SectionHeading({
  eyebrow,
  title,
  centered = false,
  sx,
}) {
  return (
    <Box sx={{ textAlign: centered ? "center" : "left", ...sx }}>
      {eyebrow && <Typography sx={homeEyebrowSx}>{eyebrow}</Typography>}
      <Typography sx={{ ...homeTitleSx, fontSize: { xs: 35, md: 50 } }}>
        {title}
      </Typography>
    </Box>
  );
});
