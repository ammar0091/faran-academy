import React from "react";
import { Box, Container, Typography } from "@mui/material";

import { enrollmentUi } from "../../../constants/enrollment/enrollmentData";

function EnrollmentHero() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: enrollmentUi.primary,
        color: "#fff",
        pt: { xs: 8, md: 10 },
        pb: { xs: 14, md: 16 },
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography
          component="h1"
          sx={{
            fontFamily: "Manrope, Arial, sans-serif",
            fontSize: { xs: 40, md: 58 },
            fontWeight: 900,
            lineHeight: 1.1,
            mb: 2,
          }}
        >
          Your Journey Starts Here
        </Typography>
        <Typography sx={{ fontSize: { xs: 17, md: 20 }, color: "rgba(255,255,255,0.86)" }}>
          Enrollment for the 2024-2025 Academic Year is now open. Follow the steps
          below to secure your future at Faran Academy.
        </Typography>
      </Container>
    </Box>
  );
}

export default React.memo(EnrollmentHero);
