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
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 0 },
        background: "#f5f7fb",
      }}
    >
      <Container maxWidth="xl">
        {/* banner wrapper */}
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            p: { xs: 1, md: 2 },
            borderRadius: {
              xs: "28px",
              md: "50px",
            },
            backgroundImage:
              "url('/images/campus-banner.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "0 25px 60px rgba(0,0,0,0.08)",
          }}
        >
          {/* content card */}
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              textAlign: "center",
              borderRadius: {
                xs: "24px",
                md: "45px",
              },
              py: {
                xs: 6,
                md: 8,
              },
              px: {
                xs: 3,
                md: 8,
              },
              background:
                "linear-gradient(135deg,#004B87 0%,#0B548E 100%)",
            }}
          >
            {/* overlay */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(170deg, transparent 40%, rgba(255,255,255,0.05) 41%)",
                pointerEvents: "none",
              }}
            />

            {/* content */}
            <Box sx={{ position: "relative", zIndex: 2 }}>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  mb: 3,
                  fontSize: {
                    xs: "2rem",
                    sm: "2.5rem",
                    md: "3.5rem",
                  },
                }}
              >
                Ready to Write Your{" "}
                <Box
                  component="span"
                  sx={{ color: "#FDB515" }}
                >
                  Legacy?
                </Box>
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.82)",
                  maxWidth: 850,
                  mx: "auto",
                  mb: 6,
                  lineHeight: 1.7,
                  fontSize: {
                    xs: "1rem",
                    md: "1.35rem",
                  },
                }}
              >
                Join our prestigious community and
                discover the difference of an
                education designed for the future.
              </Typography>

              {/* actions */}
              <Stack
                spacing={3}
                justifyContent="center"
                alignItems="center"
                direction={{
                  xs: "column",
                  sm: "row",
                }}
              >
                <Link
                  to="/admissions"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    sx={{
                      minWidth: 260,
                      py: 2,
                      borderRadius: "20px",
                      bgcolor: "#FDB515",
                      color: "#004B87",
                      fontWeight: 800,
                      fontSize: "1.15rem",
                      boxShadow:
                        "0 10px 25px rgba(0,0,0,0.12)",
                      "&:hover": {
                        bgcolor: "#f0ab00",
                      },
                    }}
                  >
                    APPLY NOW
                  </Button>
                </Link>

                <Link
                  to="/contact"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    sx={{
                      minWidth: 260,
                      py: 2,
                      borderRadius: "20px",
                      bgcolor: "#fff",
                      color: "#004B87",
                      fontWeight: 800,
                      fontSize: "1.15rem",
                      boxShadow:
                        "0 10px 25px rgba(0,0,0,0.08)",
                      "&:hover": {
                        bgcolor: "#f5f5f5",
                      },
                    }}
                  >
                    VISIT US
                  </Button>
                </Link>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}