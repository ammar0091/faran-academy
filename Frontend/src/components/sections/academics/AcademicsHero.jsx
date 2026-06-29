import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Container, Grid, Stack, Typography, Chip } from "@mui/material";

const stats = [
  { value: "100%", label: "Student Focused" },
  { value: "50+", label: "Programs" },
  { value: "15:1", label: "Student Ratio" },
];

export default function AcademicsHero() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 6, md: 8 },
        background: "linear-gradient(150deg, #001F45 0%, #003B73 60%, #004F96 100%)",
      }}
    >
      {/* Subtle background grid */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          pointerEvents: "none",
        }}
      />

      {/* Glow blob */}
      <Box
        sx={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(0,102,204,0.25)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl">
        <Grid container spacing={5} alignItems="center">

          {/* LEFT */}
          <Grid item xs={12} lg={6}>

            {/* Eyebrow */}
            <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2.5 }}>
              <Box sx={{ width: 32, height: 3, borderRadius: 2, bgcolor: "#FDB515" }} />
              <Typography
                sx={{
                  color: "#FDB515",
                  fontWeight: 700,
                  fontSize: "0.72rem",
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                }}
              >
                Academics
              </Typography>
            </Stack>

            {/* Headline with left accent */}
            <Box
              sx={{
                borderLeft: "4px solid #0066CC",
                pl: 2.5,
                mb: 3,
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  fontSize: { xs: "2.1rem", md: "3rem" },
                  letterSpacing: "-0.5px",
                }}
              >
                Inspiring Learning
                <br />
                <Box component="span" sx={{ color: "#FDB515" }}>
                  Through Excellence
                </Box>
                <br />
                &amp; Innovation
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.75,
                fontSize: { xs: "0.92rem", md: "0.98rem" },
                maxWidth: 520,
                mb: 3.5,
              }}
            >
              Our academic programs nurture curiosity, critical thinking,
              and creativity — empowering every student to reach their full
              potential through engaging, modern learning experiences.
            </Typography>

            {/* CTA Buttons */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mb: 4 }}>
              <Link to="/admissions" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  size="medium"
                  sx={{
                    px: 3.5,
                    py: 1.2,
                    borderRadius: "10px",
                    bgcolor: "#FDB515",
                    color: "#003B73",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    textTransform: "none",
                    boxShadow: "0 4px 16px rgba(253,181,21,0.3)",
                    "&:hover": { bgcolor: "#f0a800", boxShadow: "0 6px 20px rgba(253,181,21,0.4)" },
                  }}
                >
                  Apply Now
                </Button>
              </Link>

              <Button
                variant="text"
                size="medium"
                sx={{
                  px: 3.5,
                  py: 1.2,
                  borderRadius: "10px",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.85)",
                  textTransform: "none",
                  border: "1.5px solid rgba(255,255,255,0.2)",
                  "&:hover": {
                    border: "1.5px solid rgba(255,255,255,0.5)",
                    bgcolor: "rgba(255,255,255,0.06)",
                  },
                }}
              >
                Explore Programs
              </Button>
            </Stack>

        
          </Grid>

          {/* RIGHT — image */}
          <Grid item xs={12} lg={6}>
            <Box sx={{ position: "relative", maxWidth: 560, ml: "auto" }}>

              {/* Decorative corner ring */}
              <Box
                sx={{
                  position: "absolute",
                  top: -20,
                  right: -20,
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  border: "2px solid rgba(253,181,21,0.25)",
                  zIndex: 0,
                }}
              />

              <Box
                component="img"
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80"
                alt="Students learning"
                sx={{
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  height: { xs: 280, md: 440 },
                  objectFit: "cover",
                  borderRadius: "20px",
                  boxShadow: "0 24px 48px rgba(0,0,0,0.3)",
                }}
              />

              {/* Small overlay badge */}
              <Box
                sx={{
                  position: "absolute",
                  zIndex: 2,
                  bottom: 20,
                  left: -20,
                  bgcolor: "#fff",
                  borderRadius: "12px",
                  px: 2,
                  py: 1.2,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.2,
                }}
              >
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "8px",
                    bgcolor: "#EEF4FB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.1rem",
                  }}
                >
                  🎓
                </Box>
                <Box>
                  <Typography sx={{ color: "#003B73", fontWeight: 700, fontSize: "0.82rem", lineHeight: 1 }}>
                    Modern Curriculum
                  </Typography>
                  <Typography sx={{ color: "#64748B", fontSize: "0.72rem", mt: 0.3 }}>
                    Practical &amp; student-first
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}
