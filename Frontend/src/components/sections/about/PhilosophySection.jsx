import React from "react";

import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import { philosophyCards } from "../../../constants/about/aboutData";

export default function PhilosophySection() {
  const outcomes = [
    "Academic growth through project and standardized outcomes",
    "Social-emotional competencies including empathy and self-management",
    "Real-world readiness through internships and community initiatives",
  ];

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 0 },

        background: `
          radial-gradient(circle at top left, rgba(59,130,246,0.10), transparent 28%),
          radial-gradient(circle at bottom right, rgba(99,156,241,0.08), transparent 30%),
          linear-gradient(180deg, #f8fbff 0%, #f3f7fc 100%)
        `,
      }}
    >
      {/* Background Glow */}
      <Box
        sx={{
          position: "absolute",
          bottom: -160,
          right: -100,
          width: 420,
          height: 320,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.14) 0%, rgba(99,102,241,0) 72%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Grid
          container
          spacing={6}
          alignItems="center"
          sx={{
            flexWrap: {
              xs: "wrap",
              md: "nowrap",
            },
          }}
        >
          {/* LEFT CONTENT */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                maxWidth: {
                  xs: "100%",
                  md: 620,
                },
              }}
            >
              <Typography
                variant="overline"
                color="primary"
                fontWeight={800}
                letterSpacing={2}
                mb={1}
                display="block"
              >
                our philosophy
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontSize: {
                    xs: "2rem",
                    sm: "2.3rem",
                    md: "2.8rem",
                  },

                  lineHeight: 1.02,
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  color: "#0f172a",
                  mb: 3,
                }}
              >
                Education that evolves with every learner
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "rgba(15,23,42,0.72)",
                  fontSize: {
                    xs: "1rem",
                    md: "1.08rem",
                  },

                  lineHeight: 1.9,
                  mb: 4,
                }}
              >
                We design learning experiences that are
                intentionally sequenced — each stage
                building toward independence. Through
                mixed-age collaboration, reflection
                cycles, and public exhibitions, students
                continuously strengthen critical
                thinking, adaptability, and
                self-direction.
              </Typography>

              <Divider
                sx={{
                  width: 72,
                  borderColor:
                    "rgba(59,130,246,0.45)",
                  borderBottomWidth: 2,
                  mb: 4,
                }}
              />

              <Typography
                sx={{
                  fontWeight: 700,
                  color: "#0f172a",
                  mb: 2.5,
                  fontSize: "0.95rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Outcomes we actively measure
              </Typography>

              <Stack spacing={2}>
                {outcomes.map((item) => (
                  <Stack
                    key={item}
                    direction="row"
                    spacing={1.8}
                    alignItems="flex-start"
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        bgcolor: "primary.main",
                        mt: "10px",
                        flexShrink: 0,
                        boxShadow:
                          "0 0 0 6px rgba(59,130,246,0.12)",
                      }}
                    />

                    <Typography
                      sx={{
                        color:
                          "rgba(15,23,42,0.82)",
                        lineHeight: 1.8,
                        fontSize: "0.98rem",
                      }}
                    >
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* RIGHT CARDS */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                maxWidth: 640,
                ml: "auto",
              }}
            >
              <Grid container spacing={3}>
                {philosophyCards.map((card, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    key={card.title}
                    sx={{
                      mt: {
                        md: index % 2 !== 0 ? 4 : 0,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        height: "100%",
                        borderRadius: "28px",
                        p: "1px",
                        overflow: "hidden",
                        transition: "all 0.4s ease",

                        "&:hover": {
                          boxShadow:
                            "0 30px 80px rgba(15,23,42,0.14), 0 10px 30px rgba(59,130,246,0.10)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          height: "100%",
                          borderRadius: "27px",
                          p: 3.5,

                          backdropFilter:
                            "blur(18px)",

                          background:
                            "linear-gradient(180deg, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.55) 100%)",

                          border:
                            "1px solid rgba(255,255,255,0.6)",

                          boxShadow: `
                            inset 0 1px 0 rgba(255,255,255,0.8),
                            0 10px 30px rgba(15,23,42,0.06)
                          `,
                        }}
                      >
                        <Stack spacing={1.5}>
                          {/* ICON */}
                          <Box
                            sx={{
                              width: 60,
                              height: 60,
                              borderRadius: "20px",

                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",

                              background:
                                "linear-gradient(135deg, rgba(59,130,246,0.16), rgba(99,102,241,0.10))",

                              border:
                                "1px solid rgba(255,255,255,0.7)",

                              backdropFilter:
                                "blur(12px)",

                              boxShadow: `
                                inset 0 1px 0 rgba(255,255,255,0.8),
                                0 10px 25px rgba(59,130,246,0.10)
                              `,

                              "& svg": {
                                fontSize: 28,
                                color: "#2563eb",
                              },
                            }}
                          >
                            {card.icon}
                          </Box>

                          {/* CONTENT */}
                          <Box>
                            <Typography
                              sx={{
                                fontWeight: 800,
                                color: "#0f172a",
                                fontSize: "1.08rem",
                                letterSpacing:
                                  "-0.02em",
                              }}
                            >
                              {card.title}
                            </Typography>

                            <Typography
                              variant="body2"
                              sx={{
                                color:
                                  "rgba(15,23,42,0.68)",

                                lineHeight: 1.8,
                                fontSize: "0.95rem",
                              }}
                            >
                              {card.text}
                            </Typography>
                          </Box>
                        </Stack>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}