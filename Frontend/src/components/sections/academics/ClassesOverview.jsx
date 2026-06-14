import React, { useEffect, useState } from "react";

import {
  Box,
  Container,
  Grid,
  Skeleton,
} from "@mui/material";

import CourseCard from "../../Coursecard";
import api from "../../../utils/api";

import {
  Section,
  SectionTag,
  MainHeading,
  Paragraph,
} from "./sharedStyles";

export default function ClassesOverview() {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await api.getCourses();
        setCourses(res.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  return (
    <Section sx={{ background: "#f9fafb" }}>
      <Container maxWidth="lg">

        <Box sx={{ mb: 7, maxWidth: 700 }}>

          <SectionTag>
            Our Programs
          </SectionTag>

          <MainHeading
            sx={{
              fontSize: {
                xs: "36px",
                md: "56px",
              },
              mb: 2,
            }}
          >
            Classes Overview
          </MainHeading>

          <Paragraph>
            Structured academic programs crafted to support
            every stage of intellectual growth.
          </Paragraph>

        </Box>

        <Grid container spacing={4}>

          {loading
            ? Array.from({ length: 4 }).map((_, idx) => (
                <Grid item xs={12} sm={6} md={3} key={idx}>
                  <Skeleton
                    variant="rectangular"
                    height={340}
                    sx={{ borderRadius: "24px" }}
                  />
                </Grid>
              ))
            : courses.map((course, idx) => (
                <Grid item xs={12} sm={6} md={3} key={idx}>
                  <CourseCard
                    img={course.img}
                    title={course.title}
                    description={course.description}
                    instructor={course.instructor}
                    accent={course.accent}
                  />
                </Grid>
              ))}

        </Grid>

      </Container>
    </Section>
  );
}