import React from "react";
import { Box, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";

import { alumniCards, homeUi } from "../../../constants/home/modernHomeData";
import { PrimaryButton, homeSectionSx, homeTitleSx } from "./HomePrimitives";

function AlumniSection({ alumni }) {
  const cards = alumniCards.map((card, index) =>
    index === 1 && alumni?.[0]?.story ? { ...card, body: alumni[0].story } : card
  );

  return (
    <Box component="section" sx={{ ...homeSectionSx, bgcolor: homeUi.primaryContainer }}>
      <Container maxWidth="xl">
        <Typography sx={{ ...homeTitleSx, color: "#fff", fontSize: { xs: 42, md: 64 }, mb: 7 }}>
          Global Network.
        </Typography>
        <Grid container spacing={4}>
          {cards.map((item) => (
            <Grid item xs={12} lg={4} key={item.title}  maxWidth={360}>
              <Box
                sx={{
                  bgcolor: item.featured ? homeUi.gold : "rgba(255,255,255,0.06)",
                  border: item.featured ? "none" : "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 8,
                  p: { xs: 4, md: 5 },
                  minHeight: 300,
                  color: item.featured ? homeUi.primary : "#fff",
                }}
              >
                <Typography
                  sx={{
                    color: item.featured ? homeUi.primary : homeUi.gold,
                    fontSize: 30,
                    fontWeight: 900,
                    mb: 2,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    color: item.featured ? "rgba(0,67,121,0.78)" : "rgba(255,255,255,0.78)",
                    fontSize: 18,
                    lineHeight: 1.55,
                    mb: 4,
                  }}
                >
                  {item.body}
                </Typography>

                {item.tags && (
                  <Stack direction="row" gap={1} flexWrap="wrap">
                    {item.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        sx={{ bgcolor: "rgba(255,255,255,0.12)", color: "#fff", fontWeight: 800 }}
                      />
                    ))}
                  </Stack>
                )}

                {item.featured && <PrimaryButton to="/about">Read Stories</PrimaryButton>}
                {item.icon && (
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      bgcolor: "rgba(255,255,255,0.2)",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <GroupsIcon />
                  </Box>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default React.memo(AlumniSection);
