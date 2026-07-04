import React from "react";
import {
  Box,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";

import MenuBookIcon from "@mui/icons-material/MenuBook";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SchoolIcon from "@mui/icons-material/School";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const PRIMARY = "#004379";
const SECONDARY = "#feb316";
const ON_SECONDARY = "#6a4800";
const MUTED = "#414751";
const SURFACE = "#f9f9fc";

const islamicImage =
  "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1200";

const classroomImage =
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200";

const cardSx = {
  borderRadius: 2,
  overflow: "hidden",
  minHeight: 300,
  boxShadow: "0 4px 20px rgba(0,91,161,.05)",
};

function ImageCard({
  image,
  label,
  title,
  text,
  tall,
}) {
  return (
    <Box
      sx={{
        ...cardSx,
        position: "relative",
        height: {
          xs: 360,
          md: tall ? 640 : 310,
        },
      }}
    >
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          p: { xs: 3, md: 4 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",

          background: `linear-gradient(to top,
            ${alpha(PRIMARY,0.95)},
            ${alpha(PRIMARY,.15)})`,
        }}
      >
        <Chip
          label={label}
          size="small"
          sx={{
            width: "fit-content",
            mb: 2,
            bgcolor: SECONDARY,
            color: ON_SECONDARY,
            fontWeight: 700,
          }}
        />

        <Typography
          sx={{
            color: "#fff",
            fontSize: 28,
            fontWeight: 800,
            mb: 1,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            color: alpha("#fff", .85),
            lineHeight: "26px",
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}

export default function LearningApproachSection() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: SURFACE,
        py: {
          xs: 9,
          md: 14,
        },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 760,
            mx: "auto",
            mb: 7,
          }}
        >
          <Typography
            sx={{
              color: PRIMARY,
              fontSize: {
                xs: 32,
                md: 42,
              },
              fontWeight: 800,
              mb: 2,
            }}
          >
            Our Learning Approach
          </Typography>

          <Typography
            sx={{
              color: MUTED,
              fontSize: 18,
              lineHeight: "30px",
            }}
          >
            At Faran Academy, we believe that true education nurtures both knowledge and
            character. Our balanced approach combines Islamic values with quality
            academics to help children grow into confident, responsible and
            compassionate individuals.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <ImageCard
              image={islamicImage}
              label="Islamic Studies"
              title="Building Faith & Character"
              text="Students are guided in Quran reading, Hadith, Islamic history and the practical application of Islamic values in daily life, helping them develop good character, discipline and a strong connection with their faith."
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <ImageCard
              tall
              image={classroomImage}
              label="Academic Learning"
              title="Strong Educational Foundation"
              text="Alongside Islamic education, students build a solid foundation in English, Mathematics, Science, Social Studies and other core subjects through engaging and age-appropriate learning."
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                ...cardSx,
                bgcolor: "#fff",
                p: 4,
                maxWidth: 400,
                height: "100%",
              }}
            >
              <FavoriteIcon
                sx={{
                  color: PRIMARY,
                  fontSize: 42,
                  mb: 2,
                }}
              />

              <Typography
                sx={{
                  color: PRIMARY,
                  fontWeight: 800,
                  fontSize: 24,
                  mb: 2,
                }}
              >
                Character Building
              </Typography>

              <Typography
                sx={{
                  color: MUTED,
                  lineHeight: "26px",
                }}
              >
                Respect, honesty, kindness, responsibility and good manners are
                nurtured as an essential part of every child's learning journey.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                ...cardSx,
                bgcolor: SECONDARY,
                p: 4,
                height: "100%",
                maxWidth: 400,
              }}
            >
              <SchoolIcon
                sx={{
                  color: ON_SECONDARY,
                  fontSize: 42,
                  mb: 2,
                }}
              />

              <Typography
                sx={{
                  color: ON_SECONDARY,
                  fontWeight: 800,
                  fontSize: 24,
                  mb: 2,
                }}
              >
                Interactive Learning
              </Typography>

              <Typography
                sx={{
                  color: alpha(
                    ON_SECONDARY,
                    .9
                  ),
                  lineHeight: "26px",
                }}
              >
                Classroom activities, storytelling, discussions and creative
                projects make learning enjoyable while encouraging curiosity and
                confidence.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                ...cardSx,
                bgcolor: PRIMARY,
                p: 4,
                height: "100%",
                maxWidth: 400,  
              }}
            >
              <AutoStoriesIcon
                sx={{
                  color: SECONDARY,
                  fontSize: 42,
                  mb: 2,
                }}
              />

              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: 24,
                  mb: 2,
                }}
              >
                Preparing for Tomorrow
              </Typography>

              <Typography
                sx={{
                  color: alpha(
                    "#fff",
                    .85
                  ),
                  lineHeight: "26px",
                  mb: 3,
                }}
              >
                We prepare children for today's world by developing communication
                skills, digital awareness and confidence while keeping them firmly
                rooted in Islamic values.
              </Typography>

              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{
                  color: SECONDARY,
                  fontWeight: 700,
                }}
              >
                <span>Learn with Purpose</span>
                <ArrowForwardIcon fontSize="small" />
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}