import { Box, Container, Typography } from "@mui/material";

export default function ContactHeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #003B73 0%, #005BAA 100%)",
        py: { xs: 7, md: 9 }
      }}
    >
      {/* Decorative blobs */}

      <Box
        sx={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(255,255,255,.06)"
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: -100,
          left: -100,
          width: 240,
          height: 240,
          borderRadius: "50%",
          background: "rgba(255,255,255,.04)"
        }}
      />

      <Container maxWidth="lg">
        <Typography
          sx={{
            color: "rgba(255,255,255,.85)",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
            mb: 2
          }}
        >
          Contact Faran Academy
        </Typography>

        <Typography
          sx={{
            color: "#fff",
            fontWeight: 800,
            lineHeight: 1.05,
            mb: 2,
            fontSize: {
              xs: "35px",
              md: "52px"
            }
          }}
        >
          Let's Start a
          <br />
          Conversation
        </Typography>

        <Typography
          sx={{
            color: "rgba(255,255,255,.9)",
            fontSize: {
              xs: "16px",
              md: "18px"
            },
            lineHeight: 1.8,
            maxWidth: "700px"
          }}
        >
          Whether you're seeking admissions information, academic
          guidance, or general support, our team is ready to help
          you every step of the way.
        </Typography>
      </Container>
    </Box>
  );
}