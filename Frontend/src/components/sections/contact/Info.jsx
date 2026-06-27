import {
  Box,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

const cardSx = {
  display: "flex",
  alignItems: "flex-start",
  gap: 3,
  p: 4,
  borderRadius: "12px",
  background: "#F5F5F7",
  border: "1px solid #E3E5E8",
};

const socialButtonSx = {
  width: 40,
  height: 40,
  color: "#fff",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,.25)",
};

const iconBoxSx = (bg, color = "#fff") => ({
  width: 52,
  height: 52,
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "12px",
  bgcolor: bg,
  color,
});

const contactCards = [
  {
    title: "Campus Address",
    icon: (
      <LocationOnOutlinedIcon />
    ),
    bg: "#0056A8",
    text: (
      <>
        Khankhanapur Panchu,
        <br />
        Hisua - 805103, Bihar, India
      </>
    ),
  },
  {
    title: "Direct Contact",
    icon: (
      <LocalPhoneOutlinedIcon />
    ),
    bg: "#F5B319",
    iconColor: "#333",
    text: (
      <>
        Admissions: +91-8860917726
        <br />
        Main Office: +91-7352391764
      </>
    ),
  },
  {
    title: "Email Inquiries",
    icon: (
      <MailOutlineOutlinedIcon />
    ),
    bg: "#5D6873",
    text: (
      <>
        info@faranacademy.edu
        <br />
        www.faranacademy.edu
      </>
    ),
  },
];

const socialIcons = [
  PublicOutlinedIcon,
  AlternateEmailOutlinedIcon,
  ShareOutlinedIcon,
];

export default function ContactInfoSection() {
  return (
    <Box flex={1} maxWidth={500}>
      <Stack spacing={3}>
        {/* contact cards */}
        {contactCards.map(
          ({
            title,
            icon,
            bg,
            iconColor,
            text,
          }) => (
            <Box key={title} sx={cardSx}>
              <Box
                sx={iconBoxSx(
                  bg,
                  iconColor
                )}
              >
                {icon}
              </Box>

              <Box>
                <Typography
                  sx={{
                    mb: 1,
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#004A8F",
                  }}
                >
                  {title}
                </Typography>

                <Typography
                  sx={{
                    color: "#4B5563",
                    fontSize: 15,
                    lineHeight: 1.8,
                  }}
                >
                  {text}
                </Typography>
              </Box>
            </Box>
          )
        )}

        {/* social */}
        <Box
          sx={{
            mt: 1,
            p: 4,
            bgcolor: "#00457C",
            borderRadius: "12px",
          }}
        >
          <Typography
            sx={{
              mb: 3,
              color: "#BFC9D4",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            FOLLOW OUR COMMUNITY
          </Typography>

          <Stack direction="row" spacing={2}>
            {socialIcons.map(
              (Icon, index) => (
                <IconButton
                  key={index}
                  sx={socialButtonSx}
                >
                  <Icon fontSize="small" />
                </IconButton>
              )
            )}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}