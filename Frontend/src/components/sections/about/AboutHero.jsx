import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";

const scrollToJourney = () => {
  document
    .getElementById("our-journey")
    ?.scrollIntoView({ behavior: "smooth" });
};

export default function AboutHero() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 7, md: 10 },
        px: { xs: 2, md: 0 },
        background:
          "linear-gradient(135deg,#0A4D80 0%,#0D5A93 45%,#1670B8 100%)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: -200,
          right: -200,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.08)",
          filter: "blur(120px)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: -150,
          left: -150,
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: "rgba(253,181,21,0.12)",
          filter: "blur(100px)",
        }}
      />

      <Container maxWidth="xl">
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} lg={6} maxWidth={600}>
            <Typography
              sx={{
                color: "#FDB515",
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              About Faran Academy
            </Typography>

            <Typography
              sx={{
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.1,
                mb: 3,
                fontSize: { xs: "2.7rem", md: "4.5rem" },
              }}
            >
              Shaping Future
              <br />
              Leaders Through
              <br />
              Excellence &
              <Box component="span" sx={{ color: "#FDB515", ml: 1 }}>
                Innovation
              </Box>
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.9,
                maxWidth: 650,
                mb: 4,
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              For more than three decades, Faran Academy has nurtured curious
              minds, inspired creativity, and empowered students with the
              confidence to thrive in an ever-changing world.
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Link to="/admissions" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    px: 4.5,
                    py: 1.5,
                    borderRadius: "14px",
                    bgcolor: "#FDB515",
                    color: "#0B4577",
                    fontWeight: 800,
                    textTransform: "none",
                    "&:hover": {
                      bgcolor: "#F4A900",
                    },
                  }}
                >
                  Admissions
                </Button>
              </Link>

              <Button
                variant="outlined"
                size="large"
                onClick={scrollToJourney}
                sx={{
                  px: 4.5,
                  py: 1.5,
                  borderRadius: "14px",
                  fontWeight: 700,
                  color: "#fff",
                  borderColor: "rgba(255,255,255,0.4)",
                  textTransform: "none",
                  "&:hover": {
                    borderColor: "#fff",
                    background: "rgba(255,255,255,0.08)",
                  },
                }}
              >
                Our Journey
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Box sx={{ position: "relative", ml: "auto", maxWidth: 600 }}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1600&q=80"
                alt="Faran Academy"
                sx={{
                  width: "100%",
                  height: { xs: 350, md: 550 },
                  objectFit: "cover",
                  borderRadius: "32px",
                  border: "8px solid rgba(255,255,255,0.15)",
                  boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  bottom: -30,
                  left: -30,
                  p: 3,
                  minWidth: 240,
                  borderRadius: "24px",
                  bgcolor: "rgba(255,255,255,0.95)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.18)",
                }}
              >
                <Typography
                  sx={{
                    color: "#FDB515",
                    fontSize: "2rem",
                    fontWeight: 800,
                  }}
                >
                  30+
                </Typography>

                <Typography
                  sx={{
                    color: "#0B4577",
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  Years of Excellence
                </Typography>

                <Typography
                  sx={{
                    color: "#64748B",
                    fontSize: ".9rem",
                  }}
                >
                  Building strong academic foundations since 1992.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}