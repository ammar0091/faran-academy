import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

import {
  applicationStatus,
  enrollmentImages,
  enrollmentUi,
} from "../../../constants/enrollment/enrollmentData";

function EnrollmentSidebar() {
  return (
    <Stack gap={3}>
      <ApplicationStatusCard />
      <HelpCard />
      <CampusCard />
    </Stack>
  );
}

function ApplicationStatusCard() {
  return (
    <Box
      sx={{
        bgcolor: enrollmentUi.primary,
        color: "#fff",
        borderRadius: 3,
        p: { xs: 3, md: 4 },
        boxShadow: "0 14px 30px rgba(0,67,121,0.22)",
      }}
    >
      <Typography component="h3" sx={{ fontSize: 28, fontWeight: 900, mb: 3 }}>
        Application Status
      </Typography>
      <Stack gap={3}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-end">
          <Typography sx={{ color: "rgba(255,255,255,0.75)" }}>Overall Progress</Typography>
          <Typography sx={{ color: enrollmentUi.gold, fontSize: 28, fontWeight: 900 }}>45%</Typography>
        </Stack>

        <Box sx={{ height: 8, borderRadius: 999, overflow: "hidden", bgcolor: "rgba(255,255,255,0.2)" }}>
          <Box sx={{ width: "45%", height: "100%", bgcolor: enrollmentUi.gold }} />
        </Box>

        <Stack component="ul" gap={2} sx={{ p: 0, m: 0, listStyle: "none" }}>
          {applicationStatus.map((item) => (
            <Stack
              component="li"
              direction="row"
              gap={1.5}
              alignItems="center"
              key={item.label}
              sx={{ opacity: item.muted ? 0.5 : 1 }}
            >
              {item.complete ? (
                <CheckCircleIcon sx={{ color: enrollmentUi.gold }} />
              ) : (
                <RadioButtonUncheckedIcon sx={{ color: "rgba(255,255,255,0.45)" }} />
              )}
              <Typography>{item.label}</Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}

function HelpCard() {
  return (
    <Box
      sx={{
        bgcolor: enrollmentUi.low,
        border: `1px solid ${enrollmentUi.outline}55`,
        borderRadius: 3,
        p: { xs: 3, md: 4 },
      }}
    >
      <Typography sx={{ color: enrollmentUi.primary, fontWeight: 900, mb: 2 }}>Need Help?</Typography>
      <Stack direction="row" gap={1.5} alignItems="flex-start" sx={{ mb: 3 }}>
        <SupportAgentIcon sx={{ color: enrollmentUi.goldText }} />
        <Box>
          <Typography sx={{ fontWeight: 900 }}>Admissions Office</Typography>
          <Typography sx={{ color: enrollmentUi.muted }}>Mon - Fri, 9am - 5pm</Typography>
        </Box>
      </Stack>
      <Button
        fullWidth
        variant="outlined"
        sx={{
          borderColor: enrollmentUi.muted,
          color: enrollmentUi.text,
          py: 1.3,
          borderRadius: 2,
          fontWeight: 900,
        }}
      >
        Chat with Admissions
      </Button>
    </Box>
  );
}

function CampusCard() {
  return (
    <Box sx={{ borderRadius: 3, overflow: "hidden", boxShadow: "0 12px 28px rgba(0,0,0,0.12)" }}>
      <Box sx={{ position: "relative", height: 210, overflow: "hidden" }}>
        <Box
          component="img"
          src={enrollmentImages.campus}
          alt="Students on campus"
          loading="lazy"
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.65), transparent)",
            display: "flex",
            alignItems: "flex-end",
            p: 3,
          }}
        >
          <Typography sx={{ color: "#fff", fontWeight: 900 }}>
            Join our vibrant campus community of 5,000+ students.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default React.memo(EnrollmentSidebar);
