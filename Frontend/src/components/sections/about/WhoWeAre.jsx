import React from "react";

import {
  Box,
  Card,
  CardMedia,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

export default function WhoWeAre() {
  const features = [
    "Project-Based Curriculum",
    "Personalized Learning Pathways",
    "Mental Health & Wellbeing Programs",
    "Global Exchange Opportunities",
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 0 } }}>
      <Container>
        <Grid
          container
          spacing={6}
          alignItems="center"
          sx={{
            flexWrap: {
              xs: "wrap",
              md: "nowrap",
            },
          }}
        >
          {/* LEFT IMAGE */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                height: "100%",
              }}
            >
              <CardMedia
                component="img"
                image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80"
                alt="Campus Library"
                sx={{
                  width: "100%",
                  height: { xs: 260, md: 380 },
                  objectFit: "cover",
                  display: "block",
                  boxShadow:
                    "0 6px 20px rgba(0,0,0,0.1)",
                  transition:
                    "transform 0.4s ease, box-shadow 0.4s ease",

                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow:
                      "0 10px 28px rgba(0,0,0,0.2)",
                  },
                }}
              />
            </Card>
          </Grid>

          {/* RIGHT CONTENT */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                maxWidth: {
                  xs: "100%",
                  md: 560,
                },
              }}
            >
              <Typography
                variant="overline"
                color="primary"
                fontWeight={800}
                letterSpacing={2}
                mb={1}
                display="block"
              >
                Who We Are
              </Typography>

              <Typography
                variant="h4"
                fontWeight={800}
                mb={2}
              >
                A people-first academy with a track
                record of impact
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  lineHeight: 1.8,
                  mb: 2,
                }}
              >
                For over three decades we have
                cultivated a culture where curiosity is
                celebrated and learning is intentionally
                scaffolded. We combine research-backed
                pedagogy with a high-touch mentoring
                system so every child gets seen,
                challenged and supported.
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 3 }}
              >
                <strong>How we do it:</strong> Through
                project cycles, mentorship, and
                cross-disciplinary studios that simulate
                real-life challenges. Students graduate
                not only with knowledge, but with the
                habits to learn independently and lead
                ethically.
              </Typography>

              <Divider
                sx={{
                  width: 80,
                  mb: 3,
                  borderColor: "primary.main",
                }}
              />

              <Stack spacing={2}>
                {features.map((item) => (
                  <Box
                    key={item}
                    sx={{
                      display: "flex",
                      gap: 2,
                      alignItems: "flex-start",
                    }}
                  >
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        mt: 0.8,
                        background: "primary.main",
                        borderRadius: 1,
                      }}
                    />

                    <Typography
                      variant="body2"
                      color="text.primary"
                      sx={{ fontWeight: 600 }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}