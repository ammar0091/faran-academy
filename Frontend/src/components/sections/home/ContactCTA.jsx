import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { homeImages, homeUi } from "../../../constants/home/modernHomeData";
import { PrimaryButton, homeTitleSx } from "./HomePrimitives";

function ContactCTA() {
  return (
    <Box component="section" sx={{ py: { xs: 5, md: 8 }, px: { xs: 2.5, md: 8 } }}>
      <Container maxWidth="xl">
        <Grid
          container
          sx={{
            // bgcolor: homeUi.gold,
            borderRadius: { xs: 6, md: 10 },
            overflow: "hidden",
            boxShadow: "0 28px 70px rgba(0,67,121,0.18)",
          }}
        >
          <Grid item xs={12} lg={6} maxWidth={1/2}>
            <Box
              sx={{
                bgcolor: homeUi.primary,
                color: "#fff",
                p: { xs: 4, md: 8 },
                minHeight: { md: 520 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ ...homeTitleSx, color: "#fff", fontSize: { xs: 35, md: 60 }, mb: 4 }}>
                Start Your <br />
                <Box component="span" sx={{ color: homeUi.gold }}>
                  Journey.
                </Box>
              </Typography>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.82)",
                  fontSize: { xs: 17, md: 20 },
                  lineHeight: 1.6,
                  mb: 5,
                }}
              >
                Have questions about admissions or want to schedule a personalized tour?
                Our team is here to help you every step of the way.
              </Typography>

              <Stack gap={3} sx={{ mb: 5 }}>
                <ContactFact icon={<LocationOnIcon />} text="Khankhanapur Panchu, Hisua - 805103" />
                <ContactFact icon={<CallIcon />} text="+91-8860917726" />
              </Stack>

              <PrimaryButton to="/contact" variant="gold">
                Contact Us Now
              </PrimaryButton>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box
              component="img"
              src={homeImages.campus}
              alt="Faran Academy campus"
              loading="lazy"
              sx={{
                width: "100%",
                height: "100%",
                minHeight: { xs: 320, md: 520 },
                display: "block",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function ContactFact({ icon, text }) {
  return (
    <Stack direction="row" gap={2} alignItems="center">
      <Box
        sx={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          bgcolor: homeUi.gold,
          color: homeUi.primary,
          display: "grid",
          placeItems: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </Box>
      <Typography sx={{ fontWeight: 900, fontSize: 18 }}>{text}</Typography>
    </Stack>
  );
}

export default React.memo(ContactCTA);
