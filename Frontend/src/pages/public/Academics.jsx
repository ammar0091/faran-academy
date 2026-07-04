import React, { useEffect, useState } from "react";

import { Box } from "@mui/material";

import AcademicsHero from "../../components/sections/academics/AcademicsHero";
import Hero from "../../components/common/Hero";
import StatsSection from "../../components/sections/academics/StatsSection";
import CoursesSection from "../../components/sections/academics/CoursesSection";
import LearningApproachSection from "../../components/sections/academics/LearningApproachSection";
import FinalCTA from "../../components/sections/academics/FinalCTA";

import { homeImages } from "../../constants/home/modernHomeData";

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
        console.error("Failed to fetch courses:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  return (
    <Box>
      {/* HERO */}


      <Hero
        badge="Academic Excellence"
        title="Academics"
        highlight="Empowering Minds, Shaping Futures"
        subtitle="At Faran Academy, we merge traditional rigour with innovative methodologies to prepare students for a rapidly evolving global landscape."
        image={homeImages.academics}        primaryBtn="Explore Curriculum"
        primaryLink="/academics"
        secondaryBtn="Download Prospectus"
      />

      {/* STATS */}
      <StatsSection />

      {/* COURSES
      // <CoursesSection
      //   courses={courses}
      //   loading={loading}
      // /> */}

      {/* LEARNING APPROACH */}
      <LearningApproachSection />

      {/* CTA */}
      <FinalCTA />
    </Box>
  );
}