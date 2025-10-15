import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Stack
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";
import TestimonialCarousel from "../components/TestimonialCarousel";
import herologo from "../assets/logo.png";

export default function Home() {
  return (
    <Box component="main" sx={{ bgcolor: "#ffffffff" }}>
      <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 7 } }}>
        {/* HERO SECTION */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 6,
            pb: { xs: 4, md: 6 }
          }}
        >
          <Box flex={1} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h3"
              fontWeight={800}
              color="primary.main"
              mb={1}
              sx={{ fontSize: { xs: 32, md: 46 } }}
            >
              Empowering Tomorrow’s Leaders
            </Typography>
            <Typography variant="h6" color="text.secondary" mb={2}>
              Welcome to Faran Academy – The place where bright minds grow, achieve, and lead.
            </Typography>
            <Button
              component={Link}
              to="/courses"
              variant="contained"
              size="large"
              endIcon={<SchoolIcon />}
              sx={{
                bgcolor: "#005baa",
                color: "#fff",
                px: 4,
                py: 1.3,
                fontSize: 19,
                fontWeight: 700,
                borderRadius: 2,
                boxShadow: "0 6px 20px 0 rgba(0,91,170,0.08)"
              }}
            >
              Explore Our Courses
            </Button>
          </Box>
          <Box flex={1} sx={{ display: { xs: "none", md: "block" } }}>
            <img
              src={herologo}
              alt="Faran Academy Banner"
              style={{
                width: "100%",
                borderRadius: 10,
                // boxShadow: "0 12px 48px 0 rgba(49,61,89,0.12)"
              }}
            />
          </Box>
        </Box>

        {/* STATISTICS BAR */}
        <Grid
          container
          spacing={4}
          justifyContent={"center"}
          sx={{
            bgcolor: "#005baa",
            color: "#fff",
            borderRadius: 3,
            p: { xs: 2, sm: 3 },
            mb: { xs: 5, md: 7 }
          }}
        >
          {[
            { value: "200+", label: "Active Students" },
            { value: "95%", label: "Exam Pass Rate" },
            { value: "15+", label: "Expert Faculty" },
            { value: "10+", label: "Awards & Accreditations" }
          ].map((stat, idx) => (
            <Grid
              key={stat.value}
              item
              xs={6}
              sm={3}
              sx={{
                textAlign: "center",
              }}
            >
              <Typography variant="h4" fontWeight={700}>{stat.value}</Typography>
              <Typography sx={{ opacity: 0.87 }}>{stat.label}</Typography>
            </Grid>
          ))}
        </Grid>


        {/* WHY CHOOSE US / FEATURES */}
        <Box sx={{ my: { xs: 3, md: 5 } }}>
          <Typography variant="h4" fontWeight={700} align="center" color="primary.main">
            Why Choose Faran Academy?
          </Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            alignItems="center"
            justifyContent="center"
            mt={3}
            sx={{ width: "100%" }}
          >
            <Box sx={{ textAlign: "center", maxWidth: 240 }}>
              <img
                src="/assets/features/teachers.svg"
                alt="Expert Faculty"
                width={64}
                style={{ marginBottom: 14 }}
              />
              <Typography variant="subtitle1" fontWeight={700}>Expert Faculty</Typography>
              <Typography variant="body2" color="text.secondary">
                Certified, caring, and experienced staff.
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center", maxWidth: 240 }}>
              <img
                src="/assets/features/library.svg"
                alt="Modern Facilities"
                width={64}
                style={{ marginBottom: 14 }}
              />
              <Typography variant="subtitle1" fontWeight={700}>Modern Facilities</Typography>
              <Typography variant="body2" color="text.secondary">
                Digital classrooms, labs &amp; library.
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center", maxWidth: 240 }}>
              <img
                src="/assets/features/certificate.svg"
                alt="Outstanding Results"
                width={64}
                style={{ marginBottom: 14 }}
              />
              <Typography variant="subtitle1" fontWeight={700}>Outstanding Results</Typography>
              <Typography variant="body2" color="text.secondary">
                Top exam scores &amp; high university placement.
              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* ANNOUNCEMENTS / NEWS */}
        <Box sx={{ my: { xs: 4, md: 6 } }}>
          <Typography variant="h5" fontWeight={600} mb={2} color="primary.main">Latest News & Announcements</Typography>
          <Stack spacing={2}>
            <Box sx={{ bgcolor: "#e8f4ff", p: 2, borderRadius: 2 }}>
              <Typography fontWeight={600}>Admissions Open for 2025-26!</Typography>
              
            </Box>
            <Box sx={{ bgcolor: "#f8f6e8", p: 2, borderRadius: 2 }}>
              <Typography fontWeight={600}>Annual Science Fair</Typography>
              <Typography variant="body2" color="text.secondary">
                Join us on September 18th for our largest student event yet.
              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* CAMPUS GALLERY */}
        <Box sx={{ my: { xs: 4, md: 7 } }}>
          <Typography variant="h5" fontWeight={700} color="primary.main" mb={1.7}>Campus Life Gallery</Typography>
          <Grid container spacing={2}>
            {[1, 2, 3].map(i => (
              <Grid item xs={12} sm={4} key={i}>
                <img
                  src={`/assets/gallery/${i}.jpg`}
                  alt={`Campus ${i}`}
                  style={{
                    width: "100%",
                    borderRadius: 10,
                    objectFit: "cover",
                    minHeight: 120,
                    maxHeight: 230
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* TESTIMONIALS CAROUSEL */}
        <Box sx={{ my: { xs: 4, md: 7 } }}>
          <Typography variant="h5" fontWeight={600} mb={2} color="primary.main">
            What Parents & Students Say
          </Typography>
          {/* Plug in your testimonial carousel here */}
          <TestimonialCarousel />

          <Box sx={{ bgcolor: "#e8f4ff", p: 4, borderRadius: 5, textAlign: "center", fontStyle: "italic", color: "#294" }}>
            “Faran Academy gave my daughter the confidence to succeed!” – Parent
          </Box>
        </Box>

        {/* QUICK CONTACT / CTA */}
        <Box
          sx={{
            bgcolor: "#005baa",
            color: "#fff",
            py: 3,
            px: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 3,
            mt: 6,
            flexDirection: { xs: "column", sm: "row" }
          }}
        >
          <Typography variant="h6" fontWeight={600} mr={{ xs: 0, sm: 4 }} mb={{ xs: 2, sm: 0 }}>
           Connet with Us Today!
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/contact"
            sx={{ fontWeight: 700, px: 4, py: 1.2, borderRadius: 2, fontSize: 18, bgcolor: "#ffd43b", color: "#0b276c", "&:hover": { bgcolor: "#fff2a1" } }}
          >
            Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
