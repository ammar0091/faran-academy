import React from "react";
import {
  Box,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

const features = [
  "Project-Based Curriculum",
  "Personalized Learning Pathways",
  "Mental Health & Wellbeing Programs",
  "Global Exchange Opportunities",
];

export default function WhoWeAre() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 14 },
        px: { xs: 2, md: 0 },
        background: "#f5f5f5",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 650,
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  bottom: -35,
                  right: -35,
                  width: "100%",
                  height: "100%",
                  borderRadius: "40px",
                  background: "#e7eaee",
                  zIndex: 1,
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  left: -25,
                  bottom: 120,
                  width: 95,
                  height: 95,
                  border: "18px solid #f4e4bc",
                  borderRadius: "6px",
                  zIndex: 1,
                }}
              />

              <CardMedia
                component="img"
                image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
                alt="Faran Academy"
                sx={{
                  position: "relative",
                  zIndex: 2,
                  width: "100%",
                  height: { xs: 380, md: 700 },
                  objectFit: "cover",
                  borderRadius: "40px",
                  boxShadow: "0 25px 60px rgba(0,0,0,0.08)",
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: 600 }}>
              <Typography
                sx={{
                  color: "#f4a300",
                  fontWeight: 700,
                  letterSpacing: 4,
                  textTransform: "uppercase",
                  fontSize: "0.8rem",
                  mb: 2,
                }}
              >
                Who We Are
              </Typography>

              <Typography
                sx={{
                  color: "#0B4A8B",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  mb: 3,
                  fontSize: { xs: "1.5rem", md: "2.5rem" },
                }}
              >
                A people-first academy with a track record of impact
              </Typography>

              <Typography
                sx={{
                  color: "#556070",
                  lineHeight: 1.9,
                  fontSize: { xs: "1rem", md: "1.08rem" },
                  mb: 3,
                }}
              >
                For over three decades we have cultivated a culture where
                curiosity is celebrated and learning is intentionally
                scaffolded. We combine research-backed pedagogy with a
                high-touch mentoring system so every child gets seen,
                challenged and supported.
              </Typography>

              <Typography
                sx={{
                  color: "#556070",
                  lineHeight: 1.9,
                  fontSize: { xs: "1rem", md: "1.05rem" },
                  mb: 5,
                }}
              >
                <strong style={{ color: "#0B4A8B" }}>How we do it:</strong>{" "}
                Through project cycles, mentorship, and cross-disciplinary
                studios that simulate real-life challenges. Students graduate
                not only with knowledge, but with the habits to learn
                independently and lead ethically.
              </Typography>

              <Stack spacing={3}>
                {features.map((feature, index) => (
                  <Box
                    key={feature}
                    sx={{
                      p: 1,
                      borderRadius: "24px",
                      borderLeft: `6px solid ${
                        index % 2 === 0 ? "#0B4A8B" : "#f4a300"
                      }`,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#0B4A8B",
                        fontWeight: 600,
                        fontSize: "1.05rem",
                      }}
                    >
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}