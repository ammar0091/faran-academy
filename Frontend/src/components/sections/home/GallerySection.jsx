import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import { homeImages, homeUi } from "../../../constants/home/modernHomeData";
import {
  ImageCard,
  SectionHeading,
  homeSectionSx,
} from "./HomePrimitives";

// Agar images prop na aaye to ye default images use hongi
const defaultImages = [
  homeImages.campus,
  homeImages.students,
  homeImages.lab,
];

function GallerySection({ images }) {
  // Prop wali images use karo, warna default images
  const galleryImages = images?.length ? images : defaultImages;

  return (
    <Box
      component="section"
      sx={{
        ...homeSectionSx,
        bgcolor: homeUi.low,
      }}
    >
      <Container maxWidth="xl">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Campus Life"
          title="Beyond the Books."
          centered
          sx={{ mb: { xs: 5, md: 9 } }}
        />

        <Grid container spacing={3}>
          {/* Large Image - Left Side */}
          <Grid item xs={12} md={8}>
            <ImageCard
              src={galleryImages[0]}
              alt="Sports and athletics"
              sx={{
                height: { xs: 350, md: 610 },
              }}
            >
              <GalleryOverlay
                title="Sports & Athletics"
                subtitle="Building teamwork and resilience on the field."
              />
            </ImageCard>
          </Grid>

          {/* Two Small Images - Right Side */}
          <Grid item xs={12} md={4}>
            <Stack spacing={2} sx={{ height: "100%" }}>
              <ImageCard
                src={galleryImages[1]}
                alt="Performing Arts"
                sx={{ flex: 1 }}
              >
                <GalleryOverlay title="Performing Arts" />
              </ImageCard>

              <ImageCard
                src={galleryImages[2]}
                alt="Innovation Lab"
                sx={{ flex: 1 }}
              >
                <GalleryOverlay title="Innovation Lab" />
              </ImageCard>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// Image ke upar text overlay
function GalleryOverlay({ title, subtitle }) {
  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,

        // Bottom dark gradient for better text visibility
        background:
          "linear-gradient(to top, rgba(0,67,121,0.8), transparent)",

        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",

        p: { xs: 3, md: 5 },
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          color: "#fff",
          fontWeight: 700,
          fontSize: { xs: 24, md: 35 },
        }}
      >
        {title}
      </Typography>

      {/* Subtitle (optional) */}
      {subtitle && (
        <Typography
          sx={{
            color: "rgba(255,255,255,0.85)",
            mt: 1,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

export default React.memo(GallerySection);