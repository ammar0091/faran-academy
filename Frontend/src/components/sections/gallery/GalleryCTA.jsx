import React from "react";
import { Link } from "react-router-dom";

import { alpha } from "@mui/material/styles";
import SchoolIcon from "@mui/icons-material/School";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";

export default function GalleryCTA() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },

        background:
          "linear-gradient(135deg, #2b5072 0%, #005BAA 60%, #0077CC 100%)",

        position: "relative",

        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <Box
        sx={{
          position: "absolute",
          top: -120,
          right: -120,

          width: 320,
          height: 320,

          borderRadius: "50%",

          background:
            "rgba(255,255,255,.08)",

          filter: "blur(90px)",
        }}
      />

      <Container maxWidth="xl">
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "28px",
            background:
              "linear-gradient(135deg,#0B4577 0%,#005BAA 100%)",
            p: {
              xs: 4,
              md: 8,
            },
            boxShadow: "0 25px 60px rgba(0,0,0,.15)",
          }}
        >
          {/* Decorative Icon */}

          <SchoolIcon
            sx={{
              position: "absolute",
              right: {
                xs: -60,
                md: -30,
              },
              top: "50%",
              transform: "translateY(-50%) rotate(-12deg)",
              fontSize: {
                xs: 220,
                md: 360,
              },
              color: alpha("#fff", 0.06),
              pointerEvents: "none",
            }}
          />

          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              maxWidth: 650,
            }}
          >
            <Typography
              sx={{
                color: "#FDB515",
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              Join Our Journey
            </Typography>

            <Typography
              sx={{
                color: "#fff",
                fontWeight: 800,
                lineHeight: 1.15,
                mb: 3,
                fontSize: {
                  xs: "2rem",
                  md: "3rem",
                },
              }}
            >
              Every Picture Tells 
              <br />
              A Story
            </Typography>

            <Typography
              sx={{
                color: alpha("#fff", 0.82),
                lineHeight: 1.9,
                fontSize: "1rem",
                mb: 4,
                maxWidth: 560,
              }}
            >
              Join a vibrant learning community where innovation,
              creativity, and academic excellence prepare every
              student for a successful future.
            </Typography>

            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={2}
            >
              <Button
                component={Link}
                to="/admissions"
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: "#FDB515",
                  color: "#6A4800",
                  px: 4,
                  py: 1.5,
                  borderRadius: "12px",
                  fontWeight: 700,
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "#F4A900",
                  },
                }}
              >
                Apply Now
              </Button>

              <Button
                component={Link}
                to="/contact"
                variant="outlined"
                sx={{
                  borderColor: alpha("#fff", 0.25),
                  color: "#fff",
                  px: 4,
                  py: 1.5,
                  borderRadius: "12px",
                  textTransform: "none",
                  backdropFilter: "blur(10px)",
                  bgcolor: alpha("#fff", 0.04),

                  "&:hover": {
                    bgcolor: alpha("#fff", 0.08),
                    borderColor: "#fff",
                  },
                }}
              >
                Contact Us
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}