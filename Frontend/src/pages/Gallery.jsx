import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const galleryCategories = [
  { label: "All", images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
  { label: "Events", images: [1, 2, 3] },
  { label: "Campus", images: [4, 5, 6] },
  { label: "Sports", images: [7, 8, 9] },
  { label: "Trips", images: [10, 11, 12] },
];

export default function Gallery() {
  const [tab, setTab] = React.useState(0);
  const images = galleryCategories[tab].images;

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  // Featured image: take first image from selected category

  // Remaining images for the grid
  const gridImages = images.slice(1);

  return (
    <Box sx={{ width: "100%", bgcolor: "#f8fafd", py: { xs: 6, md: 12 }, px: { xs: 3, md: 8 } }}>
      {/* Top section: Text + Featured Image */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 4, md: 6 },
          mb: 6,
        }}
      >
        {/* Left Text */}
        <Box flex={1}>
          <Typography variant="overline" color="primary" fontWeight={700} letterSpacing={2} mb={2}>
            Gallery
          </Typography>

          <Typography variant={isSm ? "h5" : "h3"} fontWeight={700} color="text.primary" mb={3}>
            Explore Our Campus Life
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            Step into our visual world of events, celebrations, sports, and campus moments that define
            the vibrant life at Faran Academy.
          </Typography>
        </Box>


      </Box>

      {/* Category Tabs */}
      <Paper
        elevation={2}
        sx={{
          borderRadius: 3,
          p: 1,
          mb: 6,
          width: { xs: "100%", sm: "90%", md: "60%" }, // mobile: full width, desktop: smaller
          mx: "auto",
        }}
      >
        <Tabs
          value={tab}
          onChange={(_, val) => setTab(val)}
          textColor="primary"
          indicatorColor="primary"
          variant={isSm ? "scrollable" : "standard"} // scrollable on mobile
          scrollButtons={isSm ? "auto" : "off"}
          centered={!isSm} // center only on desktop
        >
          {galleryCategories.map((cat) => (
            <Tab
              key={cat.label}
              label={cat.label}
              sx={{
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
                px: 3,
                py: 1,
                "&.Mui-selected": {
                  bgcolor: "primary.main",
                  color: "#fff",
                },
              }}
            />
          ))}
        </Tabs>
      </Paper>


      {/* Gallery Grid */}
      <Grid container spacing={3}>
        {gridImages.map((imgId) => (
          <Grid item xs={12} sm={6} md={4} key={imgId}>
            <Box
              component="img"
              src={`https://picsum.photos/600/400?random=${imgId}`}
              alt={`Gallery ${imgId}`}
              sx={{
                width: "100%",
                borderRadius: 3,
                boxShadow: "0 4px 32px rgba(0,0,0,0.1)",
                objectFit: "cover",
                height: { xs: 200, sm: 220, md: 260 },
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
                },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
