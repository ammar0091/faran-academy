import React, { useState } from "react";

import { Box } from "@mui/material";

import Hero from "../../components/common/Hero";

import { galleryCategories } from "../../constants/gallery/galleryData";

import GalleryTabs from "../../components/sections/gallery/GalleryTabs";
import GalleryGrid from "../../components/sections/gallery/GalleryGrid";
import GalleryCTA from "../../components/sections/gallery/GalleryCTA";

export default function Gallery() {
  // Active category
  const [tab, setTab] = useState(0);

  return (
    <Box>
      {/* ==========================
          HERO
      ========================== */}
      <Hero
        title="Gallery"
        badge="Our Moments"
        highlight="Capturing Memories"
        subtitle="Explore memorable moments, student achievements, campus life, events, and celebrations that reflect the vibrant learning experience at Faran Academy."
        image="/images/gallery-hero.jpg"
      />

      {/* ==========================
          CATEGORY TABS
      ========================== */}
      <GalleryTabs
        value={tab}
        onChange={setTab}
        categories={galleryCategories}
      />

      {/* ==========================
          GALLERY GRID
      ========================== */}
      <GalleryGrid
        images={galleryCategories[tab].images}
        category={galleryCategories[tab].label}
      />

      {/* ==========================
          CTA
      ========================== */}
      <GalleryCTA />
    </Box>
  );
}