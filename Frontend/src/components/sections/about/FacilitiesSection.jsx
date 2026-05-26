import React from "react";

import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import { facilities } from "../../../constants/about/aboutData";

export default function FacilitiesSection() {
  const features = [
    "Industry-grade smart classrooms",
    "Creative collaboration spaces",
    "Student-first wellness environment",
  ];

  return (
    <Box
      sx={{
        position: "relative",

        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 0 },

        overflow: "hidden",

        background:
          "linear-gradient(180deg, #f8fbff 0%, #ffffff 50%, #f5f7ff 100%)",
      }}
    >
      {/* BACKGROUND GLOW */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,

          width: 300,
          height: 300,

          borderRadius: "50%",

          background: "rgba(99,102,241,0.12)",

          filter: "blur(100px)",

          zIndex: 0,
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
                CAMPUS & FACILITIES
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 900,
                  lineHeight: 1.08,
                  letterSpacing: "-1.5px",

                  color: "#0f172a",

                  mb: 3,

                  fontSize: {
                    xs: "2rem",
                    md: "2.8rem",
                  },
                }}
              >
                Spaces built for modern learning
              </Typography>

              <Typography
                sx={{
                  color: "#475569",

                  lineHeight: 1.9,

                  fontSize: "1.02rem",

                  mb: 4,

                  maxWidth: 560,
                }}
              >
                Thoughtfully designed classrooms,
                innovation labs, and collaborative
                environments that encourage
                creativity, exploration, and hands-on
                learning experiences.
              </Typography>

              <Stack spacing={2}>
                {features.map((item) => (
                  <Box
                    key={item}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      p: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: 10,
                        height: 10,

                        borderRadius: "50%",

                        background: "#005baa",

                        flexShrink: 0,
                      }}
                    />

                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: "#0f172a",
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              <Button
                variant="contained"
                sx={{
                  mt: 5,

                  px: 4,
                  py: 1.6,

                  borderRadius: "16px",

                  textTransform: "none",

                  fontWeight: 700,
                  fontSize: "1rem",
                }}
              >
                Explore Campus
              </Button>
            </Box>
          </Grid>

          {/* RIGHT GRID */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                maxWidth: 560,
                ml: "auto",
              }}
            >
              <Grid container spacing={3}>
                {facilities.map((facility, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    key={facility.title}
                  >
                    <Card
                      sx={{
                        position: "relative",

                        overflow: "hidden",

                        borderRadius: "28px",

                        background:
                          "rgba(255,255,255,0.7)",

                        backdropFilter: "blur(20px)",

                        border:
                          "1px solid rgba(255,255,255,0.5)",

                        boxShadow:
                          "0 10px 40px rgba(15,23,42,0.06)",

                        transition: "all .5s ease",

                        cursor: "pointer",

                        "&:hover": {
                          boxShadow:
                            "0 30px 60px rgba(15,23,42,0.12)",
                        },

                        "&:hover img": {
                          transform: "scale(1.08)",
                        },
                      }}
                    >
                      {/* OVERLAY */}
                      <Box
                        sx={{
                          position: "absolute",

                          inset: 0,

                          background:
                            "linear-gradient(to top, rgba(15,23,42,0.75), transparent 65%)",

                          zIndex: 1,
                        }}
                      />

                      {/* IMAGE */}
                      <Box
                        component="img"
                        src={facility.img}
                        alt={facility.title}
                        sx={{
                          width: "100%",

                          height:
                            index === 0 ? 340 : 280,

                          objectFit: "cover",

                          transition:
                            "transform .7s ease",
                        }}
                      />

                      {/* CONTENT */}
                      <Box
                        sx={{
                          position: "absolute",

                          bottom: 0,
                          left: 0,
                          right: 0,

                          p: 3,

                          zIndex: 2,
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#fff",

                            fontWeight: 800,

                            fontSize: "1.15rem",

                            mb: 1,
                          }}
                        >
                          {facility.title}
                        </Typography>

                        <Typography
                          sx={{
                            color:
                              "rgba(255,255,255,0.82)",

                            fontSize: "0.92rem",

                            lineHeight: 1.7,
                          }}
                        >
                          {facility.desc}
                        </Typography>
                      </Box>
                    </Card>
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