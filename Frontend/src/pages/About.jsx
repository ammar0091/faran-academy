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
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          py: { xs: 6, md: 10 },
          px: { xs: 2, md: 0 },
          background: `
      radial-gradient(circle at top left, rgba(59,130,246,0.10), transparent 28%),
      radial-gradient(circle at bottom right, rgba(99, 156, 241, 0.08), transparent 30%),
      linear-gradient(180deg, #f8fbff 0%, #f3f7fc 100%)`,
        }}
      >


        <Box
          sx={{
            position: "absolute",
            bottom: -160,
            right: -100,
            width: 420,
            height: 320,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.14) 0%, rgba(99,102,241,0) 72%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Grid
            container
            spacing={6}
            alignItems="center"
            sx={{
              flexWrap: { xs: "wrap", md: "nowrap" },
            }}
          >
            {/* LEFT CONTENT */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  maxWidth: { xs: "100%", md: 620 },
                }}
              >
                {/* Badge */}
                <Typography
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    px: 1.5,
                    py: 0.8,
                    mb: 3,
                    borderRadius: "999px",
                    bgcolor: "rgba(255,255,255,0.65)",
                    border: "1px solid rgba(255,255,255,0.7)",
                    backdropFilter: "blur(10px)",
                    color: "primary.main",
                    fontWeight: 700,
                    fontSize: 12,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    boxShadow: "0 8px 24px rgba(15,23,42,0.06)",
                  }}
                >
                  Our Philosophy
                </Typography>

                {/* Heading */}
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: {
                      xs: "2rem",
                      sm: "2.5rem",
                      md: "3rem",
                    },
                    lineHeight: 1.02,
                    fontWeight: 900,
                    letterSpacing: "-0.04em",
                    color: "#0f172a",
                    mb: 3,
                  }}
                >
                  Education that evolves with every learner
                </Typography>

                {/* Description */}
                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(15,23,42,0.72)",
                    fontSize: {
                      xs: "1rem",
                      md: "1.08rem",
                    },
                    lineHeight: 1.9,
                    mb: 4,
                  }}
                >
                  We design learning experiences that are intentionally sequenced —
                  each stage building toward independence. Through mixed-age
                  collaboration, reflection cycles, and public exhibitions, students
                  continuously strengthen critical thinking, adaptability, and
                  self-direction.
                </Typography>

                {/* Divider */}
                <Divider
                  sx={{
                    width: 72,
                    borderColor: "rgba(59,130,246,0.45)",
                    borderBottomWidth: 2,
                    mb: 4,
                  }}
                />

                {/* Outcomes */}
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#0f172a",
                    mb: 2.5,
                    fontSize: "0.95rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Outcomes we actively measure
                </Typography>

                <Stack spacing={2}>
                  {[
                    "Academic growth through project and standardized outcomes",
                    "Social-emotional competencies including empathy and self-management",
                    "Real-world readiness through internships and community initiatives",
                  ].map((item) => (
                    <Stack
                      key={item}
                      direction="row"
                      spacing={1.8}
                      alignItems="flex-start"
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          bgcolor: "primary.main",
                          mt: "10px",
                          flexShrink: 0,
                          boxShadow: "0 0 0 6px rgba(59,130,246,0.12)",
                        }}
                      />

                      <Typography
                        sx={{
                          color: "rgba(15,23,42,0.82)",
                          lineHeight: 1.8,
                          fontSize: "0.98rem",
                        }}
                      >
                        {item}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </Grid>

            {/* RIGHT CARDS */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 640,
                  ml: "auto",
                }}
              >
                <Grid container spacing={3}>
                  {philosophyCards.map((c, index) => (
                    <Grid
                      item
                      xs={10}
                      sm={6}
                      key={c.title}
                      sx={{
                        mt: {
                          md: index % 2 !== 0 ? 4 : 0,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          height: "100%",
                          borderRadius: "28px",
                          p: "1px",

                          overflow: "hidden",
                          transition: "all 0.4s ease",

                          "&:hover": {
                            boxShadow:
                              "0 30px 80px rgba(15,23,42,0.14), 0 10px 30px rgba(59,130,246,0.10)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            position: "relative",
                            height: "100%",
                            borderRadius: "27px",
                            p: 3.5,
                            backdropFilter: "blur(18px)",
                            background:
                              "linear-gradient(180deg, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.55) 100%)",
                            border: "1px solid rgba(255,255,255,0.6)",
                            boxShadow: `
                        inset 0 1px 0 rgba(255,255,255,0.8),
                        0 10px 30px rgba(15,23,42,0.06)
                      `,
                          }}
                        >


                          <Stack spacing={1.5}>
                            {/* Icon */}
                            <Box
                              sx={{
                                width: 60,
                                height: 60,
                                borderRadius: "20px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background:
                                  "linear-gradient(135deg, rgba(59,130,246,0.16), rgba(99,102,241,0.10))",
                                border: "1px solid rgba(255,255,255,0.7)",
                                backdropFilter: "blur(12px)",
                                boxShadow: `
                            inset 0 1px 0 rgba(255,255,255,0.8),
                            0 10px 25px rgba(59,130,246,0.10)
                          `,
                                transition: "all 0.35s ease",

                                "& svg": {
                                  fontSize: 28,
                                  color: "#2563eb",
                                  transition: "transform 0.35s ease",
                                },

                                ".MuiBox-root:hover & svg": {
                                  transform: "scale(1.08)",
                                },
                              }}
                            >
                              {c.icon}
                            </Box>

                            {/* Content */}
                            <Box>
                              <Typography
                                sx={{
                                  fontWeight: 800,
                                  color: "#0f172a",
                                  fontSize: "1.08rem",
                                  letterSpacing: "-0.02em",

                                }}
                              >
                                {c.title}
                              </Typography>

                              <Typography
                                variant="body2"
                                sx={{
                                  color: "rgba(15,23,42,0.68)",
                                  lineHeight: 1.8,
                                  fontSize: "0.95rem",
                                }}
                              >
                                {c.text}
                              </Typography>
                            </Box>
                          </Stack>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Divider sx={{ borderColor: "rgba(0,0,0,0.04)" }} />

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
   <Box
  sx={{
    position: "relative",
    py: { xs: 6, md: 10 },
    px: { xs: 2, md: 0 },
    overflow: "hidden",
    background:
      "linear-gradient(180deg, #f8fbff 0%, #ffffff 50%, #f5f7ff 100%)",
  }}
>
  {/* Background Glow */}
  <Box
    sx={{
      position: "absolute",
      top: -100,
      right: -100,
      width: 300,
      height: 300,
      borderRadius: "50%",
      background: "rgba(99,102,241,0.12)",
      filter: "blur(100px)",
      zIndex: 0,
    }}
  />

  <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
    <Grid
      container
      spacing={6}
      alignItems="center"
      sx={{
        flexWrap: { xs: "wrap", md: "nowrap" },
      }}
    >
      {/* LEFT SIDE CONTENT */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            maxWidth: { xs: "100%", md: 620 },
          }}
        >
          {/* Badge */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              px: 2,
              py: 1,
              mb: 3,
              borderRadius: "999px",
              background: "rgba(99,102,241,0.08)",
              border: "1px solid rgba(99,102,241,0.15)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Typography
              sx={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 1,
                color: "#005baa",
                textTransform: "uppercase",
              }}
            >
              Campus & Facilities
            </Typography>
          </Box>

          {/* Heading */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: "-1.5px",
              color: "#0f172a",
              mb: 3,
              fontSize: {
                xs: "2.3rem",
                md: "3.5rem",
              },
            }}
          >
            Spaces built for
   
              modern learning
       
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              color: "#475569",
              lineHeight: 1.9,
              fontSize: "1.02rem",
              mb: 4,
              maxWidth: 560,
            }}
          >
            Thoughtfully designed classrooms, innovation labs, and
            collaborative environments that encourage creativity,
            exploration, and hands-on learning experiences.
          </Typography>

          {/* Feature Points */}
          <Stack spacing={2}>
            {[
              "Industry-grade smart classrooms",
              "Creative collaboration spaces",
              "Student-first wellness environment",
            ].map((item) => (
              <Box
                key={item}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  p: 2,
                  borderRadius: "18px",
                  background: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(15,23,42,0.06)",
                  backdropFilter: "blur(10px)",
                  transition: "all .3s ease",

           
              
                }}
              >
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#005baa",
                    flexShrink: 0,
                  }}
                />

                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "#0f172a",
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Stack>

          {/* CTA */}
          <Button
            variant="contained"
            sx={{
              mt: 5,
              px: 4,
              py: 1.6,
              borderRadius: "16px",
              textTransform: "none",
              fontWeight: 700,
              fontSize: "1rem",
  
            }}
          >
            Explore Campus
          </Button>
        </Box>
      </Grid>

      {/* RIGHT SIDE GRID */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            width: "100%",
            maxWidth: 560,
            ml: "auto",
          }}
        >
          <Grid container spacing={3}>
            {facilities.map((f, index) => (
              <Grid item xs={12} sm={6} key={f.title}>
                <Card
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "28px",
                    background: "rgba(255,255,255,0.7)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.5)",
                    boxShadow: "0 10px 40px rgba(15,23,42,0.06)",
                    transition: "all .5s ease",
                    cursor: "pointer",

                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow:
                        "0 30px 60px rgba(15,23,42,0.12)",
                    },

                    "&:hover img": {
                      transform: "scale(1.08)",
                    },
                  }}
                >
                  {/* Overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(15,23,42,0.75), transparent 65%)",
                      zIndex: 1,
                    }}
                  />

                  {/* Image */}
                  <Box
                    component="img"
                    src={f.img}
                    alt={f.title}
                    sx={{
                      width: "100%",
                      height: index === 0 ? 340 : 280,
                      objectFit: "cover",
                      transition: "transform .7s ease",
                    }}
                  />

                  {/* Content */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 3,
                      zIndex: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        fontWeight: 800,
                        fontSize: "1.15rem",
                        mb: 1,
                      }}
                    >
                      {f.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "rgba(255,255,255,0.82)",
                        fontSize: "0.92rem",
                        lineHeight: 1.7,
                      }}
                    >
                      {f.desc}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
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
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          py: { xs: 7, md: 11 },
          px: { xs: 2, md: 0 },

          background:
            "linear-gradient(135deg,#003f7d 0%,#005baa 40%,#0094d9 100%)",

          color: "#fff",
        }}
      >
        {/* BACKGROUND GLOW */}
        <Box
          sx={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            filter: "blur(20px)",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: -100,
            left: -80,
            width: 240,
            height: 240,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.06)",
            filter: "blur(10px)",
          }}
        />

        <Container maxWidth="lg">
          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              textAlign: "center",
              maxWidth: 900,
              mx: "auto",
            }}
          >
            {/* SMALL LABEL */}
            <Typography
              variant="overline"
              sx={{
                letterSpacing: 3,
                fontWeight: 800,
                opacity: 0.9,
              }}
            >
              JOIN OUR COMMUNITY
            </Typography>

            {/* HEADING */}
            <Typography
              variant="h3"
              fontWeight={900}
              sx={{
                mt: 1.5,
                mb: 2,
                lineHeight: 1.2,

                fontSize: {
                  xs: "2rem",
                  md: "3.2rem",
                },
              }}
            >
              Be Part of the Faran Story
            </Typography>

            {/* DESCRIPTION */}
            <Typography
              variant="body1"
              sx={{
                maxWidth: 760,
                mx: "auto",
                mb: 5,
                opacity: 0.92,
                lineHeight: 1.9,
                fontSize: {
                  xs: "0.98rem",
                  md: "1.08rem",
                },
              }}
            >
              If you value learning that balances curiosity, resilience and
              real-world application, come visit us. Schedule a campus tour or
              speak with our admissions team to learn how we partner with families
              for long-term success.
            </Typography>

            {/* BUTTONS */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Link
                to="/contact"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    px: 5,
                    py: 1.6,
                    borderRadius: 3,
                    fontWeight: 800,
                    fontSize: "0.95rem",

                    bgcolor: "#fff",
                    color: "#005baa",

                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",

                    transition: "all .3s ease",

                    "&:hover": {
                      bgcolor: "#f4f8ff",
                      transform: "translateY(-3px)",
                      boxShadow: "0 14px 35px rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  Contact Admissions
                </Button>
              </Link>

              <Link
                to="/visit"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 4.5,
                    py: 1.5,
                    borderRadius: 3,
                    fontWeight: 700,
                    fontSize: "0.95rem",

                    color: "#fff",

                    borderColor: "rgba(255,255,255,0.3)",
                    background: "rgba(255,255,255,0.06)",

                    backdropFilter: "blur(10px)",

                    transition: "all .3s ease",

                    "&:hover": {
                      borderColor: "#fff",
                      background: "rgba(255,255,255,0.12)",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
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
