import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const PRIMARY = "#004379";
const SECONDARY_CONTAINER = "#feb316";
const ON_SECONDARY_CONTAINER = "#6a4800";

export default function AcademicsHero() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: 618,
        display: "flex",
        alignItems: "center",
        bgcolor: PRIMARY,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: 2.5, md: 8 },
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box maxWidth={720}>
          <Chip
            label="Academic Excellence"
            size="small"
            sx={{
              bgcolor: SECONDARY_CONTAINER,
              color: ON_SECONDARY_CONTAINER,
              fontFamily: "Hanken Grotesk",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              borderRadius: 9999,
              mb: 2,
            }}
          />

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.25rem", md: "3.5rem" },
              lineHeight: { xs: "2.75rem", md: "4rem" },
              color: "#ffffff",
              mb: 2.5,
            }}
          >
            Empowering Minds Through{" "}
            <Box
              component="span"
              sx={{
                color: SECONDARY_CONTAINER,
              }}
            >
              Holistic Education
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: 18,
              lineHeight: 1.75,
              color: alpha("#fff", 0.9),
              mb: 4,
              maxWidth: 520,
            }}
          >
            At Faran Academy, we merge traditional rigour with innovative
            methodologies to prepare students for a rapidly evolving global
            landscape.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            gap={2}
          >
            <Button
              variant="contained"
              endIcon={<ArrowDownwardIcon />}
              sx={{
                bgcolor: SECONDARY_CONTAINER,
                color: ON_SECONDARY_CONTAINER,
                borderRadius: 2,
                px: 4,
                py: 1.75,
                fontFamily: "Hanken Grotesk",
                fontWeight: 700,
                "&:hover": {
                  transform: "scale(1.05)",
                  bgcolor: SECONDARY_CONTAINER,
                },
                transition: "transform .2s",
              }}
            >
              Explore Curriculum
            </Button>

            <Button
              variant="outlined"
              sx={{
                borderColor: alpha("#fff", 0.3),
                color: "#fff",
                borderRadius: 2,
                px: 4,
                py: 1.75,
                fontFamily: "Hanken Grotesk",
                fontWeight: 700,
                backdropFilter: "blur(12px)",
                bgcolor: alpha("#fff", 0.05),
                "&:hover": {
                  bgcolor: alpha("#fff", 0.1),
                  borderColor: alpha("#fff", 0.3),
                },
              }}
            >
              Download Prospectus
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}