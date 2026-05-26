import React from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

export default function AboutHero() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 0 } }}>
      <Container>
        <Grid
          container
          spacing={6}
          alignItems="center"
          sx={{ flexWrap: { xs: "wrap", md: "nowrap" } }}
        >
          {/* LEFT CONTENT */}
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: { xs: "100%", md: 520 } }}>
              <Typography
                variant="overline"
                color="primary"
                fontWeight={800}
                letterSpacing={2}
                mb={1}
                display="block"
              >
                About Faran Academy
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  lineHeight: 1.02,
                  mb: 2,
                }}
              >
                Building curious minds and compassionate leaders since 1990
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontSize: { xs: 15, md: 16 },
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                Faran Academy is a learning ecosystem where inquiry,
                creativity and character intersect. We blend strong
                academic foundations with project-driven learning so
                students learn to ask better questions, collaborate
                deeply and apply knowledge to real community problems.
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 3 }}
              >
                <strong>Why we do it:</strong> We believe the future
                belongs to people who can think critically and act
                compassionately. Our programs are designed to cultivate
                those capacities from early years through graduation.
              </Typography>

              <Stack direction="row" spacing={2}>
                <Link
                  to="/admissions"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      px: 4,
                      fontWeight: 800,
                    }}
                  >
                    Admissions
                  </Button>
                </Link>

                <Button
                  variant="outlined"
                  size="large"
                  onClick={() =>
                    document
                      .getElementById("our-journey")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                >
                  Our Journey
                </Button>
              </Stack>
            </Box>
          </Grid>

          {/* RIGHT IMAGE */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: 640,
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: 8,
              }}
            >
              <CardMedia
                component="img"
                image="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1600&q=80"
                alt="Faran Academy"
                sx={{
                  width: "100%",
                  height: { xs: 300, md: 420 },
                  objectFit: "cover",
                  display: "block",
                  borderRadius: 2,
                  boxShadow:
                    "0 8px 24px rgba(0,0,0,0.15)",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}