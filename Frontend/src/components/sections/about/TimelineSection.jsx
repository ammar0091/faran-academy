import React from "react";

import {
  Box,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import { timeline } from "../../../constants/about/aboutData";

function FrostCard({ children, sx = {} }) {
  return (
    <Box
      sx={{
        p: { xs: 2.5, md: 3.5 },

        borderRadius: 3,

        background: "rgba(255,255,255,0.88)",

        backdropFilter: "blur(10px)",

        boxShadow:
          "0 8px 30px rgba(2,48,92,0.06)",

        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

export default function TimelineSection() {
  return (
    <Box
      id="our-journey"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 0 },

        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container>
        {/* HEADING */}
        <Box textAlign="center" mb={8}>
          <Typography
            variant="overline"
            color="primary"
            fontWeight={800}
            letterSpacing={2}
            display="block"
            mb={1}
          >
            Our Journey
          </Typography>

          <Typography
            variant="h4"
            fontWeight={900}
            mb={2}
          >
            Milestones that shaped our story
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 760,
              mx: "auto",
              lineHeight: 1.8,
            }}
          >
            Every chapter in our journey reflects
            our commitment to better learning
            experiences, stronger student support,
            and meaningful community impact.
          </Typography>
        </Box>

        {/* TIMELINE WRAPPER */}
        <Box
          sx={{
            position: "relative",
            maxWidth: 1200,
            mx: "auto",

            "&::before": {
              content: '""',
              position: "absolute",

              left: {
                xs: 28,
                md: "50%",
              },

              top: 0,

              transform: {
                md: "translateX(-50%)",
              },

              width: "4px",
              height: "100%",

              borderRadius: 10,

              background:
                "linear-gradient(180deg,#0088cc 0%, rgba(0,136,204,0.08) 100%)",
            },
          }}
        >
          <Stack spacing={{ xs: 5, md: 8 }}>
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <Box
                  key={item.year}
                  sx={{
                    position: "relative",

                    display: "flex",

                    justifyContent: {
                      xs: "flex-start",

                      md: isLeft
                        ? "flex-start"
                        : "flex-end",
                    },
                  }}
                >
                  {/* DOT */}
                  <Box
                    sx={{
                      position: "absolute",

                      left: {
                        xs: 0,
                        md: "50%",
                      },

                      top: 28,

                      transform: {
                        md: "translateX(-50%)",
                      },

                      zIndex: 3,

                      width: 58,
                      height: 58,

                      borderRadius: "50%",

                      background:
                        "linear-gradient(135deg,#ffd6d6 0%,#d0f0ff 100%)",

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      boxShadow:
                        "0 10px 24px rgba(0,0,0,0.12)",

                      border: "4px solid #fff",
                    }}
                  >
                    <CalendarMonthIcon color="primary" />
                  </Box>

                  {/* CARD */}
                  <Box
                    sx={{
                      width: {
                        xs: "100%",
                        md: "calc(50% - 60px)",
                      },

                      ml: {
                        xs: 10,
                        md: 0,
                      },
                    }}
                  >
                    <FrostCard
                      sx={{
                        position: "relative",

                        overflow: "visible",

                        minHeight: 180,

                        transition:
                          "transform 0.35s ease, box-shadow 0.35s ease",

                        "&:hover": {
                          boxShadow:
                            "0 18px 40px rgba(0,0,0,0.12)",
                        },

                        "&::before": {
                          content: '""',

                          position: "absolute",

                          top: 36,

                          width: 18,
                          height: 18,

                          background: "#fff",

                          transform: "rotate(45deg)",

                          ...(isLeft
                            ? {
                                right: -9,
                              }
                            : {
                                left: -9,
                              }),

                          display: {
                            xs: "none",
                            md: "block",
                          },
                        },
                      }}
                    >
                      <Typography
                        variant="overline"
                        color="primary"
                        fontWeight={800}
                        letterSpacing={1.5}
                      >
                        {item.year}
                      </Typography>

                      <Typography
                        variant="h6"
                        fontWeight={800}
                        sx={{ mt: 1 }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          mt: 1.5,
                          lineHeight: 1.8,
                        }}
                      >
                        {item.descr}
                      </Typography>
                    </FrostCard>
                  </Box>
                </Box>
              );
            })}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}