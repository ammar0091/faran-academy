import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { philosophyCards } from "../../../constants/about/aboutData";

export default function PhilosophySection() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 14 },
        background: "#004b8d",
      }}
    >
      {/* side shape */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: -120,
          width: 380,
          height: "100%",
          background: "#0b3f73",
          transform: "skewX(-12deg)",
          zIndex: 1,
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* section heading */}
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 900,
            mx: "auto",
            mb: { xs: 6, md: 10 },
          }}
        >
          <Typography
            sx={{
              color: "#f4b318",
              textTransform: "uppercase",
              letterSpacing: 6,
              fontWeight: 700,
              fontSize: { xs: ".85rem", md: "1rem" },
              mb: 2,
            }}
          >
            Our Values
          </Typography>

          <Typography
            sx={{
              color: "#fff",
              fontWeight: 800,
              lineHeight: 1.1,
              mb: 3,
              fontSize: { xs: "2.5rem", md: "4.5rem" },
            }}
          >
            The Faran Philosophy.
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,.75)",
              fontSize: { xs: "1rem", md: "1.35rem" },
              lineHeight: 1.8,
              maxWidth: 850,
              mx: "auto",
            }}
          >
            Education that evolves with every learner. We create meaningful
            experiences that strengthen curiosity, adaptability, leadership,
            and lifelong learning.
          </Typography>
        </Box>

        {/* value cards */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {philosophyCards.map((card, index) => {
            const isFeatured = index === 1;

            return (
              <Grid item xs={12} md={4} key={card.title}>
                <Box
                  sx={{
                    height: "100%",
                    maxWidth: 420,
                    minHeight: {
                      xs: 280,
                      md: isFeatured ? 360 : 320,
                    },
                    p: 5,
                    borderRadius: "38px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: isFeatured
                      ? "#f4b318"
                      : "rgba(255,255,255,.12)",
                    border: isFeatured
                      ? "none"
                      : "1px solid rgba(255,255,255,.08)",
                    backdropFilter: "blur(6px)",
                    transition: "all .35s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                    },
                  }}
                >
                  {/* card icon */}
                  <Box
                    sx={{
                      width: 92,
                      height: 92,
                      mb: 4,
                      borderRadius: "28px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: isFeatured
                        ? "#004b8d"
                        : "#f4b318",
                      "& svg": {
                        fontSize: 42,
                        color: isFeatured
                          ? "#fff"
                          : "#004b8d",
                      },
                    }}
                  >
                    {card.icon}
                  </Box>

                  <Typography
                    sx={{
                      color: isFeatured
                        ? "#5b4200"
                        : "#fff",
                      fontWeight: 800,
                      mb: 2,
                      fontSize: {
                        xs: "1.5rem",
                        md: "2rem",
                      },
                    }}
                  >
                    {card.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: isFeatured
                        ? "rgba(0,0,0,.65)"
                        : "rgba(255,255,255,.82)",
                      lineHeight: 1.8,
                      fontSize: {
                        xs: "1rem",
                        md: "1.1rem",
                      },
                      maxWidth: 420,
                    }}
                  >
                    {card.text}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}