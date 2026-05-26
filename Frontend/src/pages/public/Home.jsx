import React, { useEffect, useState } from "react";
// MUI Components
import {
  Box, Container, Typography,  Grid, Stack, Card, Avatar, Divider
} from "@mui/material";
// MUI Icons
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Router
// import { Link } from "react-router-dom";

// Assets
// import herologo from "../../assets/logo.png";

// API
import { getFaculty, getEvents, getNotifications } from "../../utils/api";

import {
  aboutFeatures,
  achievements,
  alumni as homeAlumni,
  alumniHighlights,
  campusGalleryImages,
  facultyHighlights,
  schoolStats,
} from "../../constants/home/homeData";

// Components
import Team from "../../components/Team";
import Testimonial from "../../components/Testimonial";
import HeroSection from "../../components/sections/home/HeroSection";
import AboutSection from "../../components/sections/home/AboutSection";
import ContactCTA from "../../components/sections/home/ContactCTA"
// import FacultySection from "../../components/sections/home/FacultySection";
import NewsEventsSection from "../../components/sections/home/NewsEventsSection";


// MAIN COMPONENT
export default function Home() {
  const [faculty, setFaculty] = useState([]);
  const [events, setEvents] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [facultyRes, eventsRes, notificationsRes] = await Promise.all([
          getFaculty(),
          getEvents(),
          getNotifications(),
        ]);

        setFaculty(facultyRes.data || []);
        setEvents(eventsRes.data || []);
        setNotifications(notificationsRes.data || []);
      } catch (error) {
        console.error("Error fetching homepage data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Box sx={{ textAlign: "center", py: 10 }}>
        <Typography variant="h5" color="primary">Loading homepage...</Typography>
      </Box>
    );
  }

  return (
    <Box component="main" sx={{ bgcolor: "#f6fafe" }}>
      <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 }, px: { xs: 1, md: 0 } }}>

        {/*  HERO SECTION */}
        <HeroSection achievements={achievements} />

        {/*  STATISTICS BAR */}
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          justifyContent="center"
          sx={{
            bgcolor: "#005baa",
            color: "#fff",
            borderRadius: { xs: 3, md: 4 },
            p: { xs: 3, md: 4 },
            mb: { xs: 4, md: 5 },
            position: "relative",
          }}
        >
          {/* Horizontal connecting line (desktop only) */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              top: 60,
              left: "12%",
              right: "12%",
              height: 2,
              bgcolor: "rgba(255,255,255,0.25)",
            }}
          />

          {schoolStats.map((item) => (
            <Grid item xs={6} sm={3} key={item.label}>
              <Box sx={{ textAlign: "center", position: "relative" }}>
                {/* Icon */}
                <Box
                  sx={{
                    width: 54,
                    height: 54,
                    mx: "auto",
                    mb: 1.2,
                    borderRadius: "50%",
                    bgcolor: "#ffffff",
                    color: "#005baa",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                    fontWeight: 700,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {item.icon}
                </Box>

                {/* Number */}
                <Typography
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: 28, sm: 32, md: 38 },
                    lineHeight: 1.1,
                  }}
                >
                  {item.num}
                </Typography>

                {/* Label */}
                <Typography
                  sx={{
                    mt: 0.5,
                    fontSize: { xs: 14, md: 16 },
                    opacity: 0.9,
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>



        {/*  ABOUT SECTION */}
        <AboutSection features={aboutFeatures} />



        {/* PRINCIPAL’S MESSAGE */}
        {faculty.length > 0 && (
          <Box sx={{ my: { xs: 4, md: 5 }, bgcolor: "#e8faff", p: 3, borderRadius: 6 }}>
            <Typography variant="h4" fontWeight={700} mb={2.5} color="primary.main" align="center">
              Principal's Message
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={4} alignItems="center" justifyContent="center">
              <Avatar src={faculty[0].image} sx={{ width: 90, height: 90, mx: "auto", boxShadow: 1 }} />
              <Typography variant="body1" sx={{ fontSize: 18, maxWidth: 620 }}>
                "{faculty[0].message || 'At Faran Academy, we focus on fostering passion, integrity, and resilience so every student finds their unique path.'}"
                <br />
                <b>- {faculty[0].name}, {faculty[0].role || faculty[0].designation}</b>
              </Typography>
            </Stack>
          </Box>
        )}

        {/*  FACULTY SECTION */}
        <Box
          sx={{
            position: "relative",
            py: { xs: 8, md: 12 },
            background: (theme) =>
              theme.palette.mode === "light"
                ? "linear-gradient(180deg, #f7fafc 0%, #eaf1ff 60%, #fff 100%)"
                : "linear-gradient(180deg, #232526 0%, #414345 100%)",
            boxShadow: { md: "0px 6px 40px rgba(20,40,110,0.07)" },
            borderRadius: { md: 6 },
            overflow: "visible",
          }}
        >
          <Container>
            <Grid
              container
              spacing={6}
              alignItems="flex-start"
              justifyContent="space-between"
              sx={{
                flexWrap: { xs: "wrap", md: "nowrap" },
              }}
            >
              {/* LEFT SIDE — Description & Highlights */}
              <Grid
                item
                xs={12}
                md={5}
                sx={{
                  flexShrink: 0,
                  maxWidth: { md: "42%" },
                }}
              >
                <Typography
                  variant="overline"
                  color="primary"
                  fontWeight={700}
                  letterSpacing={2}
                  mb={2}
                  display="block"
                  sx={{ textShadow: "0 2px 8px rgba(82,165,249,0.16)" }}
                >
                  Our Team
                </Typography>

                <Typography
                  variant="h4"
                  fontWeight={700}
                  color="text.primary"
                  mb={3}
                  sx={{ lineHeight: 1.22, textShadow: "0 1px 8px rgba(120,140,200,0.09)" }}
                >
                  Meet Our Faculty
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  mb={4}
                  sx={{
                    lineHeight: 1.8,
                    fontSize: { xs: 14, sm: 15, md: 16 },
                    maxWidth: { xs: 260, sm: 320, md: 420 }, // line length controlled
                    mx: "auto", // center horizontally
                    wordBreak: "break-word",
                  }}
                >
                  We take pride in our team of accomplished educators and mentors. Each faculty member combines deep academic expertise with practical experience to empower and inspire our students every day.
                </Typography>

                <Divider sx={{ width: 60, mb: 4, borderColor: "primary.main", borderRadius: 8 }} />

                <Box sx={{ mb: 2 }}>
                  {facultyHighlights.map((point) => (
                    <Box
                      key={point}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 2.2,
                      }}
                    >
                      <Box
                        sx={{
                          background: "linear-gradient(135deg,#edf4ff 0%,#e6fffa 100%)",
                          borderRadius: "50%",
                          width: 30,
                          height: 30,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mr: 2,
                          boxShadow: "0 2px 8px rgba(42,130,240,0.09)",
                        }}
                      >
                        <CheckCircleIcon color="primary" sx={{ fontSize: 20 }} />
                      </Box>
                      <Typography
                        variant="body2"
                        color="text.primary"
                        sx={{ fontWeight: 500, fontSize: 15 }}
                      >
                        {point}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>

              {/* RIGHT SIDE — Faculty Grid */}
              <Grid item xs={12} md={7}>
                <Grid
                  container
                  spacing={3}
                  justifyContent="center"
                  alignItems="stretch"
                >
                  <Team limit={4} />
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>


        {/* ALUMNI SECTION —  */}
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            px: { xs: 1, md: 0 },

          }}
        >
          <Container>
            <Grid
              container
              spacing={6}
              alignItems="flex-start"
              justifyContent="space-between"
              sx={{ flexWrap: { xs: "wrap", md: "nowrap" } }}
            >
              {/* LEFT SIDE — Alumni Cards */}
              <Grid item xs={12} md={7}>
                <Grid container spacing={2} justifyContent="flex-start">
                  {homeAlumni.map((alum, index) => (
                    <Grid item xs={12} sm={6} key={alum.name}>
                      <Card
                        sx={{
                          maxWidth: 420,
                          p: 3,
                          borderRadius: 4,
                          textAlign: "center",
                          background: (theme) =>
                            theme.palette.mode === "light"
                              ? "rgba(255,255,255,0.85)"
                              : "rgba(30,30,35,0.7)",
                          backdropFilter: "blur(12px)",
                          boxShadow: (theme) =>
                            theme.palette.mode === "light"
                              ? "0px 6px 20px rgba(0,80,200,0.08)"
                              : "0px 6px 20px rgba(0,0,0,0.25)",
                          transition: "transform 0.3s, box-shadow 0.3s",
                          "&:hover": {
                            transform: "translateY(-5px) scale(1.03)",
                            boxShadow: (theme) =>
                              theme.palette.mode === "light"
                                ? "0px 12px 32px rgba(0,80,200,0.18)"
                                : "0px 16px 36px rgba(120,120,180,0.3)",
                          },
                          mb: index % 2 === 0 ? 6 : 0,
                        }}
                      >
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            mx: "auto",
                            mb: 2,
                            borderRadius: "50%",
                            background: "linear-gradient(135deg,#ffd6d6 0%,#d0f0ff 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Avatar
                            src={alum.img || "/assets/alumni/default.jpg"}
                            sx={{ width: 70, height: 70 }}
                          />
                        </Box>
                        <Typography fontWeight={600} fontSize={16} sx={{ mb: 0.5 }}>
                          {alum.name}
                        </Typography>
                        <Box sx={{ mb: 1, display: "flex", justifyContent: "center", gap: 1, flexWrap: "wrap" }}>
                          {alum.tags?.map((tag) => (
                            <Typography
                              key={tag}
                              variant="caption"
                              sx={{
                                backgroundColor: "primary.light",
                                color: "primary.dark",
                                px: 1.5,
                                py: 0.5,
                                borderRadius: 2,
                                fontWeight: 500,
                              }}
                            >
                              {tag}
                            </Typography>
                          ))}
                        </Box>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            fontSize: 14,
                          }}
                        >
                          {alum.story}
                        </Typography>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              {/* RIGHT SIDE — Text & Highlights */}
              <Grid
                item
                xs={12}
                md={5}
                sx={{
                  flexShrink: 0,
                  maxWidth: { md: "42%" },
                }}
              >
                <Typography
                  variant="overline"
                  color="primary"
                  fontWeight={700}
                  letterSpacing={2}
                  mb={2}
                  display="block"
                >
                  Our Alumni
                </Typography>

                <Typography
                  variant="h4"
                  fontWeight={700}
                  color="text.primary"
                  mb={3}
                >
                  Inspiring Journeys
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  mb={4}
                  sx={{
                    lineHeight: 1.8,
                    fontSize: { xs: 14, sm: 15, md: 16 },
                    maxWidth: { xs: 260, sm: 320, md: 420 },
                    mx: "auto", // center horizontally
                    wordBreak: "break-word",
                  }}
                >
                  Our alumni have made remarkable contributions across industries worldwide. Their journeys showcase the impact of dedication, mentorship, and hard work.
                </Typography>

                <Divider sx={{ width: 60, mb: 4, borderColor: "primary.main", borderRadius: 8 }} />

                <Box sx={{ mb: 2 }}>
                  {alumniHighlights.map((point) => (
                    <Box key={point} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Box
                        sx={{
                          width: 30,
                          height: 30,
                          borderRadius: "50%",
                          background: "linear-gradient(135deg,#ffd6d6 0%,#d0f0ff 100%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mr: 2,
                        }}
                      >
                        <CheckCircleIcon color="primary" sx={{ fontSize: 20 }} />
                      </Box>
                      <Typography variant="body2" color="text.primary" sx={{ fontWeight: 500, fontSize: 15 }}>
                        {point}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>


        {/* CAMPUS LIFE GALLERY  */}
        <Box
          sx={{
            py: { xs: 4, md: 6 },
          }}
        >
          <Container maxWidth="xl">
            <Typography
              variant="h4"
              fontWeight={700}
              color="primary.main"
              mb={3}
              align="center"
            >
              Campus Life Gallery
              <Box
                sx={{
                  height: 4,
                  width: 60,
                  background: "linear-gradient(90deg, #ffd6d6 0%, #d0f0ff 100%)",
                  borderRadius: 2,
                  mt: 1,
                  mx: "auto",
                }}
              />
            </Typography>

            <Grid container spacing={3} justifyContent="center">
              {campusGalleryImages.map((img, i) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={i}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Box
                    sx={{
                      width: 360, // fixed width for proper centering
                      height: 220, // uniform height
                      borderRadius: 3,
                      overflow: "hidden",
                      boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "scale(1.03)",
                        boxShadow: "0 12px 36px rgba(0,0,0,0.12)",
                      },
                    }}
                  >
                    <img
                      src={img}
                      alt={`Campus ${i + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>


        {/* TESTIMONIALS — */}
        <Box
          sx={{
            py: { xs: 4, md: 8 },
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              fontWeight={700}
              color="primary.main"
              mb={5}
              align="center"
              sx={{ position: "relative" }}
            >
              What Our Community Says
              <Box
                sx={{
                  height: 4,
                  width: 60,
                  background: "linear-gradient(90deg, #ffd6d6 0%, #d0f0ff 100%)",
                  borderRadius: 2,
                  mt: 1,
                  mx: "auto",
                }}
              />
            </Typography>

            <Testimonial limit={6} />
          </Container>
        </Box>

        {/*  NEWS, EVENTS & ANNOUNCEMENTS (3 events + 3 notifications) */}
        <NewsEventsSection events={events}
          notifications={notifications}
        />

        {/* CONTACT CTA */}
        <ContactCTA />
      </Container>
    </Box>
  );
}
