import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import { facilities } from "../../../constants/about/aboutData";

const features = [
  "Industry-grade smart classrooms",
  "Creative collaboration spaces",
  "Student-first wellness environment",
];

export default function FacilitiesSection() {
  const [featuredFacility, ...otherFacilities] = facilities;

  return (
    <Box
      id="facilities"
      sx={{
        py: { xs: 4, md: 8 },
        backgroundColor: "#fbfdff",
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{ xs: 6, md: 10 }}
          alignItems="center"
        >
          {/* content */}
          <Grid item xs={12} md={5}>
            <Box sx={{ maxWidth: 520 }}>
              <Typography
                sx={{
                  color: "#FDB515",
                  fontWeight: 700,
                  letterSpacing: 6,
                  textTransform: "uppercase",
                  fontSize: 14,
                  mb: 2,
                }}
              >
                Campus & Facilities
              </Typography>

              <Typography
                sx={{
                  color: "#004379",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  mb: 3,
                  fontSize: {
                    xs: "35px",
                    sm: "42px",
                    md: "52px",
                  },
                }}
              >
                Built For
                <br />
                Modern Learning
              </Typography>

              <Typography
                sx={{
                  color: "#5F6673",
                  lineHeight: 1.9,
                  fontSize: "1rem",
                  mb: 4,
                }}
              >
                Our campus combines technology, creativity, and
                student-focused spaces to create an environment
                where learning becomes engaging, collaborative,
                and meaningful.
              </Typography>

              {/* highlights */}
              <Stack spacing={2.5}>
                {features.map((feature) => (
                  <Box
                    key={feature}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        backgroundColor: "#FDB515",
                        flexShrink: 0,
                      }}
                    />

                    <Typography
                      sx={{
                        color: "#004379",
                        fontWeight: 600,
                      }}
                    >
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* facility cards */}
          <Grid item xs={12} md={7}>
            <Grid container spacing={3}>
              {/* featured card */}
              <Grid item xs={12} md={7}>
                <Box
                  sx={{
                    position: "relative",
                    height: { xs: 280, md: 600 },
                    maxWidth: 400,
                    borderRadius: "32px",
                    overflow: "hidden",
                    boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
                  }}
                >
                  <Box
                    component="img"
                    src={featuredFacility?.img}
                    alt={featuredFacility?.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,67,121,.9), transparent 60%)",
                    }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      left: 24,
                      right: 24,
                      bottom: 24,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        fontWeight: 800,
                        fontSize: "1.5rem",
                        mb: 1,
                      }}
                    >
                      {featuredFacility?.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "rgba(255,255,255,.9)",
                        lineHeight: 1.7,
                      }}
                    >
                      {featuredFacility?.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              {/* side cards */}
              <Grid item xs={12} md={5}>
                <Stack spacing={3}>
                  {otherFacilities.slice(0, 2).map((facility) => (
                    <Box
                      key={facility.title}
                      sx={{
                        position: "relative",
                        height: 288,
                        maxWidth: 300,
                        borderRadius: "28px",
                        overflow: "hidden",
                        boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
                      }}
                    >
                      <Box
                        component="img"
                        src={facility.img}
                        alt={facility.title}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />

                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to top, rgba(0,67,121,.9), transparent 60%)",
                        }}
                      />

                      <Box
                        sx={{
                          position: "absolute",
                          left: 20,
                          right: 20,
                          bottom: 20,
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#fff",
                            fontWeight: 800,
                            fontSize: "1.2rem",
                            mb: 1,
                          }}
                        >
                          {facility.title}
                        </Typography>

                        <Typography
                          sx={{
                            color: "rgba(255,255,255,.9)",
                            fontSize: "0.9rem",
                            lineHeight: 1.6,
                          }}
                        >
                          {facility.desc}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}