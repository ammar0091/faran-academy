import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";

import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ComputerIcon from "@mui/icons-material/Computer";

const PRIMARY = "#005ba1";
const SECONDARY = "#feb316";

const STATS = [
  {
    icon: <SchoolIcon />,
    value: "180+",
    label: "Students",
  },
  {
    icon: <GroupsIcon />,
    value: "15+",
    label: "Dedicated Teachers",
  },
  {
    icon: <MenuBookIcon />,
    value: "Islamic Studies",
    label: "Quran • Hadith • History",
  },
  {
    icon: <ComputerIcon />,
    value: "Modern Learning",
    label: "Preparing for Tomorrow",
  },
];

export default function StatsSection() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: PRIMARY,
        py: { xs: 5, md: 6 },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: 2.5, md: 8 },
        }}
      >
        <Grid container spacing={{ xs: 4, md: 3 }}>
          {STATS.map(({ icon, value, label }) => (
            <Grid item xs={6} md={3} key={label}>
              <Stack
                alignItems="center"
                textAlign="center"
                spacing={1.5}
              >
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    bgcolor: alpha("#fff", 0.12),
                    display: "grid",
                    placeItems: "center",
                    color: SECONDARY,

                    "& svg": {
                      fontSize: 32,
                    },
                  }}
                >
                  {icon}
                </Box>

                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: {
                      xs: 28,
                      md: 36,
                    },
                    fontWeight: 800,
                    lineHeight: 1,
                  }}
                >
                  {value}
                </Typography>

                <Typography
                  sx={{
                    color: alpha("#fff", 0.8),
                    fontWeight: 500,
                    fontSize: {
                      xs: 14,
                      md: 16,
                    },
                  }}
                >
                  {label}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}