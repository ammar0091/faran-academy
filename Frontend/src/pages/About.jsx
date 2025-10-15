import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFaculty } from "../utils/api";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Avatar,
  Paper,
  Divider,
  Button
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import PeopleIcon from "@mui/icons-material/People";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const timeline = [
  { year: "1990", title: "Academy Founded", descr: "Faran Academy opens its doors with a vision for holistic education.", icon: <CalendarMonthIcon sx={{ fontSize: 36, color: "#005baa" }} /> },
  { year: "2008", title: "Innovation Award", descr: "Honored for leading STEM education in the region.", icon: <EmojiObjectsIcon sx={{ fontSize: 36, color: "#ff9800" }} /> },
  { year: "2017", title: "Campus Expansion", descr: "Launch of new labs, library, and digital resources.", icon: <SchoolIcon sx={{ fontSize: 36, color: "#43a047" }} /> },
  { year: "2022", title: "Best School Award", descr: "Recognized for academic results and student well-being.", icon: <EmojiEventsIcon sx={{ fontSize: 36, color: "#f50057" }} /> }
];

const facilities = [
  { title: " Classrooms", img: "/assets/facilities/classroom.jpg", desc: "Digital boards, comfortable seating, climate controlled." },
  { title: "Science & Computer Labs", img: "/assets/facilities/lab.jpg", desc: "Hands-on experimentation in world-class labs." },
  { title: "Library & Media Center", img: "/assets/facilities/library.jpg", desc: "Thousands of books, online journals, and quiet study zones." },
  { title: "Sports Grounds", img: "/assets/facilities/sports.jpg", desc: "Large open fields, gym, indoor games, and coaching." }
];

const testimonials = [
  { name: "Sara M. (Student)", image: "/assets/testimonials/student1.jpg", quote: "Faran Academy gave me the confidence, support, and inspiration to reach top universities." },
  { name: "Mr. Rahman (Parent)", image: "/assets/testimonials/parent1.jpg", quote: "Dedicated teachers and excellent facilities—can’t recommend highly enough." }
];

