import React from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Link } from "react-router-dom";

const PRIMARY = "#004379";
const SECONDARY = "#FEB316";
const ON_SECONDARY = "#6A4800";

function scrollToHash(link) {
  const hash = link?.includes("#") ? link.slice(link.indexOf("#") + 1) : "";
  const target = hash ? document.getElementById(hash) : null;

  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", `#${hash}`);
  }
}

export default function CommonHero({
  badge,
  title,
  highlight,
  subtitle,
  image,
  primaryBtn,
  primaryLink = "#",
  secondaryBtn,
  secondaryLink = "#",
}) {
  const handleHashClick = (event, link) => {
    if (!link?.includes("#")) return;

    const linkPath = link.split("#")[0];
    if (linkPath && linkPath !== window.location.pathname) return;

    event.preventDefault();
    scrollToHash(link);
  };

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        py: { xs: 4, md: 12 },
        // height: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        bgcolor: PRIMARY,
      }}
    >
      {/* Background Image */}

      {image && (
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 1,
          }}
        />
      )}

      {/* Overlay */}

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg,rgba(0,67,121,.92),rgba(0,91,161,.88))",
        }}
      />


      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
          px: { xs: 3, md: 8 },
        }}
      >
        <Box maxWidth={720}>
          
          {/* Breadcrumb */}

          <Typography
            sx={{
              color: alpha("#fff", 0.75),
              mb: 2,
            }}
          >
            <Link
              to="/"
              style={{
                color: SECONDARY,
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Home
            </Link>

            {" / "}

            {title}
          </Typography>

          {/* Badge */}

          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ mb: 2 }}
          >
            <Box
              sx={{
                width: 40,
                height: 4,
                bgcolor: "#FDB515",
                borderRadius: 2,
              }}
            />

            <Typography
              sx={{
                color: "#FDB515",
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                fontSize: "1.3rem",
              }}
            >
              {badge}
            </Typography>
          </Stack>
          {/* Title */}

          <Typography
            variant="h1"
            sx={{
              color: "#fff",
              fontWeight: 600,
              fontSize: {
                xs: "2rem",
                md: "3rem",
              },
              lineHeight: 1.1,
              mb: 2,
            }}
          >
            {highlight}

           
          </Typography>

          {/* Description */}

          <Typography
            sx={{
              color: alpha("#fff", 0.88),
              maxWidth: 560,
              lineHeight: 1.8,
              fontSize: "1.05rem",
              mb: 4,
            }}
          >
            {subtitle}
          </Typography>

          {/* Buttons */}

          {(primaryBtn || secondaryBtn) && (
            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={2}
            >
              {primaryBtn && (
                <Button
                  component={Link}
                  to={primaryLink}
                  variant="contained"
                  endIcon={<ArrowDownwardIcon />}
                  onClick={(event) => handleHashClick(event, primaryLink)}
                  sx={{
                    bgcolor: SECONDARY,
                    color: ON_SECONDARY,
                    px: 4,
                    py: 1.6,
                    borderRadius: 2,
                    fontWeight: 700,
                    "&:hover": {
                      bgcolor: SECONDARY,
                      // transform: "translateY(-2px)",
                    },
                  }}
                >
                  {primaryBtn}
                </Button>
              )}

              {secondaryBtn && (
                <Button
                  component={Link}
                  to={secondaryLink}
                  variant="outlined"
                  onClick={(event) => handleHashClick(event, secondaryLink)}
                  sx={{
                    borderColor: alpha("#fff", 0.3),
                    color: "#fff",
                    px: 4,
                    py: 1.6,
                    borderRadius: 2,
                    backdropFilter: "blur(12px)",
                    bgcolor: alpha("#fff", 0.05),
                    "&:hover": {
                      bgcolor: alpha("#fff", 0.1),
                      borderColor: alpha("#fff", 0.3),
                    },
                  }}
                >
                  {secondaryBtn}
                </Button>
              )}
            </Stack>
          )}
        </Box>
      </Container>
    </Box>
  );
}
