import React from "react";

import {
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import {
  Computer,
  Science,
  MenuBook,
  School,
} from "@mui/icons-material";

import {
  Section,
  SectionTag,
  MainHeading,
  Paragraph,
  CardBox,
} from "./sharedStyles";

const infrastructureData = [
  {
    title: "Smart Classrooms",
    desc: "Interactive digital classrooms for immersive learning.",
    icon: <Computer sx={{ fontSize: 42 }} />,
  },
  {
    title: "Advanced Labs",
    desc: "Fully equipped modern science laboratories.",
    icon: <Science sx={{ fontSize: 42 }} />,
  },
  {
    title: "Modern Library",
    desc: "Curated academic resources and digital archives.",
    icon: <MenuBook sx={{ fontSize: 42 }} />,
  },
  {
    title: "Innovation Hub",
    desc: "Technology spaces for coding and robotics.",
    icon: <School sx={{ fontSize: 42 }} />,
  },
];

export default function InfrastructureSection() {
  return (
    <Section sx={{ background: "#f9fafb" }}>
      <Container maxWidth="lg">

        <Grid container spacing={8} alignItems="center">

          {/* LEFT */}

          <Grid item xs={12} md={5}>

            <Box sx={{ maxWidth: 500 }}>

              <SectionTag>
                Infrastructure
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
                Designed for immersive modern learning
              </MainHeading>

              <Paragraph>
                Our campus combines innovation,
                technology and collaborative learning spaces.
              </Paragraph>

            </Box>

          </Grid>

          {/* RIGHT */}

          <Grid item xs={12} md={7}>

            <Grid container spacing={3}>

              {infrastructureData.map((item, idx) => (
                <Grid item xs={12} sm={6} key={idx}>

                  <CardBox>

                    <Box sx={{ color: "#111827", mb: 2 }}>
                      {item.icon}
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 1.5,
                        color: "#111827",
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Paragraph>
                      {item.desc}
                    </Paragraph>

                  </CardBox>

                </Grid>
              ))}

            </Grid>

          </Grid>

        </Grid>

      </Container>
    </Section>
  );
}