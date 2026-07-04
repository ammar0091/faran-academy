import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Skeleton,
} from "@mui/material";

import CourseCard from "../../Coursecard";

const PRIMARY = "#004379";

export default function CoursesSection({
  courses,
  loading,
}) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background:
          "linear-gradient(180deg,#F8FBFF 0%,#FFFFFF 100%)",
      }}
    >
      <Container maxWidth="xl">
        {/* Heading */}

        <Box
          sx={{
            maxWidth: 800,
            mb: 8,
          }}
        >
          <Typography
            sx={{
              color: PRIMARY,
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              mb: 1,
            }}
          >
            Our Classes
          </Typography>

          <Typography
            sx={{
              fontWeight: 800,
              color: "#0B4577",
              mb: 2,
              fontSize: {
                xs: "2rem",
                md: "3rem",
              },
            }}
          >
            Explore Our Academic Programs
          </Typography>

          <Typography
            sx={{
              color: "#64748B",
              lineHeight: 1.9,
              maxWidth: 700,
            }}
          >
            Our curriculum is designed to develop creativity,
            critical thinking, collaboration, and confidence
            through engaging and meaningful learning
            experiences.
          </Typography>
        </Box>

        {/* Courses */}

        <Grid
          container
          spacing={4}
        >
          {loading
            ? Array.from({
                length: 8,
              }).map((_, idx) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={idx}
                >
                  <Skeleton
                    variant="rounded"
                    height={380}
                    sx={{
                      borderRadius: "24px",
                    }}
                  />
                </Grid>
              ))
            : courses.map(
                (
                  course,
                  idx
                ) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    key={
                      course._id ||
                      idx
                    }
                  >
                    <CourseCard
                      img={course.img}
                      title={course.title}
                      icon={course.icon}
                      description={
                        course.description
                      }
                      instructor={
                        course.instructor
                      }
                      accent={course.accent}
                    />
                  </Grid>
                )
              )}
        </Grid>
      </Container>
    </Box>
  );
}