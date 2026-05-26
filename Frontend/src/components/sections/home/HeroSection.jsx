import React from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  Chip,
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import { Link } from "react-router-dom";

import herologo from "../../../assets/logo.png";

export default function HeroSection({ achievements }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        alignItems: "center",
        gap: { xs: 5, md: 8 },
        py: { xs: 3, md: 6 },
      }}
    >
      <Box flex={1} sx={{ textAlign: { xs: "center", md: "left" } }}>
        <Typography
          variant="h2"
          fontWeight={800}
          color="primary.main"
          mb={2}
          sx={{ fontSize: { xs: 31, md: 52 } }}
        >
          Welcome to Faran Academy
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          mb={2}
          sx={{ fontSize: { xs: 18, md: 23 } }}
        >
          "Empowering lifelong learners with knowledge,
          values, and vision for tomorrow."
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent={{
            xs: "center",
            sm: "flex-start",
          }}
          mt={2}
        >
          <Button
            component={Link}
            to="/admissions"
            variant="contained"
            size="large"
            endIcon={<SchoolIcon />}
            sx={{
              bgcolor: "#005baa",
              color: "#fff",
              px: 4,
              py: 1.2,
              fontSize: 19,
              fontWeight: 700,
              borderRadius: 2,
            }}
          >
            Apply Now
          </Button>

          <Button
            component={Link}
            to="/gallery"
            variant="outlined"
            color="primary"
            size="large"
            sx={{
              fontWeight: 700,
              px: 4,
              py: 1.2,
              borderRadius: 2,
              fontSize: 19,
            }}
          >
            Virtual Tour
          </Button>
        </Stack>

        <Stack direction="row" flexWrap="wrap" mt={3} spacing={2}>
          {achievements.map((text) => (
            <Chip
              key={text}
              icon={<EmojiEventsIcon />}
              label={text}
              sx={{
                bgcolor: "#e8f8ff",
                fontWeight: 500,
              }}
            />
          ))}
        </Stack>
      </Box>

      <Box flex={1}>
        <img
          src={herologo}
          alt="Faran Academy Banner"
          style={{
            width: "100%",
            maxHeight: 360,
            borderRadius: 14,
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
}