export default function About() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    getFaculty().then((res) => setTeam(res.data)).catch((err) => console.error("Failed to fetch faculty", err));
  }, []);

  return (
    <Box bgcolor="#f7fafd">

      {/* HERO */}
      <Box
        sx={{
          background: "linear-gradient(rgba(0,91,170,.85), rgba(0,91,170,.85)), url('/assets/bg/hero.jpg') center/cover",
          color: "#fff",
          textAlign: "center",
          py: { xs: 8, md: 12 }
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" fontWeight={900}>About Faran Academy</Typography>
          <Typography mt={2} fontSize={20} sx={{ opacity: 0.95 }}>
            Where passion meets purpose — Building tomorrow’s leaders today.
          </Typography>
        </Container>
      </Box>

      {/* VISION / MISSION / VALUES */}
      <Container sx={{ my: 8 }}>
        <Grid container spacing={4} justifyContent="center">
          {[
            { icon: <SchoolIcon sx={{ fontSize: 40, color: "#005baa" }} />, title: "Our Vision", text: "To inspire and empower the next generation of innovators and leaders." },
            { icon: <PeopleIcon sx={{ fontSize: 40, color: "#43a047" }} />, title: "Our Mission", text: "Providing world-class education and growing critical thinkers & ethical leaders." },
            { icon: <EmojiEventsIcon sx={{ fontSize: 40, color: "#f50057" }} />, title: "Core Values", text: "Integrity • Curiosity • Excellence • Community • Leadership" }
          ].map((item, i) => (
            <Grid item xs={12} md={4} key={i} maxWidth={500}>
              <Paper
                elevation={4}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  textAlign: "center",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "0.3s",
                  "&:hover": { transform: "translateY(-6px)", boxShadow: "0 8px 30px rgba(0,0,0,.15)" }
                }}
              >
                {item.icon}
                <Typography variant="h6" fontWeight={700} mt={1}>{item.title}</Typography>
                <Divider sx={{ width: 40, my: 2, bgcolor: "#005baa" }} />
                <Typography color="text.secondary">{item.text}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* TEAM */}
      <Box bgcolor="#f4f8fc" py={8}>
        <Container>
          <Typography variant="h4" align="center" fontWeight={800} color="primary.main" mb={5}>
            Our Leadership
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {team.map((m, i) => (
              <Grid item xs={12} sm={6} md={3} key={i} minWidth={350} maxWidth={350}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    textAlign: "center",
                    backdropFilter: "blur(8px)",
                    background: "rgba(255,255,255,0.85)",
                    transition: "0.3s",
                  }}
                >
                  <Avatar src={m.image} sx={{ width: 90, height: 90, mx: "auto", mb: 2, border: "3px solid #005baa" }} />
                  <Typography fontWeight={700}>{m.name}</Typography>
                  <Typography color="primary">{m.role}</Typography>
                  <Typography fontSize={14} color="text.secondary">{m.subject}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* TIMELINE */}
      <Container sx={{ my: 10 }}>
        <Typography variant="h4" align="center" fontWeight={800} color="primary.main" mb={6}>
          Our Journey
        </Typography>
        <Stack spacing={4}>
          {timeline.map((t, i) => (
            <Stack key={i} direction="row" alignItems="flex-start" spacing={3}>
              {t.icon}
              <Box>
                <Typography variant="h6" fontWeight={700}>{t.year} — {t.title}</Typography>
                <Typography color="text.secondary">{t.descr}</Typography>
              </Box>
            </Stack>
          ))}
        </Stack>
      </Container>

      {/* FACILITIES */}
      <Box bgcolor="#fafcff" py={8}>
        <Container>
          <Typography variant="h4" align="center" fontWeight={800} color="primary.main" mb={6}>
            Our Facilities
          </Typography>
          <Grid container spacing={4}>
            {facilities.map((f, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Card
                  sx={{
                    borderRadius: 3,
                    overflow: "hidden",
                    transition: "0.4s",
                    "&:hover img": { transform: "scale(1.1)" }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="160"
                    image={f.img}
                    alt={f.title}
                    sx={{ transition: "0.4s" }}
                  />
                  <CardContent>
                    <Typography fontWeight={700}>{f.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{f.desc}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* TESTIMONIALS */}
      <Box bgcolor="#f7fafd" py={10}>
        <Container>
          <Typography variant="h4" align="center" fontWeight={800} color="primary.main" mb={6}>
            Voices of Our Community
          </Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            justifyContent="center"
            alignItems="stretch"
            sx={{ overflowX: { md: "auto" }, pb: 2 }}
          >
            {testimonials.map((t, i) => (
              <Paper
                key={i}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  textAlign: "center",
                  flex: "0 0 300px",
                  transition: "0.3s",
                  "&:hover": { boxShadow: "0 8px 24px rgba(0,0,0,.2)" }
                }}
              >
                <Avatar src={t.image} sx={{ width: 70, height: 70, mx: "auto", mb: 2 }} />
                <Typography fontWeight={700}>{t.name}</Typography>
                <Typography mt={1} sx={{ fontStyle: "italic" }}>“{t.quote}”</Typography>
              </Paper>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* CTA */}
      <Box
        sx={{
          background: "linear-gradient(135deg,#005baa 0%,#0088cc 100%)",
          py: 8,
          textAlign: "center"
        }}
      >
        <Container>
          <Typography variant="h5" fontWeight={800} color="#fff" mb={2}>
            Ready to Experience Faran Academy?
          </Typography>
          <Typography color="#f6edff" mb={3}>Connect today and be part of our journey.</Typography>
          <Link to="/contact">
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ fontWeight: 700, px: 5, borderRadius: 3, "&:hover": { transform: "scale(1.05)" } }}
            >
              Contact Us
            </Button>
          </Link>
        </Container>
      </Box>

    </Box>
  );
}
