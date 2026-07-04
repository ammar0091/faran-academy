import React from "react";

import { Box, Divider } from "@mui/material";

import Hero from "../../components/common/Hero";
import AboutHero from "../../components/sections/about/AboutHero";
import WhoWeAre from "../../components/sections/about/WhoWeAre";
import PhilosophySection from "../../components/sections/about/PhilosophySection";
import TimelineSection from "../../components/sections/about/TimelineSection";
import FacilitiesSection from "../../components/sections/about/FacilitiesSection";
import PeopleSection from "../../components/sections/about/PeopleSection";
import FinalCTA from "../../components/sections/about/FinalCTA";

import { homeImages } from "../../constants/home/modernHomeData";

export default function About() {
  return (
    <Box sx={{ bgcolor: "#f7fbff" }}>

      <Hero
        badge="About Faran Academy"
        title="About"
        highlight={
          <>
            Shaping Future
            <br />
            Leaders Through
            <br />
            Excellence &{" "}
            <Box component="span" sx={{ color: "#FEB316" }}>
              Innovation
            </Box>
          </>
        }
        subtitle="For more than three decades, Faran Academy has nurtured curious minds, inspired creativity, and empowered students with the confidence to thrive in an ever-changing world."
        image={homeImages.hero}
        primaryBtn="Admissions"
        primaryLink="/admissions"
        secondaryBtn="Our Journey"
        secondaryLink="/about#our-journey"
      />
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