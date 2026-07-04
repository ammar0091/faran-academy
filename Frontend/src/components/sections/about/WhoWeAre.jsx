import React from "react";
import {
  Box,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

const features = [
  "Balanced Islamic & Modern Education",
  "Urdu & English Medium Learning",
  "Strong Moral Values & Discipline",
  "Individual Attention for Every Child",
];

export default function WhoWeAre() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 14 },
        px: { xs: 2, md: 0 },
        background: "#f5f5f5",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          {/* Left Image */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 650,
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  bottom: -35,
                  right: -35,
                  width: "100%",
                  height: "100%",
                  borderRadius: "40px",
                  background: "#e7eaee",
                  zIndex: 1,
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  left: -25,
                  bottom: 120,
                  width: 95,
                  height: 95,
                  border: "18px solid #f4e4bc",
                  borderRadius: "6px",
                  zIndex: 1,
                }}
              />

              <CardMedia
                component="img"
                // Replace this with your school's image later
                image="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80"
                alt="Faran Academy"
                sx={{
                  position: "relative",
                  zIndex: 2,
                  width: "100%",
                  height: { xs: 380, md: 700 },
                  objectFit: "cover",
                  borderRadius: "40px",
                  boxShadow: "0 25px 60px rgba(0,0,0,0.08)",
                }}
              />
            </Box>
          </Grid>

          {/* Right Content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: 600 }}>
              <Typography
                sx={{
                  color: "#f4a300",
                  fontWeight: 700,
                  letterSpacing: 4,
                  textTransform: "uppercase",
                  fontSize: "0.8rem",
                  mb: 2,
                }}
              >
                Who We Are
              </Typography>

              <Typography
                sx={{
                  color: "#0B4A8B",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  mb: 3,
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                }}
              >
                Building Strong Foundations Through Knowledge & Values
              </Typography>

              <Typography
                sx={{
                  color: "#556070",
                  lineHeight: 1.9,
                  fontSize: { xs: "1rem", md: "1.08rem" },
                  mb: 3,
                }}
              >
                Faran Academy is dedicated to providing a nurturing learning
                environment where children receive both modern academic
                education and Islamic guidance. We believe that true education
                develops not only knowledge but also character, helping every
                child become confident, responsible, and compassionate.
              </Typography>

              <Typography
                sx={{
                  color: "#556070",
                  lineHeight: 1.9,
                  fontSize: { xs: "1rem", md: "1.05rem" },
                  mb: 5,
                }}
              >
                <strong style={{ color: "#0B4A8B" }}>
                  Our Educational Approach:
                </strong>{" "}
                Through Urdu and English medium instruction, dedicated teachers,
                and a focus on discipline and moral values, we create a balanced
                learning experience that supports every child's academic,
                personal, and ethical growth.
              </Typography>

              <Stack spacing={3}>
                {features.map((feature, index) => (
                  <Box
                    key={feature}
                    sx={{
                      p: 1,
                      borderRadius: "24px",
                      borderLeft: `6px solid ${
                        index % 2 === 0 ? "#0B4A8B" : "#f4a300"
                      }`,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#0B4A8B",
                        fontWeight: 600,
                        fontSize: "1.05rem",
                      }}
                    >
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}