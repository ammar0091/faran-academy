import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import { homeImages, homeUi } from "../../../constants/home/modernHomeData";
import { ImageCard, SectionHeading, homeSectionSx } from "./HomePrimitives";

const galleryFallbacks = [homeImages.campus, homeImages.students, homeImages.lab];

function GallerySection({ images }) {
  const galleryImages = images?.length ? images : galleryFallbacks;

  return (
    <Box component="section" sx={{ ...homeSectionSx, bgcolor: homeUi.low }}>
      <Container maxWidth="xl">
        <SectionHeading
          eyebrow="Campus Life"
          title="Beyond the Books."
          centered
          sx={{ mb: { xs: 5, md: 9 } }}
        />
        <Grid container spacing={3} sx={{ minHeight: { md: 760 } }}>
          <Grid item xs={12} md={8}>
            <ImageCard
              src={galleryImages[0]}
              alt="Sports and athletics"
              sx={{ height: { xs: 360, md: "100%" } }}
            >
              <GalleryOverlay title="Sports & Athletics" subtitle="Building teamwork and resilience on the field." />
            </ImageCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack gap={2} sx={{ height: "100%" }}>
              {[
                { title: "Performing Arts", image: galleryImages[1] },
                { title: "Innovation Lab", image: galleryImages[2] },
              ].map((item) => (
                <ImageCard
                  key={item.title}
                  src={item.image}
                  alt={item.title}
                  sx={{ flex: 1, height: { xs: 300, md: "auto" } }}
                >
                  <GalleryOverlay title={item.title} />
                </ImageCard>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function GalleryOverlay({ title, subtitle }) {
  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(0,67,121,0.78), transparent)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        p: { xs: 4, md: 6 },
      }}
    >
      <Typography sx={{ color: "#fff", fontWeight: 900, fontSize: { xs: 28, md: 42 } }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography sx={{ color: "rgba(255,255,255,0.82)", fontSize: { xs: 16, md: 20 } }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

export default React.memo(GallerySection);
