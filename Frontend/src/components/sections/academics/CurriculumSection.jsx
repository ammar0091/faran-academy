import React from "react";

import {
  Box,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import {
  MenuBook,
  School,
} from "@mui/icons-material";

import {
  Section,
  SectionTag,
  MainHeading,
  Paragraph,
  ImageWrapper,
} from "./sharedStyles";

const curriculumData = [
  {
    title: "Foundational Academics",
    desc: "Strong conceptual learning across core subjects.",
    icon: <MenuBook sx={{ fontSize: 42 }} />,
  },
  {
    title: "Experiential Learning",
    desc: "Hands-on projects and interdisciplinary learning.",
    icon: <School sx={{ fontSize: 42 }} />,
  },
];

export default function CurriculumSection() {
  return (
    <Section>
      <Container maxWidth="lg">

        <Grid container spacing={8} alignItems="center">

          {/* IMAGE */}

          <Grid item xs={12} md={6}>

            <ImageWrapper>

              <CardMedia
                component="img"
                image="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop"
                alt="Curriculum"
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

          {/* CONTENT */}

          <Grid item xs={12} md={6}>

            <Box sx={{ maxWidth: 520 }}>

              <SectionTag>
                Curriculum
              </SectionTag>

              <MainHeading
                sx={{
                  fontSize: {
                    xs: "36px",
                    md: "56px",
                  },
                  mb: 3,
                }}
              >
                An academic experience beyond textbooks
              </MainHeading>

              <Paragraph sx={{ mb: 5 }}>
                Our curriculum integrates academic excellence
                with creativity and real-world learning.
              </Paragraph>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>

                {curriculumData.map((item, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      display: "flex",
                      gap: 3,
                    }}
                  >

                    <Box sx={{ color: "#111827" }}>
                      {item.icon}
                    </Box>

                    <Box>

                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          mb: 1,
                          color: "#111827",
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Paragraph>
                        {item.desc}
                      </Paragraph>

                    </Box>

                  </Box>
                ))}

              </Box>

            </Box>

          </Grid>

        </Grid>

      </Container>
    </Section>
  );
}