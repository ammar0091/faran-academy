import React from "react";

import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import Team from "../../Team";
import Testimonial from "../../Testimonial";

export default function PeopleSection() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 0 },
      }}
    >
      <Container>
        <Grid
          container
          spacing={6}
          alignItems="flex-start"
        >
          {/* TEAM */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ minWidth: 0 }}
          >
            <Box>
              <Typography
                variant="overline"
                color="primary"
                fontWeight={800}
                letterSpacing={2}
                mb={1}
                display="block"
              >
                Our Leadership
              </Typography>

              <Typography
                variant="h5"
                fontWeight={800}
                mb={3}
              >
                People who lead by example
              </Typography>

              <Paper
                sx={{
                  p: 2,
                  borderRadius: 3,
                }}
              >
                <Team />
              </Paper>
            </Box>
          </Grid>

          {/* TESTIMONIALS */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ minWidth: 0 }}
          >
            <Box>
              <Typography
                variant="overline"
                color="primary"
                fontWeight={800}
                letterSpacing={2}
                mb={1}
                display="block"
              >
                Voices of Our Community
              </Typography>

              <Typography
                variant="h5"
                fontWeight={800}
                mb={3}
              >
                Stories from students & parents
              </Typography>

              <Paper
                sx={{
                  p: 2,
                  borderRadius: 3,
                }}
              >
                <Testimonial limit={6} />
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}