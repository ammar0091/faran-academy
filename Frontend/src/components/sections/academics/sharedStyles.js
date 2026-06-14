import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(8, 0),
  },
}));

export const SectionTag = styled(Typography)(() => ({
  fontSize: "13px",
  fontWeight: 800,
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: "#2563eb",
  marginBottom: "12px",
}));

export const MainHeading = styled(Typography)(() => ({
  fontWeight: 800,
  lineHeight: 1.02,
  color: "#111827",
  letterSpacing: "-1.5px",
}));

export const Paragraph = styled(Typography)(() => ({
  color: "#6b7280",
  lineHeight: 1.9,
  fontSize: "16px",
}));

export const ImageWrapper = styled(Box)(() => ({
  width: "100%",
  borderRadius: "24px",
  overflow: "hidden",
  boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
}));

export const CardBox = styled(Box)(() => ({
  padding: "32px",
  borderRadius: "24px",
  background: "#ffffff",
  boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
  height: "100%",
  transition: "0.3s ease",

  "&:hover": {
    transform: "translateY(-6px)",
  },
}));