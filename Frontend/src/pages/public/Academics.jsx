import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";

import {
  School,
  MenuBook,
  Computer,
  Science,
} from "@mui/icons-material";

import { styled } from "@mui/material/styles";

/* ---------------- STYLES ---------------- */

const Section = styled(Box)(({ theme }) => ({
  padding: "100px 0",
}));

const SectionTag = styled(Typography)(() => ({
  fontSize: "13px",
  letterSpacing: "3px",
  textTransform: "uppercase",
  color: "#7a6f5c",
  marginBottom: "20px",
  fontWeight: 500,
}));

const MainTitle = styled(Typography)(() => ({
  fontFamily: "Playfair Display, serif",
  fontWeight: 700,
  color: "#0b1736",
  lineHeight: 1.15,
}));

const StatCard = styled(Box)(() => ({
  border: "1px solid #d9b67a",
  borderRadius: "16px",
  padding: "28px",
  background: "#fff",
}));

const ProgramCard = styled(Card)(() => ({
  borderRadius: "18px",
  overflow: "hidden",
  boxShadow: "none",
  transition: "0.3s ease",

  "&:hover": {
    transform: "translateY(-8px)",
  },
}));

const InfraCard = styled(Card)(() => ({
  borderRadius: "16px",
  padding: "20px",
  boxShadow: "none",
  border: "1px solid #eee",
}));

/* ---------------- DATA ---------------- */

const stats = [
  {
    number: "99%",
    title: "EXAMINATION RESULT",
    text: "Consistent top-tier academic performance across all disciplines.",
  },
  {
    number: "50+",
    title: "EXPERT FACULTY",
    text: "Led by PhD holders and industry veterans from around the globe.",
  },
  {
    number: "100%",
    title: "STUDENT SUCCESS",
    text: "Comprehensive mentorship ensuring personal and academic growth.",
  },
];

const programs = [
  {
    title: "Primary",
    desc: "Building a strong foundation with inquiry-based learning and creative expression.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Middle",
    desc: "Fostering independence and critical thinking through diverse curriculum.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Senior",
    desc: "Advanced placement and specialized tracks preparing global leaders.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110e3a1?q=80&w=1200&auto=format&fit=crop",
  },
];

const infrastructure = [
  {
    icon: <Computer sx={{ fontSize: 42 }} />,
    title: "Smart Classes",
    desc: "Digitally enabled interactive classrooms equipped with immersive learning tools.",
  },
  {
    icon: <Science sx={{ fontSize: 42 }} />,
    title: "Science Labs",
    desc: "Advanced research facilities for Physics, Chemistry, and Biology.",
  },
  {
    icon: <MenuBook sx={{ fontSize: 42 }} />,
    title: "Library",
    desc: "A sanctuary of knowledge housing thousands of volumes and archives.",
  },
  {
    icon: <School sx={{ fontSize: 42 }} />,
    title: "Computer Labs",
    desc: "High-performance computing clusters dedicated to programming and AI.",
  },
];

/* ---------------- COMPONENT ---------------- */

