import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { timeline } from "../../../constants/about/aboutData";

export default function TimelineSection() {
  return (
    <Box
      id="our-journey"
      sx={{
        py: { xs: 4, md: 6 },
        backgroundColor: "#F5F6F8",
      }}
    >
      <Container maxWidth="xl">
        {/* heading */}
        <Box mb={{ xs: 4, md: 8 }}>
          <Typography
            sx={{
              color: "#FDB515",
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Our Journey
          </Typography>

          <Typography
            sx={{
              color: "#004379",
              fontWeight: 700,
              fontSize: {
                xs: "35px",
                md: "60px",
              },
            }}
          >
            Legacy of Growth.
          </Typography>
        </Box>

        {/* timeline */}
        <Box
          sx={{
            position: "relative",
            maxWidth: 1300,
            mx: "auto",

            "&::before": {
              content: '""',
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "4px",
              backgroundColor: "#D8DDE6",
              transform: "translateX(-50%)",
              display: { xs: "none", md: "block" },
            },
          }}
        >
          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <Box
                key={item.year}
                sx={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: { xs: 4, md: 8 },
                  mb: { xs: 4, md: 8 },
                  flexDirection: {
                    xs: "column",
                    md: isLeft ? "row" : "row-reverse",
                  },
                }}
              >
                {/* content */}
                <Box
                  sx={{
                    width: { xs: "100%", md: "42%" },
                    textAlign: {
                      xs: "center",
                      md: isLeft ? "right" : "left",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "45px",
                        md: "70px",
                      },
                      fontWeight: 700,
                      lineHeight: 1,
                      color: isLeft ? "#FDB515" : "#004379",
                    }}
                  >
                    {item.year}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#004379",
                      fontWeight: 700,
                      fontSize: {
                        xs: "30px",
                        md: "35px",
                      },
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#5F6673",
                      lineHeight: 1.8,
                      fontSize: "18px",
                      mx: {
                        xs: "auto",
                        md: isLeft ? "auto" : 0,
                      },
                    }}
                  >
                    {item.descr}
                  </Typography>
                </Box>

                {/* marker */}
                <Box
                  sx={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 58,
                    height: 58,
                    borderRadius: "16px",
                    backgroundColor: isLeft ? "#004379" : "#FDB515",
                    border: "4px solid white",
                    boxShadow: "0 10px 24px rgba(0,0,0,0.15)",
                    zIndex: 5,
                    display: { xs: "none", md: "block" },
                  }}
                />

                {/* image */}
                <Box sx={{ width: { xs: "100%", md: "46%" } }}>
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      width: "100%",
                      height: {
                        xs: 220,
                        md: 300,
                      },
                      display: "block",
                      objectFit: "cover",
                      borderRadius: "32px",
                      boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                    }}
                  />
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}