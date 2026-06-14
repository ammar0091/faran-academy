import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import PublicIcon from "@mui/icons-material/Public";

import { homeImages, homeUi, valueCards } from "../../../constants/home/modernHomeData";
import {
  ImageCard,
  PrimaryButton,
  homeEyebrowSx,
  homeSectionSx,
  homeTitleSx,
} from "./HomePrimitives";

const valueIcons = {
  bolt: <BoltIcon />,
  public: <PublicIcon />,
};

function AboutSection() {
  return (
    <Box component="section" sx={{ ...homeSectionSx, bgcolor: "#fff" }}>
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 7, lg: 10 }} alignItems="center">
          <Grid item xs={12} lg={6} maxWidth={620}>
            <Box
              sx={{
                position: "relative",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 3,
              }}
            >
              <ImageCard
                src={homeImages.students}
                alt="Students at Faran Academy"
                sx={{ height: { xs: 270, md: 400 }, mt: { xs: 5, md: 8 } }}
              />
              <ImageCard
                src={homeImages.lab}
                alt="Faran Academy learning lab"
                sx={{ height: { xs: 270, md: 400 } }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} lg={6} maxWidth={500}> 
            <Typography sx={homeEyebrowSx}>Academic Excellence</Typography>
            <Typography
              component="h2"
              sx={{
                ...homeTitleSx,
                color: homeUi.primaryContainer,
                fontSize: { xs: 28, md: 50 },
                mb: 4,
              }}
            >
              Rooted in Tradition, Aiming for the Future.
            </Typography>
            <Typography
              sx={{
                color: homeUi.muted,
                fontSize: { xs: 17, md: 20 },
                lineHeight: 1.65,
                mb: 4,
              }}
            >
              Faran Academy has been a beacon of educational excellence for over two decades.
              We believe in nurturing not just the mind, but the character of every student.
            </Typography>

            {valueCards.map((item) => (
              <Stack
                key={item.title}
                direction="row"
                gap={2}
                sx={{
                  p: 2.5,
                  borderRadius: 5,
                  "&:hover": { bgcolor: "rgba(0,67,121,0.05)" },
                }}
              >
                <Box sx={{ color: homeUi.primary, pt: 0.3 }}>{valueIcons[item.icon]}</Box>
                <Box>
                  <Typography sx={{ color: homeUi.primary, fontWeight: 900, fontSize: 20 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: homeUi.muted }}>{item.body}</Typography>
                </Box>
              </Stack>
            ))}

            <Box sx={{ mt: 4 }}>
              <PrimaryButton to="/about" variant="gold">
                Discover Our Values
              </PrimaryButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default React.memo(AboutSection);
