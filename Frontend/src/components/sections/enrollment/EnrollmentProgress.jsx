import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import { enrollmentSteps, enrollmentUi } from "../../../constants/enrollment/enrollmentData";

function getStepStyles(state) {
  if (state === "complete") {
    return { bgcolor: enrollmentUi.primary, borderColor: enrollmentUi.primary, color: "#fff" };
  }

  if (state === "active") {
    return {
      bgcolor: enrollmentUi.gold,
      borderColor: enrollmentUi.gold,
      color: enrollmentUi.goldText,
    };
  }

  return {
    bgcolor: "#fff",
    borderColor: enrollmentUi.outline,
    color: enrollmentUi.muted,
  };
}

function EnrollmentProgress() {
  return (
    <Container maxWidth="xl" sx={{ mt: { xs: -7, md: -8, px: { xs: 2.5, md: 8 } ,}, position: "relative", zIndex: 2 }}>
      <Box
        sx={{
          bgcolor: "#fff",
          borderRadius: 3,
          boxShadow: "0 18px 44px rgba(0,0,0,0.12)",
          p: { xs: 2.5, md: 4 },
        }}
      >
        <Grid container spacing={3}>
          {enrollmentSteps.map((step) => (
            <Grid item xs={12} sm={6} md={3} key={step.number}>
              <Stack direction="row" gap={2} alignItems="center">
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: 3,
                    border: "2px solid",
                    display: "grid",
                    placeItems: "center",
                    fontWeight: 900,
                    flexShrink: 0,
                    ...getStepStyles(step.state),
                  }}
                >
                  {step.number}
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 900, color: enrollmentUi.text }}>
                    {step.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: step.state === "active" ? enrollmentUi.goldText : enrollmentUi.muted,
                      fontWeight: step.state === "active" ? 900 : 400,
                    }}
                  >
                    {step.status}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default React.memo(EnrollmentProgress);
