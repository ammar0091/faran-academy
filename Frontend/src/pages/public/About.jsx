import React from "react";

import { Box, Divider } from "@mui/material";

import AboutHero from "../../components/sections/about/AboutHero";
import WhoWeAre from "../../components/sections/about/WhoWeAre";
import PhilosophySection from "../../components/sections/about/PhilosophySection";
import TimelineSection from "../../components/sections/about/TimelineSection";
import FacilitiesSection from "../../components/sections/about/FacilitiesSection";
import PeopleSection from "../../components/sections/about/PeopleSection";
import FinalCTA from "../../components/sections/about/FinalCTA";

export default function About() {
  return (
    <Box sx={{ bgcolor: "#f7fbff" }}>
      <AboutHero />

      <Divider />

      <WhoWeAre />

      <Divider />

      <PhilosophySection />

      <Divider />

      <TimelineSection />

      <Divider />

      <FacilitiesSection />

      <Divider />

      <PeopleSection />

      <Divider />

      <FinalCTA />
    </Box>
  );
}