import React from "react";
import { Box, Container, Typography, Grid, Paper, Tabs, Tab } from "@mui/material";

// Example gallery images: /assets/gallery/1.jpg, /assets/gallery/2.jpg, etc.
const galleryCategories = [
  { label: "All", images: [1, 2, 3, 4, 5, 6, 7, 8] },
  { label: "Events", images: [1, 2, 3] },
  { label: "Campus", images: [4, 5] },
  { label: "Sports", images: [6, 7] },
  { label: "Trips", images: [8] },
];

export default function Gallery() {
  const [tab, setTab] = React.useState(0);
  const images = galleryCategories[tab].images;

  return (
    <Box bgcolor="#f8fafd" minHeight="100vh">
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 7 } }}>
        <Typography variant="h3" fontWeight={900} color="primary.main" mb={2} align="center">
          Photo Gallery
        </Typography>
        <Typography align="center" color="text.secondary" sx={{ mb: 4 }}>
          Explore memorable moments from academic life, events, sports, field trips, and more at Faran Academy.
        </Typography>
        <Paper
          elevation={2}
          sx={{
            mb: 5,
            borderRadius: 3,
            p: 2,
            background: "#fff"
          }}
        >
          <Tabs
            value={tab}
            onChange={(_, val) => setTab(val)}
            centered
            textColor="primary"
            indicatorColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            {galleryCategories.map((cat, idx) => (
              <Tab key={cat.label} label={cat.label} />
            ))}
          </Tabs>
        </Paper>
        <Grid container spacing={3}>
          {images.map((imgId) => (
            <Grid item xs={12} sm={6} md={4} key={imgId}>
              <Box
                component="img"
                src={`/assets/gallery/${imgId}.jpg`}
                alt={`Gallery ${imgId}`}
                sx={{
                  width: "100%",
                  borderRadius: 3,
                  boxShadow: "0 4px 32px #99bbff17",
                  mb: 1,
                  objectFit: "cover",
                  height: { xs: 210, sm: 220, md: 240 }
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
