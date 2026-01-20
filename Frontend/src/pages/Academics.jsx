import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Grid, Skeleton } from "@mui/material";
import CourseCard from "../components/Coursecard"; 
import api from "../utils/api";

export default function Academics() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await api.getCourses();
        setCourses(res.data || []);
      } catch (err) {
        console.error("Failed to fetch courses:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchCourses();
  }, []);

  return (
    <Box sx={{ bgcolor: "#f4f7fe", py: { xs: 10, md: 14 }, px: { xs: 2, md: 10 } }}>
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ textAlign: "left", mb: 4 }}>
        <Typography
          fontWeight={700}
          fontSize={{ xs: 15, md: 16 }}
          color="#005baa"
          mb={1}
          sx={{ lineHeight: 1.2 }}
        >
          Our Classes
        </Typography>
        <Typography
          fontWeight={700}
          fontSize={{ xs: 28, md: 32 }}
          color= "text.secondary"
          mb={2}
        >
          Explore Our Classes
        </Typography>
        <Typography
          fontWeight={400}
          fontSize={{ xs: 15, md: 16 }}
          color="text.secondary"
          sx={{ lineHeight: 1.8 }}
        >
          Our primary school classes are designed to nurture creativity, curiosity, and confidence in every child. Learn from experienced instructors through engaging, hands-on lessons.
        </Typography>
      </Container>

      {/* Courses Grid */}
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="left">
          {loading
            ? Array.from({ length: 6 }).map((_, idx) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  key={idx}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Skeleton
                    variant="rectangular"
                    height={360}
                    sx={{ borderRadius: 4, width: 300 }}
                  />
                </Grid>
              ))
            : courses.map((course, idx) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  key={course._id || idx}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <CourseCard
                    img={course.img}
                    title={course.title}
                    icon={course.icon}
                    description={course.description}
                    instructor={course.instructor}
                    accent={course.accent}
                  />
                </Grid>
              ))}
        </Grid>
      </Container>
    </Box>
  );
}
