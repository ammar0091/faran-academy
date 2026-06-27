import React, { useState } from "react";
import {
  Box,
  Button,
  Collapse,
  Container,
  Typography,
} from "@mui/material";

import Team from "../../Team";

export default function PeopleSection() {
  const [showAll, setShowAll] = useState(false);

  const toggleFaculty = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #004B87 0%, #00569E 100%)",
      }}
    >
      <Container maxWidth="xl">
        {/* header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            gap: 4,
            mb: 6,
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: {
              xs: "flex-start",
              md: "center",
            },
          }}
        >
          <Box maxWidth={700}>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                mb: 2,
                fontSize: {
                  xs: "2.5rem",
                  md: "3.5rem",
                },
              }}
            >
              Visionary{" "}
              <Box
                component="span"
                sx={{ color: "#B8E1FF" }}
              >
                Leadership
              </Box>
            </Typography>

            {/* accent line */}
            <Box
              sx={{
                width: 70,
                height: 4,
                mb: 2,
                borderRadius: 10,
                bgcolor: "#B8E1FF",
              }}
            />

            <Typography
              sx={{
                color: "rgba(255,255,255,0.78)",
                fontSize: "1rem",
                lineHeight: 1.8,
                maxWidth: 620,
              }}
            >
              Guided by a board of experts,
              pioneers, and academic
              luminaries dedicated to
              student success.
            </Typography>
          </Box>

          <Button
            variant="contained"
            onClick={toggleFaculty}
            sx={{
              bgcolor: "#fff",
              color: "#004B87",
              px: 4,
              py: 1.6,
              minWidth: 220,
              borderRadius: "14px",
              textTransform: "none",
              fontWeight: 700,
              boxShadow:
                "0 8px 24px rgba(0,0,0,.12)",
              transition: "all .25s ease-in-out",
              "&:hover": {
                bgcolor: "#fff",
                transform: "translateY(-2px)",
                boxShadow:
                  "0 12px 30px rgba(0,0,0,.18)",
              },
            }}
          >
            {showAll
              ? "Show Less"
              : "Meet Full Faculty"}
          </Button>
        </Box>

        {/* featured faculty */}
        <Team limit={3} />

        {/* remaining faculty */}
        <Collapse in={showAll} timeout={600}>
          <Box mt={4}>
            <Team skip={3} />
          </Box>
        </Collapse>
      </Container>
    </Box>
  );
}