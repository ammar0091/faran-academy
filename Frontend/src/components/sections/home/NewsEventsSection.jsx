import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { homeUi } from "../../../constants/home/modernHomeData";
import { homeSectionSx, homeTitleSx } from "./HomePrimitives";

function NewsEventsSection({ updates }) {
  return (
    <Box component="section" sx={{ ...homeSectionSx, bgcolor: homeUi.low }}>
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "center" }}
          gap={2}
          sx={{ mb: { xs: 5, md: 9 } }}
        >
          <Typography sx={{ ...homeTitleSx, fontSize: { xs: 30, md: 50 } }}>
            Latest Updates.
          </Typography>
          <Button
            component={Link}
            to="/newsevents"
            sx={{
              display: { xs: "none", md: "inline-flex" },
              bgcolor: homeUi.primary,
              color: "#fff",
              px: 4,
              py: 1.5,
              borderRadius: 3,
              fontWeight: 900,
              "&:hover": { bgcolor: homeUi.primaryContainer },
            }}
          >
            All News
          </Button>
        </Stack>

        <Stack gap={2}>
          {updates.map((item) => (
            <Box
              key={item.title}
              component={Link}
              to="/newsevents"
              sx={{
                textDecoration: "none",
                bgcolor: "#fff",
                borderRadius: 7,
                p: { xs: 2, md: 4 },
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: { xs: 3, md: 6 },
                color: homeUi.text,
                transition: "220ms ease",
                "&:hover": {
                  bgcolor: "rgba(254,179,22,0.1)",
                },
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                loading="lazy"
                sx={{
                  width: { xs: "100%", md: 320 },
                  height: { xs: 210, md: 210 },
                  objectFit: "cover",
                  borderRadius: 5,
                  flexShrink: 0,
                }}
              />
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  sx={{
                    color: homeUi.gold,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    fontSize: 13,
                    mb: 1.5,
                  }}
                >
                  {item.date}
                </Typography>
                <Typography
                  component="h3"
                  sx={{
                    color: homeUi.primary,
                    fontWeight: 700,
                    fontSize: { xs: 18, md: 25 },
                    lineHeight: 1.15,
                    mb: 1.5,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography sx={{ color: homeUi.muted, fontSize: { xs: 16, md: 18 }, lineHeight: 1.55 }}>
                  {item.description}
                </Typography>
              </Box>
              <ArrowForwardIcon
                sx={{
                  color: "rgba(0,67,121,0.24)",
                  fontSize: 54,
                  display: { xs: "none", md: "block" },
                }}
              />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default React.memo(NewsEventsSection);
