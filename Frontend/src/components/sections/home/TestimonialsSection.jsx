import React from "react";
import { Avatar, Box, Container, Grid, Stack, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import { homeUi, testimonials } from "../../../constants/home/modernHomeData";
import { homeSectionSx, homeTitleSx } from "./HomePrimitives";

function TestimonialsSection() {
  return (
    <Box component="section" sx={{ ...homeSectionSx, bgcolor: homeUi.bg }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            ...homeTitleSx,
            fontSize: { xs: 42, md: 54 },
            textAlign: "center",
            mb: { xs: 7, md: 11 },
          }}
        >
          Community Voices.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {testimonials.map((item, index) => (
            <Grid item xs={12} md={6} key={item.name}  maxWidth={520} >
              <Box
                sx={{
                  position: "relative",
                  bgcolor: item.dark ? homeUi.primary : "#fff",
                  color: item.dark ? "#fff" : homeUi.text,
                  border: item.dark ? "none" : `1px solid ${homeUi.outline}`,
                  borderRadius: 8,
                  p: { xs: 4, md: 6 },
                  boxShadow: "0 24px 60px rgba(0,67,121,0.12)",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: -24,
                    left: 48,
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    bgcolor: homeUi.gold,
                    color: homeUi.goldText,
                    display: "grid",
                    placeItems: "center",
                    boxShadow: "0 12px 28px rgba(0,0,0,0.12)",
                  }}
                >
                  <StarIcon />
                </Box>
                <Typography
                  sx={{
                    color: item.dark ? "rgba(255,255,255,0.9)" : homeUi.muted,
                    fontSize: { xs: 18, md: 20 },
                    fontStyle: "italic",
                    lineHeight: 1.65,
                    mb: 4,
                  }}
                >
                  "{item.quote}"
                </Typography>
                <Stack direction="row" gap={2} alignItems="center">
                  <Avatar
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: 3,
                      bgcolor: item.dark ? "#fff" : homeUi.primary,
                      color: item.dark ? homeUi.primary : "#fff",
                      fontWeight: 900,
                    }}
                  >
                    {item.initials}
                  </Avatar>
                  <Box>
                    <Typography
                      sx={{ color: item.dark ? "#fff" : homeUi.primary, fontWeight: 900, fontSize: 20 }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: homeUi.gold,
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        fontWeight: 900,
                        fontSize: 12,
                      }}
                    >
                      {item.role}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default React.memo(TestimonialsSection);