export default function Academics() {
  return (
    <Box sx={{ background: "#f6f6f6" }}>

      {/* ================= PHILOSOPHY ================= */}

      <Section>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">

            <Grid item xs={12} md={6}>
              <SectionTag>
                OUR PHILOSOPHY
              </SectionTag>

              <MainTitle
                sx={{
                  fontSize: { xs: "42px", md: "64px" },
                  mb: 4,
                }}
              >
                A Legacy of Intellectual Rigor and Holistic Growth
              </MainTitle>

              <Typography
                sx={{
                  color: "#555",
                  lineHeight: 2,
                  fontSize: "17px",
                  mb: 3,
                }}
              >
                At Global Elite Academy, we believe that education extends
                beyond textbooks. Our philosophy is rooted in critical
                thinking, global citizenship, and excellence.
              </Typography>

              <Typography
                sx={{
                  color: "#555",
                  lineHeight: 2,
                  fontSize: "17px",
                }}
              >
                Our multidisciplinary approach combines academic strength
                with modern technological proficiency, ensuring students
                are ready for life.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                }}
              >
                {stats.map((item, idx) => (
                  <StatCard key={idx}>
                    <Grid container spacing={3}>
                      <Grid item xs={4}>
                        <Typography
                          sx={{
                            fontFamily: "Playfair Display, serif",
                            fontSize: "58px",
                            fontWeight: 700,
                            color: "#0b1736",
                          }}
                        >
                          {item.number}
                        </Typography>
                      </Grid>

                      <Grid item xs={8}>
                        <Typography
                          sx={{
                            letterSpacing: "1px",
                            fontWeight: 600,
                            mb: 1,
                            color: "#0b1736",
                          }}
                        >
                          {item.title}
                        </Typography>

                        <Typography
                          sx={{
                            color: "#666",
                            lineHeight: 1.8,
                          }}
                        >
                          {item.text}
                        </Typography>
                      </Grid>
                    </Grid>
                  </StatCard>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* ================= PROGRAMS ================= */}

      <Section sx={{ pt: 0 }}>
        <Container maxWidth="lg">

          <Box sx={{ textAlign: "center", mb: 8 }}>
            <SectionTag>
              GLOBAL CURRICULUM
            </SectionTag>

            <MainTitle
              sx={{
                fontSize: { xs: "42px", md: "58px" },
              }}
            >
              Academic Programs
            </MainTitle>
          </Box>

          <Grid container spacing={4}>
            {programs.map((program, idx) => (
              <Grid item xs={12} md={4} key={idx}>

                <ProgramCard>
                  <Box
                    component="img"
                    src={program.image}
                    alt={program.title}
                    sx={{
                      width: "100%",
                      height: 260,
                      objectFit: "cover",
                    }}
                  />

                  <CardContent sx={{ p: 4 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: "Playfair Display, serif",
                        color: "#0b1736",
                        fontWeight: 700,
                        mb: 2,
                      }}
                    >
                      {program.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#666",
                        lineHeight: 1.9,
                        mb: 3,
                      }}
                    >
                      {program.desc}
                    </Typography>

                    <Button
                      sx={{
                        color: "#0b1736",
                        fontWeight: 700,
                        p: 0,
                      }}
                    >
                      LEARN MORE →
                    </Button>
                  </CardContent>
                </ProgramCard>

              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ================= INFRASTRUCTURE ================= */}

      <Section>
        <Container maxWidth="lg">

          <Box sx={{ textAlign: "center", mb: 8 }}>
            <SectionTag>
              LEARNING INFRASTRUCTURE
            </SectionTag>

            <MainTitle
              sx={{
                fontSize: { xs: "42px", md: "58px" },
              }}
            >
              World-Class Learning Environment
            </MainTitle>
          </Box>

          <Grid container spacing={4}>
            {infrastructure.map((item, idx) => (
              <Grid item xs={12} md={6} key={idx}>
                <InfraCard>
                  <Grid container spacing={3}>
                    <Grid item xs={2}>
                      <Box sx={{ color: "#0b1736" }}>
                        {item.icon}
                      </Box>
                    </Grid>

                    <Grid item xs={10}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontFamily: "Playfair Display, serif",
                          color: "#0b1736",
                          fontWeight: 700,
                          mb: 1,
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        sx={{
                          color: "#666",
                          lineHeight: 1.9,
                        }}
                      >
                        {item.desc}
                      </Typography>
                    </Grid>
                  </Grid>
                </InfraCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ================= CTA ================= */}

      <Section sx={{ pt: 0 }}>
        <Container maxWidth="lg">

          <Box
            sx={{
              background: "#efede9",
              borderRadius: "28px",
              textAlign: "center",
              py: 10,
              px: 4,
            }}
          >
            <MainTitle
              sx={{
                fontSize: { xs: "42px", md: "64px" },
                mb: 3,
              }}
            >
              Begin Your Academic Journey
            </MainTitle>

            <Typography
              sx={{
                color: "#666",
                maxWidth: "700px",
                mx: "auto",
                lineHeight: 2,
                mb: 5,
              }}
            >
              Join a community of scholars and leaders.
              Our admissions team is ready to guide you.
            </Typography>

            <Button
              variant="contained"
              sx={{
                background: "#071a44",
                borderRadius: "40px",
                px: 5,
                py: 2,
                fontWeight: 600,
                letterSpacing: "1px",

                "&:hover": {
                  background: "#0b245e",
                },
              }}
            >
              ADMISSION INQUIRY
            </Button>
          </Box>

        </Container>
      </Section>

    </Box>
  );
}