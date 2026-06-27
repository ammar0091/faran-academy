import React from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

export default function AcademicsHero() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",

        py: { xs: 8, md: 12 },

        background:
          "linear-gradient(135deg,#003B73 0%,#005BAA 55%,#0077CC 100%)",
      }}
    >
      {/* Glow Effect */}
      <Box
        sx={{
          position: "absolute",
          top: -150,
          right: -150,

          width: 400,
          height: 400,

          borderRadius: "50%",

          background:
            "rgba(255,255,255,0.08)",

          filter: "blur(80px)",
        }}
      />

      <Container maxWidth="xl">
        <Grid
          container
          spacing={8}
          alignItems="center"
        >
          {/* LEFT CONTENT */}
          <Grid item xs={12} lg={6}>
            <Typography
              sx={{
                color: "#FDB515",

                fontWeight: 700,

                letterSpacing: "3px",

                textTransform: "uppercase",

                mb: 2,
              }}
            >
              Academics
            </Typography>

            <Typography
              sx={{
                color: "#fff",

                fontWeight: 800,

                lineHeight: 1.08,

                mb: 3,

                fontSize: {
                  xs: "2.7rem",
                  md: "4rem",
                },
              }}
            >
              Inspiring Learning
              <br />
              Through Excellence
              <br />
              & Innovation
            </Typography>

            <Typography
              sx={{
                color:
                  "rgba(255,255,255,0.85)",

                lineHeight: 1.9,

                maxWidth: 650,

                mb: 4,

                fontSize: {
                  xs: "1rem",
                  md: "1.1rem",
                },
              }}
            >
              Our academic programs are
              designed to nurture curiosity,
              critical thinking, creativity,
              and confidence. Every student
              is empowered to achieve their
              full potential through
              engaging learning experiences.
            </Typography>

            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={2}
            >
              <Link
                to="/admissions"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    px: 4.5,
                    py: 1.5,

                    borderRadius: "14px",

                    bgcolor: "#FDB515",

                    color: "#003B73",

                    fontWeight: 700,

                    textTransform: "none",

                    "&:hover": {
                      bgcolor: "#f4a900",
                    },
                  }}
                >
                  Apply Now
                </Button>
              </Link>

              <Button
                variant="outlined"
                size="large"
                sx={{
                  px: 4.5,
                  py: 1.5,

                  borderRadius: "14px",

                  fontWeight: 700,

                  color: "#fff",

                  borderColor:
                    "rgba(255,255,255,.3)",

                  textTransform: "none",

                  "&:hover": {
                    borderColor: "#fff",
                    background:
                      "rgba(255,255,255,.08)",
                  },
                }}
              >
                Explore Programs
              </Button>
            </Stack>
          </Grid>

          {/* RIGHT IMAGE */}
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                position: "relative",
                maxWidth: 620,
                ml: "auto",
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80"
                alt="Academics"
                sx={{
                  width: "100%",

                  height: {
                    xs: 350,
                    md: 560,
                  },

                  objectFit: "cover",

                  borderRadius: "32px",

                  boxShadow:
                    "0 30px 60px rgba(0,0,0,.2)",
                }}
              />

              {/* Floating Card */}
              <Box
                sx={{
                  position: "absolute",

                  bottom: -25,
                  left: -25,

                  bgcolor: "#fff",

                  p: 3,

                  borderRadius: "24px",

                  minWidth: 240,

                  boxShadow:
                    "0 15px 40px rgba(0,0,0,.15)",
                }}
              >
                <Typography
                  sx={{
                    color: "#FDB515",

                    fontSize: "2rem",

                    fontWeight: 800,
                  }}
                >
                  100%
                </Typography>

                <Typography
                  sx={{
                    color: "#003B73",

                    fontWeight: 700,

                    mb: 1,
                  }}
                >
                  Student Focused
                </Typography>

                <Typography
                  sx={{
                    color: "#64748B",

                    fontSize: ".9rem",
                  }}
                >
                  Modern curriculum,
                  practical learning and
                  individual growth.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}