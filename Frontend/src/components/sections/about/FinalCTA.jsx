
import React from "react";

import { Link } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";

export default function FinalCTA() {
  return (
    <Box
      sx={{
        position: "relative",

        overflow: "hidden",

        py: { xs: 7, md: 11 },
        px: { xs: 2, md: 0 },

        background:
          "linear-gradient(135deg,#003f7d 0%,#005baa 40%,#0094d9 100%)",

        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",

            zIndex: 2,

            textAlign: "center",

            maxWidth: 900,

            mx: "auto",
          }}
        >
          {/* LABEL */}
          <Typography
            variant="overline"
            sx={{
              letterSpacing: 3,
              fontWeight: 800,
              opacity: 0.9,
            }}
          >
            JOIN OUR COMMUNITY
          </Typography>

          {/* HEADING */}
          <Typography
            variant="h3"
            fontWeight={900}
            sx={{
              mt: 1.5,
              mb: 2,

              lineHeight: 1.2,

              fontSize: {
                xs: "2rem",
                md: "3rem",
              },
            }}
          >
            Be Part of the Faran Story
          </Typography>

          {/* DESCRIPTION */}
          <Typography
            variant="body1"
            sx={{
              maxWidth: 760,

              mx: "auto",

              mb: 5,

              opacity: 0.92,

              lineHeight: 1.9,

              fontSize: {
                xs: "0.98rem",
                md: "1.08rem",
              },
            }}
          >
            If you value learning that balances
            curiosity, resilience and real-world
            application, come visit us. Schedule a
            campus tour or speak with our admissions
            team to learn how we partner with families
            for long-term success.
          </Typography>

          {/* BUTTONS */}
          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Link
              to="/contact"
              style={{
                textDecoration: "none",
              }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  px: 5,
                  py: 1.6,

                  borderRadius: 3,

                  fontWeight: 800,

                  fontSize: "0.95rem",

                  bgcolor: "#fff",

                  color: "#005baa",

                  boxShadow:
                    "0 10px 30px rgba(0,0,0,0.15)",

                  transition: "all .3s ease",

                  "&:hover": {
                    bgcolor: "#f4f8ff",

                    boxShadow:
                      "0 14px 35px rgba(0,0,0,0.2)",
                  },
                }}
              >
                Contact Admissions
              </Button>
            </Link>

            <Link
              to="/visit"
              style={{
                textDecoration: "none",
              }}
            >
              <Button
                variant="outlined"
                size="large"
                sx={{
                  px: 4.5,
                  py: 1.5,

                  borderRadius: 3,

                  fontWeight: 700,

                  fontSize: "0.95rem",

                  color: "#fff",

                  borderColor:
                    "rgba(255,255,255,0.3)",

                  background:
                    "rgba(255,255,255,0.06)",

                  backdropFilter: "blur(10px)",

                  transition: "all .3s ease",

                  "&:hover": {
                    borderColor: "#fff",

                    background:
                      "rgba(255,255,255,0.12)",
                  },
                }}
              >
                Schedule a Visit
              </Button>
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}