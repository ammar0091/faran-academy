import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";

import { homeUi } from "../../../constants/home/modernHomeData";
import { ImageCard, SectionHeading, homeSectionSx } from "./HomePrimitives";

function FacultySection({ faculty }) {
  return (
    <Box component="section" sx={{ ...homeSectionSx, bgcolor: "#fff" }}>
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "flex-end" }}
          gap={3}
          sx={{ mb: { xs: 5, md: 10 } }}
        >
          <Box sx={{ maxWidth: 760 }}>
            <SectionHeading eyebrow="Our Team" title="Expert Mentors." />
            <Typography
              sx={{
                color: homeUi.muted,
                fontSize: { xs: 17, md: 20 },
                lineHeight: 1.65,
                mt: 3,
              }}
            >
              Learn from dedicated mentors committed to every student's academic and personal growth.
            </Typography>
          </Box>
          <Button
            component={Link}
            to="/about"
            sx={{
              color: homeUi.primary,
              borderBottom: `4px solid ${homeUi.primary}`,
              borderRadius: 0,
              fontWeight: 900,
              fontSize: 18,
            }}
          >
            View All Team
          </Button>
        </Stack>

        <Grid container spacing={2}>
          {faculty.map((member, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
              key={`${member.name}-${index}`}
              sx={{ mt: { lg: index % 2 ? 6 : 0 } }}
              maxWidth={300}
            >
              <ImageCard
                src={member.image}
                alt={member.name}
                sx={{ aspectRatio: "3 / 4", borderRadius: { xs: 6, md: 8 } }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,67,121,0.92), rgba(0,67,121,0.18), transparent)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    p: 4,
                  }}
                >
                  <Typography sx={{ color: "#fff", fontWeight: 900, fontSize: 25 }}>
                    {member.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: homeUi.gold,
                      fontWeight: 900,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      fontSize: 12,
                    }}
                  >
                    {member.role}
                  </Typography>
                </Box>
              </ImageCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default React.memo(FacultySection);
