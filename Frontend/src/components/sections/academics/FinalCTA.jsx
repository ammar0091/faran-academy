import React from "react";

import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Stack,
} from "@mui/material";

import {
  Section,
  SectionTag,
  MainHeading,
  Paragraph,
  ImageWrapper,
} from "./sharedStyles";

export default function HeroSection() {
  return (
    <Section sx={{ pt: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">

        <Grid
          container
          spacing={8}
          alignItems="center"
        >

          {/* LEFT */}

          <Grid item xs={12} md={6}>

            <Box sx={{ maxWidth: 540 }}>

              <SectionTag>
                Academics
              </SectionTag>

              <MainHeading
                sx={{
                  fontSize: {
                    xs: "42px",
                    md: "68px",
                  },
                  mb: 3,
                }}
              >
                Building future-ready learners through meaningful education
              </MainHeading>

              <Paragraph sx={{ mb: 3 }}>
                Our academic framework blends conceptual learning,
                creativity and practical exploration.
              </Paragraph>

              <Paragraph sx={{ mb: 4 }}>
                Students are encouraged to think critically,
                solve problems and grow confidently.
              </Paragraph>

              <Stack direction="row" spacing={2}>

                <Button
                  variant="contained"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: "999px",
                    textTransform: "none",
                    fontWeight: 700,
                    background: "#111827",

                    "&:hover": {
                      background: "#1f2937",
                    },
                  }}
                >
                  Explore Programs
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: "999px",
                    textTransform: "none",
                    fontWeight: 700,
                  }}
                >
                  Learn More
                </Button>

              </Stack>

            </Box>

          </Grid>

          {/* RIGHT */}

          <Grid item xs={12} md={6}>

            <ImageWrapper sx={{ maxWidth: 640 }}>

              <CardMedia
                component="img"
                image="https://images.unsplash.com/photo-1523050854058-8df90110e3a1?q=80&w=1600&auto=format&fit=crop"
                alt="Academics"
                sx={{
                  width: "100%",
                  height: {
                    xs: 320,
                    md: 500,
                  },
                  objectFit: "cover",
                }}
              />

            </ImageWrapper>

          </Grid>

        </Grid>

      </Container>
    </Section>
  );
}