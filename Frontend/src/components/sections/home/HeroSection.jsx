import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SchoolIcon from "@mui/icons-material/School";
import VideocamIcon from "@mui/icons-material/Videocam";

import { homeImages, homeUi } from "../../../constants/home/modernHomeData";
import { ImageCard, PrimaryButton, homeSectionSx, homeTitleSx } from "./HomePrimitives";

function HeroSection({ achievements }) {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: { md: "90vh" },
        pt: { xs: 5, md: 8 },
        ...homeSectionSx,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          bgcolor: "rgba(254,179,22,0.1)",
          transform: "skewX(-12deg) translateX(80px)",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, lg: 10 }} alignItems="center">
          <Grid item xs={12} lg={7}>
            <Stack direction="row" gap={1.5} flexWrap="wrap" sx={{ mb: 4 }}>
              {achievements.slice(0, 2).map((item, index) => (
                <Chip
                  key={item}
                  label={item}
                  icon={index === 0 ? <EmojiEventsIcon /> : <SchoolIcon />}
                  sx={{
                    bgcolor: index === 0 ? homeUi.gold : homeUi.primary,
                    color: index === 0 ? homeUi.goldText : "#fff",
                    fontWeight: 900,
                    px: 1,
                    "& .MuiChip-icon": { color: "inherit" },
                  }}
                />
              ))}
            </Stack>

            <Typography
              component="h1"
              sx={{
                ...homeTitleSx,
                fontSize: { xs: 35, sm: 45, md: 60, lg: 72 },
                mb: 4,
              }}
            >
              BUILDING <br />
              <Box component="span" sx={{ color: homeUi.gold }}>
                THE FUTURE
              </Box>
              <br />
              TOGETHER.
            </Typography>

            <Typography
              sx={{
                color: homeUi.muted,
                maxWidth: 620,
                fontSize: { xs: 18, md: 22 },
                lineHeight: 1.55,
                mb: 5,
              }}
            >
              "Empowering lifelong learners with knowledge, values, and vision for tomorrow."
              Discover a curriculum designed for the challenges of a global future.
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} gap={2}>
              <PrimaryButton to="/admissions" icon={<ArrowForwardIcon />}>
                Get Started
              </PrimaryButton>
              <Button
                component={Link}
                to="/gallery"
                endIcon={<VideocamIcon />}
                sx={{
                  bgcolor: "#fff",
                  color: homeUi.primary,
                  border: `2px solid ${homeUi.primary}`,
                  px: { xs: 3, md: 5 },
                  py: { xs: 1.5, md: 2 },
                  borderRadius: 3,
                  fontWeight: 900,
                  fontSize: { xs: 13, md: 16 },
                  textTransform: "uppercase",
                  "&:hover": { bgcolor: "rgba(0,67,121,0.05)" },
                }}
              >
                Virtual Tour
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={12} lg={5}>
            <Box sx={{ position: "relative" }}>
              <ImageCard
                src={homeImages.hero}
                alt="Faran Academy campus"
                sx={{ aspectRatio: "4 / 5", borderRadius: { xs: 6, md: 10 } }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,67,121,0.65), transparent)",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    left: { xs: 24, md: 40 },
                    bottom: { xs: 24, md: 40 },
                    color: "#fff",
                  }}
                >
                  <Typography sx={{ fontSize: { xs: 34, md: 44 }, fontWeight: 900 }}>
                    97%
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 900,
                      letterSpacing: "0.14em",
                      fontSize: 12,
                      textTransform: "uppercase",
                      opacity: 0.85,
                    }}
                  >
                    University Acceptance
                  </Typography>
                </Box>
              </ImageCard>
              <Box
                sx={{
                  position: "absolute",
                  top: -46,
                  left: -42,
                  width: 180,
                  height: 180,
                  bgcolor: homeUi.gold,
                  borderRadius: "50%",
                  zIndex: -1,
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: -44,
                  right: -36,
                  width: 230,
                  height: 230,
                  border: "22px solid rgba(0,67,121,0.1)",
                  borderRadius: "50%",
                  zIndex: -1,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default React.memo(HeroSection);
