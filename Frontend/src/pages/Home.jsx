import React, { useEffect, useState } from "react";
// MUI Components
import {
  Box, Container, Typography, Button, Grid, Stack, Card, CardContent, Avatar, Chip, Divider
} from "@mui/material";
// MUI Icons
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Router
import { Link } from "react-router-dom";

// Assets
import herologo from "../assets/logo.png";

// API
import { getFaculty, getEvents, getNotifications } from "../utils/api";

// Components
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";



const alumni = [
  { name: "Obaid Ur Rahman", achievement: "MTech in CS", img: "/assets/alumni/obaid.jpg", story: "Obaid, M.Tech alumnus, a highly skilled and innovative developer making impactful contributions in the tech world." },
  { name: "Zarrah", achievement: "Google Intern, Class of 2020", img: "/assets/alumni/zarrah.jpg", story: "Founded coding club, now innovating at the world’s top tech firm." },
];

const achievements = [
  "ISO Certified Institution",
  "Top 5 in District Science Results",
  "National Award for Educational Excellence",
  "Green Campus Accreditation",
];

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
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            alignItems: "center",
            gap: { xs: 5, md: 8 },
            py: { xs: 3, md: 6 },
          }}
        >
          {/* Hero Left: Text */}
          <Box flex={1} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h2" fontWeight={800} color="primary.main" mb={2} sx={{ fontSize: { xs: 31, md: 52 } }}>
              Welcome to Faran Academy
            </Typography>
            <Typography variant="h6" color="text.secondary" mb={2} sx={{ fontSize: { xs: 18, md: 23 } }}>
              "Empowering lifelong learners with knowledge, values, and vision for tomorrow."
            </Typography>

            {/* CTA Buttons */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent={{ xs: "center", sm: "flex-start" }} mt={2}>
              <Button
                component={Link}
                to="/admissions"
                variant="contained"
                size="large"
                endIcon={<SchoolIcon />}
                sx={{
                  bgcolor: "#005baa",
                  color: "#fff",
                  px: 4,
                  py: 1.2,
                  fontSize: 19,
                  fontWeight: 700,
                  borderRadius: 2,
                  boxShadow: "0 6px 28px 0 rgba(0,91,170,0.10)",
                }}
              >
                Apply Now
              </Button>
              <Button
                component={Link}
                to="/gallery"
                variant="outlined"
                color="primary"
                size="large"
                sx={{ fontWeight: 700, px: 4, py: 1.2, borderRadius: 2, fontSize: 19 }}
              >
                Virtual Tour
              </Button>
            </Stack>

            {/* Achievements Chips */}
            <Stack direction="row" flexWrap="wrap" mt={3} spacing={2}>
              {achievements.map((text) => (
                <Chip key={text} icon={<EmojiEventsIcon />} label={text} sx={{ bgcolor: "#e8f8ff", fontWeight: 500 }} />
              ))}
            </Stack>
          </Box>

          {/* Hero Right: Image */}
          <Box flex={1}>
            <img
              src={herologo}
              alt="Faran Academy Banner"
              style={{
                width: "100%",
                maxHeight: 360,
                borderRadius: 14,
                objectFit: "cover",
                boxShadow: "0 12px 48px 0 rgba(49,61,89,0.09)",
              }}
            />
          </Box>
        </Box>

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

          {[
            { num: "320+", label: "Students Enrolled", icon: "🎓" },
            { num: "97%", label: "Exam Success Rate", icon: "📈" },
            { num: "25+", label: "Qualified Faculty", icon: "👩‍🏫" },
            { num: "18", label: "National Awards", icon: "🏆" },
          ].map((item) => (
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
        <Box
          sx={{
            py: { xs: 6, md: 8 },
            px: { xs: 2, md: 4 },
            position: "relative",
            overflow: "hidden",
            borderRadius: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", md: "row" },
              alignItems: "center",
              gap: { xs: 6, md: 10 },
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* TEXT LEFT */}
            <Box flex={1}>
              <Typography
                variant="overline"
                fontWeight={700}
                letterSpacing={2}
                color="primary.main"
                mb={2}
              >
                About Our School
              </Typography>

              <Typography
                variant="h3"
                fontWeight={800}
                color="text.primary"
                mb={3}
                sx={{ lineHeight: 1.2 }}
              >
                Nurturing Minds, Inspiring Futures
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                mb={2}
                sx={{ fontSize: { xs: 15, md: 16 }, lineHeight: 1.8 }}
              >
                At Faran Academy, we combine rigorous academics, creative arts, leadership development, and global exposure to help students thrive in a rapidly evolving world.
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ fontSize: { xs: 15, md: 16 }, lineHeight: 1.8 }}
              >
                Our students are equipped to innovate, lead, and contribute meaningfully to society, while enjoying a vibrant, supportive learning environment.
              </Typography>

              {/* Small Features */}
              <Box sx={{ mt: 4, display: "flex", flexWrap: "wrap", gap: 2 }}>
                {["Creativity", "Leadership", "Innovation"].map(
                  (feature) => (
                    <Box
                      key={feature}
                      sx={{
                        px: 3,
                        py: 1,
                        borderRadius: 2,
                        background: "rgba(255,255,255,0.3)",
                        backdropFilter: "blur(8px)",
                        fontWeight: 600,
                        display: "inline-block",
                        fontSize: 14,
                        color: "text.primary",
                        transition: "transform 0.3s",
                        "&:hover": {
                          transform: "translateY(-3px) scale(1.05)",
                        },
                      }}
                    >
                      {feature}
                    </Box>
                  )
                )}
              </Box>
            </Box>

            {/* IMAGE RIGHT */}
            <Box
              flex={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src="/assets/features/values.svg"
                alt="School Values"
                sx={{
                  width: { xs: "80%", md: "100%" },
                  maxHeight: 300,
                  borderRadius: 4,
                  boxShadow: (theme) =>
                    theme.palette.mode === "light"
                      ? "0px 12px 28px rgba(0,0,0,0.1)"
                      : "0px 12px 28px rgba(0,0,0,0.5)",
                }}
              />
            </Box>
          </Box>
        </Box>



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
                  {[
                    "Highly Qualified Professionals",
                    "Decades of Teaching Experience",
                    "Dedicated to Student Success",
                    "Innovative Learning Methods",
                  ].map((point, i) => (
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
                  {alumni.map((alum, index) => (
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
                  {[
                    "Global Achievements",
                    "Entrepreneurs & Innovators",
                    "Leaders in Industry",
                    "Impactful Contributions",
                  ].map((point) => (
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
              {[
                "https://picsum.photos/seed/campus1/400/300",
                "https://picsum.photos/seed/campus2/400/300",
                "https://picsum.photos/seed/campus3/400/300",
                "https://picsum.photos/seed/campus4/400/300",
                "https://picsum.photos/seed/campus5/400/300",
                "https://picsum.photos/seed/campus6/400/300",
              ].map((img, i) => (
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
        <Box sx={{ my: { xs: 4, md: 7 } }}>
          <Typography variant="h4" fontWeight={700} color="primary.main" mb={5} align="center">
            News, Events & Announcements
          </Typography>

          {/* ---- EVENTS ---- */}
          <Typography variant="h5" fontWeight={700} color="text.primary" mb={2}>
            Latest Events
          </Typography>
          <Grid container spacing={3} mb={4}>
            {events
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .slice(0, 3) // 👈 only 3 events
              .map((event, idx) => (
                <Grid item xs={12} sm={6} md={4} key={event._id || idx}>
                  <Card
                    sx={{
                      bgcolor: "#f5fafd",
                      borderRadius: 3,
                      minHeight: 180,
                      boxShadow: 0,
                      transition: "0.3s",
                      "&:hover": { boxShadow: "0 8px 20px rgba(0,0,0,0.08)" },
                    }}
                  >
                    <CardContent>
                      <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                        <EventAvailableIcon color="primary" />
                        <Typography fontWeight={700} variant="subtitle1">
                          {event.title || "Event"}
                        </Typography>
                      </Stack>

                      <Typography color="text.secondary" variant="body2">
                        {new Date(event.date).toLocaleDateString()}
                      </Typography>

                      <Typography mt={1} mb={2}>
                        {event.description}
                      </Typography>

                      <Button
                        component={Link}
                        to={`/#events/${event._id}`}
                        size="small"
                        variant="outlined"
                        color="primary"
                        sx={{
                          borderRadius: 2,
                          textTransform: "none",
                          fontWeight: 600,
                          "&:hover": { transform: "scale(1.05)" },
                        }}
                      >
                        More Details
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>

          {/* ---- ANNOUNCEMENTS ---- */}
          <Typography variant="h5" fontWeight={700} color="text.primary" mb={2}>
            Latest Announcements
          </Typography>
          <Grid container spacing={3}>
            {notifications
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .slice(0, 3)
              .map((note, idx) => (
                <Grid item xs={12} sm={6} md={4} key={note._id || idx}>
                  <Card
                    sx={{
                      bgcolor: "#f5fafd",
                      borderRadius: 3,
                      minHeight: 180,
                      boxShadow: 0,
                      transition: "0.3s",
                      "&:hover": { boxShadow: "0 8px 20px rgba(0,0,0,0.08)" },
                    }}
                  >
                    <CardContent>
                      <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                        <InfoIcon color="primary" />
                        <Typography fontWeight={700} variant="subtitle1">
                          {note.title || "Announcement"}
                        </Typography>
                      </Stack>

                      <Typography color="text.secondary" variant="body2">
                        {new Date(note.createdAt).toLocaleDateString()}
                      </Typography>

                      <Typography mt={1}>
                        {note.message}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Box>

        {/* CONTACT CTA */}
        <Box
          sx={{
            bgcolor: "#005baa",
            color: "#fff",
            py: 4,
            px: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            mt: 7,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Typography variant="h6" fontWeight={700} mr={{ xs: 0, sm: 5 }} mb={{ xs: 2, sm: 0 }}>
            Ready to begin your journey?
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/contact"
            sx={{
              fontWeight: 700,
              px: 4,
              py: 1.2,
              borderRadius: 2,
              fontSize: 19,
              bgcolor: "#ffd43b",
              color: "#0b276c",
              "&:hover": { bgcolor: "#fff2a1" },
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
