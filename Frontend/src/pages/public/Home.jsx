import React, { useEffect, useMemo, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

import SEO from "../../components/common/SEO";
import AboutSection from "../../components/sections/home/AboutSection";
import AlumniSection from "../../components/sections/home/AlumniSection";
import ContactCTA from "../../components/sections/home/ContactCTA";
import FacultySection from "../../components/sections/home/FacultySection";
import GallerySection from "../../components/sections/home/GallerySection";
import HeroSection from "../../components/sections/home/HeroSection";
import MobileQuickNav from "../../components/sections/home/MobileQuickNav";
import NewsEventsSection from "../../components/sections/home/NewsEventsSection";
import PrincipalMessage from "../../components/sections/home/PrincipalMessage";
import StatsSection from "../../components/sections/home/StatsSection";
import TestimonialsSection from "../../components/sections/home/TestimonialsSection";
import { pageSeo } from "../../constants/common/seo";
import {
  achievements,
  alumni,
  campusGalleryImages,
  schoolStats,
} from "../../constants/home/homeData";
import { homeUi } from "../../constants/home/modernHomeData";
import { getEvents, getFaculty, getNotifications } from "../../utils/api";
import {
  normalizeFaculty,
  normalizePrincipal,
  normalizeUpdates,
} from "../../utils/homeMappers";

export default function Home() {
  const [homeData, setHomeData] = useState({
    faculty: [],
    events: [],
    notifications: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadHomeData() {
      try {
        const [facultyRes, eventsRes, notificationsRes] = await Promise.all([
          getFaculty(),
          getEvents(),
          getNotifications(),
        ]);

        if (!isMounted) return;

        setHomeData({
          faculty: facultyRes.data || [],
          events: eventsRes.data || [],
          notifications: notificationsRes.data || [],
        });
      } catch (error) {
        console.error("Error fetching homepage data:", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadHomeData();

    return () => {
      isMounted = false;
    };
  }, []);

  const faculty = useMemo(() => normalizeFaculty(homeData.faculty), [homeData.faculty]);
  const principal = useMemo(() => normalizePrincipal(homeData.faculty), [homeData.faculty]);
  const updates = useMemo(
    () => normalizeUpdates(homeData.events, homeData.notifications),
    [homeData.events, homeData.notifications]
  );

  return (
    <>
      <SEO {...pageSeo.home} />
      <Box
        component="main"
        sx={{
          m: -2,
          bgcolor: homeUi.bg,
          color: homeUi.text,
          overflow: "hidden",
          fontFamily: "Manrope, Arial, sans-serif",
        }}
      >
        {loading && <LiveDataLoader />}

        <HeroSection achievements={achievements} />
        <StatsSection stats={schoolStats} />
        <AboutSection />
        <PrincipalMessage principal={principal} />
        <FacultySection faculty={faculty} />
        <AlumniSection alumni={alumni} />
        <GallerySection images={campusGalleryImages} />
        <TestimonialsSection />
        <NewsEventsSection updates={updates} />
        <ContactCTA />
        <MobileQuickNav />
      </Box>
    </>
  );
}

function LiveDataLoader() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 104,
        right: 24,
        zIndex: 30,
        bgcolor: "#ffffffee",
        border: `1px solid ${homeUi.outline}`,
        borderRadius: 999,
        px: 2,
        py: 1,
        display: "flex",
        alignItems: "center",
        gap: 1,
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
      }}
    >
      <CircularProgress size={16} sx={{ color: homeUi.primary }} />
      <Typography sx={{ fontWeight: 800, color: homeUi.primary, fontSize: 13 }}>
        Loading live updates
      </Typography>
    </Box>
  );
}
