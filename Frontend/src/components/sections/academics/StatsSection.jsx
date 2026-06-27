import React from "react";

import {
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const stats = [
  {
    value: "15:1",
    label: "Student Teacher Ratio",
  },
  {
    value: "1200+",
    label: "Students Enrolled",
  },
  {
    value: "50+",
    label: "Expert Faculty",
  },
  {
    value: "98%",
    label: "Academic Success Rate",
  },
];

export default function StatsSection() {
  return (
    <Box
      sx={{
        // mt: { xs: -4, md: -6 },
        // position: "relative",
        zIndex: 5,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            background:
              "linear-gradient(135deg,#0B4577 0%,#005BAA 100%)",

            // borderRadius: "32px",

            overflow: "hidden",

            boxShadow:
              "0 25px 60px rgba(0,0,0,.15)",
          }}
        >
          <Grid container>
            {stats.map((item, index) => (
              <Grid
                item
                xs={6}
                md={3}
                key={item.label}
              >
                <Box
                  sx={{
                    p: { xs: 3, md: 5 },

                    textAlign: "center",

                    borderRight: {
                      md:
                        index !==
                        stats.length - 1
                          ? "1px solid rgba(255,255,255,.12)"
                          : "none",
                    },

                    borderBottom: {
                      xs:
                        index < 2
                          ? "1px solid rgba(255,255,255,.12)"
                          : "none",

                      md: "none",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FDB515",

                      fontWeight: 800,

                      lineHeight: 1,

                      mb: 1,

                      fontSize: {
                        xs: "2rem",
                        md: "3rem",
                      },
                    }}
                  >
                    {item.value}
                  </Typography>

                  <Typography
                    sx={{
                      color:
                        "rgba(255,255,255,.85)",

                      fontWeight: 500,

                      fontSize: {
                        xs: ".9rem",
                        md: "1rem",
                      },
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}