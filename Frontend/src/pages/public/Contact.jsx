import { Box } from "@mui/material";

import ContactHeroSection from "../../components/sections/contact/Hero";
import ContactInfoSection from "../../components/sections/contact/Info";
import ContactFormSection from "../../components/sections/contact/Form";

export default function Contact() {
  return (
    <>
    <ContactHeroSection />
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        py: { xs: 4, md: 6 },
        px: { xs: 3, md: 10 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 3, md: 6 },
        alignItems: "flex-start"
      }}
    >
      <ContactInfoSection />
      <ContactFormSection />
    </Box>
    </>
  );
}