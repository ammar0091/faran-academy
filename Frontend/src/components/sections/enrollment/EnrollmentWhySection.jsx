import React from "react";
import { Box, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

import { enrollmentUi, whyEnrollmentCards } from "../../../constants/enrollment/enrollmentData";

function EnrollmentWhySection() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 14 } , px: { xs: 2.5, md: 8 }}}>
      <Container maxWidth="xl">
        <Box sx={{ mb: 6 }}>
          <Typography
            component="h2"
            sx={{
              color: enrollmentUi.primary,
              fontSize: { xs: 36, md: 44 },
              fontWeight: 900,
              mb: 2,
            }}
          >
            Why Faran Academy?
          </Typography>
          <Box sx={{ width: 96, height: 6, bgcolor: enrollmentUi.gold, borderRadius: 999 }} />
        </Box>

        <Grid container spacing={3}>
          {whyEnrollmentCards.map((card) => (
            <Grid item xs={12} md={card.variant === "wide" ? 8 : 4} key={card.title}>
              {card.variant === "gold" ? <GoldCard card={card} /> : <WideCard card={card} />}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

function WideCard({ card }) {
  return (
    <Box
      sx={{
        bgcolor: enrollmentUi.low,
        border: `1px solid ${enrollmentUi.outline}55`,
        borderRadius: 3,
        p: { xs: 3, md: 4 },
        minHeight: 310,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      maxWidth={750}
    >
      <Box>
        <MilitaryTechIcon sx={{ color: enrollmentUi.primary, fontSize: 44, mb: 2 }} />
        <Typography sx={{ fontSize: 28, fontWeight: 900, mb: 2 }}>{card.title}</Typography>
        <Typography sx={{ color: enrollmentUi.muted, fontSize: 17, lineHeight: 1.65, maxWidth: 620 }}>
          {card.body}
        </Typography>
      </Box>
      <Stack direction="row" gap={2} flexWrap="wrap" sx={{ mt: 4 }}>
        {card.tags.map((tag) => (
          <Chip key={tag} label={tag} sx={{ bgcolor: "#fff", color: enrollmentUi.primary, fontWeight: 900 }} />
        ))}
      </Stack>
    </Box>
  );
}

function GoldCard({ card }) {
  return (
    <Box
      sx={{
        bgcolor: enrollmentUi.gold,
        color: enrollmentUi.goldText,
        borderRadius: 3,
        p: { xs: 3, md: 4 },
        minHeight: 310,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
      maxWidth={350}
    >
      <LightbulbIcon
        sx={{
          position: "absolute",
          right: -28,
          bottom: -28,
          fontSize: 130,
          opacity: 0.12,
        }}
      />
      <Typography sx={{ fontSize: 28, fontWeight: 900, mb: 3 }}>{card.title}</Typography>
      <Typography sx={{ fontSize: 17, lineHeight: 1.65 }}>{card.body}</Typography>
      <Stack direction="row" alignItems="center" gap={1} sx={{ mt: "auto", fontWeight: 900 }}>
        Learn More <ArrowForwardIcon />
      </Stack>
    </Box>
  );
}

export default React.memo(EnrollmentWhySection);
