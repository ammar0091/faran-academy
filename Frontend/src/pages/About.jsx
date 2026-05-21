// src/pages/About.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Typography,
  Button,
  Divider,
  Stack,
} from "@mui/material";
import { philosophyCards, timeline, facilities } from "../constants/about/aboutData";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import Team from "../components/Team";
import Testimonial from "../components/Testimonial";

/* ---------- Reusable UI pieces ---------- */
function FrostCard({ children, sx = {}, ...props }) {
  return (
    <Card
      sx={{
        p: { xs: 2.5, md: 3.5 },
        borderRadius: 3,
        textAlign: "left",
        background: (theme) =>
          theme.palette.mode === "light"
            ? "rgba(255,255,255,0.88)"
            : "rgba(20,20,25,0.65)",
        backdropFilter: "blur(10px)",
        boxShadow: (theme) =>
          theme.palette.mode === "light"
            ? "0 8px 30px rgba(2,48,92,0.06)"
            : "0 8px 30px rgba(0,0,0,0.6)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Card>
  );
}

function IconCircle({ children }) {
  return (
    <Box
      sx={{
        width: 68,
        height: 68,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg,#ffd6d6 0%,#d0f0ff 100%)",
        mr: 2,
      }}
    >
      {children}
    </Box>
  );
}

/* ---------- Main Page Component ---------- */
export default function About() {
  return (
    <Box sx={{ bgcolor: "#f7fbff", color: "text.primary" }}>
      {/* HERO */}
      <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 0 } }}>
        <Container>
          <Grid
            container
            spacing={6}
            alignItems="center"
            sx={{ flexWrap: { xs: "wrap", md: "nowrap" } }}
          >
            {/* LEFT: Text */}
            <Grid item xs={12} md={6}>
              <Box sx={{ maxWidth: { xs: "100%", md: 520 } }}>
                <Typography
                  variant="overline"
                  color="primary"
                  fontWeight={800}
                  letterSpacing={2}
                  mb={1}
                  display="block"
                >
                  About Faran Academy
                </Typography>

                <Typography
                  variant="h3"
                  sx={{ fontWeight: 800, lineHeight: 1.02, mb: 2 }}
                >
                  Building curious minds and compassionate leaders since 1990
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontSize: { xs: 15, md: 16 }, lineHeight: 1.8, mb: 3 }}
                >
                  Faran Academy is a learning ecosystem where inquiry, creativity
                  and character intersect. We blend strong academic foundations
                  with project-driven learning so students learn to ask better
                  questions, collaborate deeply and apply knowledge to real
                  community problems.
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  <strong>Why we do it:</strong> We believe the future belongs to
                  people who can think critically and act compassionately. Our
                  programs are designed to cultivate those capacities from early
                  years through graduation.
                </Typography>

                <Stack direction="row" spacing={2}>
                  <Link to="/admissions" style={{ textDecoration: "none" }}>
                    <Button variant="contained" size="large" sx={{ px: 4, fontWeight: 800 }}>
                      Admissions
                    </Button>
                  </Link>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() =>
                      document
                        .getElementById("our-journey")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Our Journey
                  </Button>
                </Stack>
              </Box>
            </Grid>

            {/* RIGHT: Hero Image */}
            <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
              <Box sx={{ width: "100%", maxWidth: 640, borderRadius: 3, overflow: "hidden", boxShadow: 8 }}>
                <CardMedia
                  component="img"
                  image="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1600&q=80"
                  alt="Faran Academy"
                  sx={{
                    width: "100%",
                    height: { xs: 300, md: 420 },
                    objectFit: "cover",
                    display: "block",
                    borderRadius: 2,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider sx={{ borderColor: "rgba(0,0,0,0.04)" }} />

      {/* WHO WE ARE */}
      <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 0 } }}>
        <Container>
          <Grid container spacing={6} alignItems="center" sx={{ flexWrap: { xs: "wrap", md: "nowrap" } }}>
            {/* LEFT: Image */}
            <Grid item xs={12} md={6}>
              <Card sx={{ borderRadius: 3, overflow: "hidden", height: "100%" }}>
                <CardMedia
                  component="img"
                  image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80"
                  alt="Campus Library"
                  sx={{
                    width: "100%",
                    height: { xs: 260, md: 380 },
                    objectFit: "cover",
                    display: "block",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                    transition: "transform 0.4s ease, box-shadow 0.4s ease",
                    "&:hover": {
                      transform: "scale(1.03)",
                      boxShadow: "0 10px 28px rgba(0,0,0,0.2)",
                    },
                  }}
                />
              </Card>
            </Grid>

            {/* RIGHT: Text details */}
            <Grid item xs={12} md={6}>
              <Box sx={{ maxWidth: { xs: "100%", md: 560 } }}>
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

                <Typography variant="h4" fontWeight={800} mb={2}>
                  A people-first academy with a track record of impact
                </Typography>

                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 2 }}>
                  For over three decades we have cultivated a culture where curiosity is celebrated and learning is intentionally scaffolded. We combine research-backed pedagogy with a high-touch mentoring system so every child gets seen, challenged and supported.
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  <strong>How we do it:</strong> Through project cycles, mentorship, and cross-disciplinary studios that simulate real-life challenges. Students graduate not only with knowledge, but with the habits to learn independently and lead ethically.
                </Typography>

                <Divider sx={{ width: 80, mb: 3, borderColor: "primary.main" }} />

                <Stack spacing={2}>
                  {[
                    "Project-Based Curriculum",
                    "Personalized Learning Pathways",
                    "Mental Health & Wellbeing Programs",
                    "Global Exchange Opportunities",
                  ].map((p) => (
                    <Box key={p} sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                      <Box sx={{ width: 10, height: 10, mt: 0.8, background: "primary.main", borderRadius: 1 }} />
                      <Typography variant="body2" color="text.primary" sx={{ fontWeight: 600 }}>
                        {p}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider sx={{ borderColor: "rgba(0,0,0,0.04)" }} />

      {/* PHILOSOPHY GRID */}
      <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 0 }, bgcolor: "#f4f8fc" }}>
        <Container>
          <Grid container spacing={6} alignItems="stretch" sx={{ flexWrap: { xs: "wrap", md: "nowrap" } }}>
            {/* LEFT: Cards grid */}
            <Grid item xs={12} md={7} maxWidth={610}>
              <Grid container spacing={3}>
                {philosophyCards.map((c) => (
                  <Grid item xs={12} sm={6} key={c.title}>
                    <FrostCard sx={{ minHeight: 180 }}>
                      <Stack direction="row" spacing={2} alignItems="flex-start">
                        <IconCircle>{c.icon}</IconCircle>
                        <Box>
                          <Typography fontWeight={800}>{c.title}</Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                            {c.text}
                          </Typography>
                        </Box>
                      </Stack>
                    </FrostCard>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* RIGHT: Long descriptive text */}
            <Grid item xs={12} md={6}>
              <Box sx={{ maxWidth: { xs: "100%", md: 560 } }}>
                <Typography
                  variant="overline"
                  color="primary"
                  fontWeight={800}
                  letterSpacing={2}
                  mb={1}
                  display="block"
                >
                  Our Philosophy
                </Typography>
                <Typography variant="h4" fontWeight={800} mb={2}>
                  Education that adapts to every learner
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
                  We design learning experiences that are intentionally sequenced — each stage building towards independence. Through mixed-age collaboration, reflection cycles and public exhibitions, students continually practice critical thinking and self-regulation.
                </Typography>
                <Divider sx={{ width: 60, mb: 3, borderColor: "primary.main" }} />
                <Typography variant="body2" color="text.primary" sx={{ fontWeight: 600, mb: 2 }}>
                  Outcomes we track:
                </Typography>
                <Stack spacing={1}>
                  <Typography variant="body2">• Academic growth (standardized & project outcomes)</Typography>
                  <Typography variant="body2">• Social-emotional competencies (self-management, empathy)</Typography>
                  <Typography variant="body2">• Real-world application (community projects, internships)</Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider sx={{ borderColor: "rgba(0,0,0,0.04)" }} />

      {/* TIMELINE */}
      {/* TIMELINE */}
      <Box
        id="our-journey"
        sx={{
          py: { xs: 6, md: 10 },
          px: { xs: 2, md: 0 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container>
          {/* Section Heading */}
          <Box textAlign="center" mb={8}>
            <Typography
              variant="overline"
              color="primary"
              fontWeight={800}
              letterSpacing={2}
              display="block"
              mb={1}
            >
              Our Journey
            </Typography>

            <Typography variant="h4" fontWeight={900} mb={2}>
              Milestones that shaped our story
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                maxWidth: 760,
                mx: "auto",
                lineHeight: 1.8,
              }}
            >
              Every chapter in our journey reflects our commitment to better
              learning experiences, stronger student support, and meaningful
              community impact.
            </Typography>
          </Box>

          {/* Timeline Wrapper */}
          <Box
            sx={{
              position: "relative",
              maxWidth: 1200,
              mx: "auto",

              // center line
              "&::before": {
                content: '""',
                position: "absolute",
                left: { xs: 28, md: "50%" },
                top: 0,
                transform: { md: "translateX(-50%)" },
                width: "4px",
                height: "100%",
                borderRadius: 10,
                background:
                  "linear-gradient(180deg,#0088cc 0%, rgba(0,136,204,0.08) 100%)",
              },
            }}
          >
            <Stack spacing={{ xs: 5, md: 8 }}>
              {timeline.map((item, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <Box
                    key={item.year}
                    sx={{
                      position: "relative",
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        md: isLeft ? "flex-start" : "flex-end",
                      },
                    }}
                  >
                    {/* Timeline Dot */}
                    <Box
                      sx={{
                        position: "absolute",
                        left: { xs: 0, md: "50%" },
                        top: 28,
                        transform: { md: "translateX(-50%)" },
                        zIndex: 3,
                        width: 58,
                        height: 58,
                        borderRadius: "50%",
                        background:
                          "linear-gradient(135deg,#ffd6d6 0%,#d0f0ff 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 10px 24px rgba(0,0,0,0.12)",
                        border: "4px solid #fff",
                      }}
                    >
                      <CalendarMonthIcon color="primary" />
                    </Box>

                    {/* Timeline Card */}
                    <Box
                      sx={{
                        width: { xs: "100%", md: "calc(50% - 60px)" },
                        ml: { xs: 10, md: 0 },
                      }}
                    >
                      <FrostCard
                        sx={{
                          position: "relative",
                          overflow: "visible",
                          minHeight: 180,
                          transition:
                            "transform 0.35s ease, box-shadow 0.35s ease",

                          "&:hover": {
                            transform: "translateY(-4px)",
                            boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
                          },

                          // connector arrow
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 36,
                            width: 18,
                            height: 18,
                            background: "#fff",
                            transform: "rotate(45deg)",

                            ...(isLeft
                              ? {
                                right: -9,
                              }
                              : {
                                left: -9,
                              }),

                            display: { xs: "none", md: "block" },
                          },
                        }}
                      >
                        {/* Year */}
                        <Typography
                          variant="overline"
                          color="primary"
                          fontWeight={800}
                          letterSpacing={1.5}
                        >
                          {item.year}
                        </Typography>

                        {/* Title */}
                        <Typography
                          variant="h6"
                          fontWeight={800}
                          sx={{ mt: 1 }}
                        >
                          {item.title}
                        </Typography>

                        {/* Description */}
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            mt: 1.5,
                            lineHeight: 1.8,
                          }}
                        >
                          {item.descr}
                        </Typography>
                      </FrostCard>
                    </Box>
                  </Box>
                );
              })}
            </Stack>
          </Box>


        </Container>
      </Box>

      <Divider sx={{ borderColor: "rgba(0,0,0,0.04)" }} />

      {/* FACILITIES */}
      <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 0 }, bgcolor: "#fafcff" }}>
        <Container>
          <Grid container spacing={6} alignItems="stretch" sx={{ flexWrap: { xs: "wrap", md: "nowrap" } }}>
            <Grid item xs={12} md={7}>
              <Grid container spacing={3}>
                {facilities.map((f) => (
                  <Grid item xs={12} sm={6} key={f.title}>
                    <Card sx={{ borderRadius: 3, overflow: "hidden", minHeight: 260 }}>
                      <CardMedia
                        component="img"
                        image={f.img}
                        alt={f.title}
                        sx={{ height: 140, objectFit: "cover", transition: "transform 0.6s" }}
                      />
                      <CardContent>
                        <Typography fontWeight={800}>{f.title}</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                          {f.desc}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={12} md={6} >
              <Box>
                <Typography variant="overline" color="primary" fontWeight={800} letterSpacing={2} mb={1} display="block">
                  Campus & Facilities
                </Typography>
                <Typography variant="h4" fontWeight={800} mb={2}>
                  Purpose-built spaces that invite discovery
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
                  Our campus was planned to encourage movement between theory and practice — with labs, studios and flexible classrooms adjacent to collaborative lounges. Each space is intentionally designed to support inquiry, making, and reflection.
                </Typography>
                <Divider sx={{ width: 60, mb: 3, borderColor: "primary.main" }} />
                <Typography variant="body2" color="text.primary" sx={{ fontWeight: 600 }}>
                  Design priorities:
                </Typography>
                <Stack spacing={1} mt={1}>
                  <Typography variant="body2">• Flexible furniture for project work</Typography>
                  <Typography variant="body2">• Technology that supports creativity (not replaces it)</Typography>
                  <Typography variant="body2">• Spaces that promote student wellbeing</Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider sx={{ borderColor: "rgba(0,0,0,0.04)" }} />

      {/* PEOPLE */}
      <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 0 } }}>
        <Container>
          <Grid container spacing={6} alignItems="flex-start">
            {/* TEAM */}
            <Grid item xs={12} md={6} sx={{ minWidth: 0 }}>
              <Box>
                <Typography variant="overline" color="primary" fontWeight={800} letterSpacing={2} mb={1} display="block">
                  Our Leadership
                </Typography>
                <Typography variant="h5" fontWeight={800} mb={3}>
                  People who lead by example
                </Typography>
                <Paper sx={{ p: 2, borderRadius: 3 }}>
                  <Team />
                </Paper>
              </Box>
            </Grid>

            {/* TESTIMONIALS */}
            <Grid item xs={12} md={6} sx={{ minWidth: 0 }}>
              <Box>
                <Typography variant="overline" color="primary" fontWeight={800} letterSpacing={2} mb={1} display="block">
                  Voices of Our Community
                </Typography>
                <Typography variant="h5" fontWeight={800} mb={3}>
                  Stories from students & parents
                </Typography>
                <Paper sx={{ p: 2, borderRadius: 3 }}>
                  <Testimonial limit={6} />
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider sx={{ borderColor: "rgba(0,0,0,0.04)" }} />

      {/* FINAL CTA */}
      <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 0 }, background: "linear-gradient(120deg,#005baa 0%,#0088cc 100%)", color: "#fff" }}>
        <Container>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h4" fontWeight={900} mb={2}>
              Be Part of the Faran Story
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 760, mx: "auto", mb: 4, opacity: 0.95 }}>
              If you value learning that balances curiosity, resilience and real-world application, come visit us. Schedule a campus tour or speak with our admissions team to learn how we partner with families for long-term success.
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <Button variant="contained" size="large" sx={{ px: 5, fontWeight: 800, bgcolor: "secondary.main" }}>
                  Contact Admissions
                </Button>
              </Link>
              <Link to="/visit" style={{ textDecoration: "none" }}>
                <Button variant="outlined" size="large" sx={{ px: 4, color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}>
                  Schedule a Visit
                </Button>
              </Link>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
