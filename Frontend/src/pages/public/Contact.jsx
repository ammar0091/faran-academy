import { Box } from "@mui/material";

import Hero from "../../components/common/Hero";
import ContactInfoSection from "../../components/sections/contact/Info";
import ContactFormSection from "../../components/sections/contact/Form";

export default function Contact() {
  return (
    <>
      <Hero
        title="Contact"
        badge="Get in Touch"
        highlight="Connect with Us"
        subtitle="We'd love to hear from you! Reach out with any questions or feedback."
        image="/images/contact.jpg"
      />

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