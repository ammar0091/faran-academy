import React, { useEffect, useState } from "react";

import {
Box,
Container,
Typography,
Grid,
Skeleton,
} from "@mui/material";

import CourseCard from "../../components/Coursecard";
import AcademicsHero from "../../components/sections/academics/AcademicsHero";
import StatsSection from "../../components/sections/academics/StatsSection";
import LearningApproachSection from "../../components/sections/academics/LearningApproachSection";
import FinalCTA from "../../components/sections/academics/FinalCTA";

import api from "../../utils/api";

export default function Academics() {
const [courses, setCourses] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
async function fetchCourses() {
try {
const res = await api.getCourses();
setCourses(res.data || []);
} catch (err) {
console.error(
"Failed to fetch courses:",
err
);
} finally {
setLoading(false);
}
}


fetchCourses();


}, []);

return ( <Box>
{/* HERO */}
 <AcademicsHero />

  {/* STATS */}
  <StatsSection />

  {/* COURSES SECTION */}
  <Box
    sx={{
      py: { xs: 8, md: 12 },

      background:
        "linear-gradient(180deg,#F8FBFF 0%,#FFFFFF 100%)",
    }}
  >
    <Container maxWidth="xl">
      {/* SECTION HEADING */}
      <Box
        sx={{
          maxWidth: 800,

          mb: 8,
        }}
      >
        <Typography
          sx={{
            color: "#005BAA",

            fontWeight: 700,

            letterSpacing: "2px",

            textTransform:
              "uppercase",

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
          Explore Our Academic
          Programs
        </Typography>

        <Typography
          sx={{
            color: "#64748B",

            lineHeight: 1.9,

            maxWidth: 700,
          }}
        >
          Our curriculum is designed
          to develop creativity,
          critical thinking,
          collaboration, and
          confidence through
          engaging and meaningful
          learning experiences.
        </Typography>
      </Box>

      {/* COURSES GRID */}
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
                    borderRadius:
                      "24px",
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
                    img={
                      course.img
                    }
                    title={
                      course.title
                    }
                    icon={
                      course.icon
                    }
                    description={
                      course.description
                    }
                    instructor={
                      course.instructor
                    }
                    accent={
                      course.accent
                    }
                  />
                </Grid>
              )
            )}
      </Grid>
    </Container>
  </Box>

  {/* LEARNING APPROACH */}
  <LearningApproachSection />

  {/* CTA */}
  <FinalCTA />
</Box>

);
}
