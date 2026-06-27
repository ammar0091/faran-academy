import React from "react";

import {
  Box,
  Card,
  Typography,
} from "@mui/material";

export default function CourseCard({
  img,
  title,
  description,
  instructor,
}) {
  return (
    <Card
      sx={{
        height: 500,

        display: "flex",
        flexDirection: "column",

        borderRadius: "28px",

        overflow: "hidden",

        background:
          "linear-gradient(135deg,#0B4577 0%,#005BAA 100%)",

        color: "#fff",

        boxShadow:
          "0 20px 40px rgba(0,91,170,.18)",

        transition: "all .35s ease",

        "&:hover": {
          transform: "translateY(-10px)",

          boxShadow:
            "0 30px 60px rgba(0,91,170,.25)",

          "& img": {
            transform: "scale(1.08)",
          },
        },
      }}
    >
      {/* IMAGE */}
      <Box
        sx={{
          overflow: "hidden",
          height: 240,
        }}
      >
        <Box
          component="img"
          src={img}
          alt={title}
          sx={{
            width: "100%",
            height: "100%",

            objectFit: "cover",

            transition:
              "transform .6s ease",
          }}
        />
      </Box>

      {/* CONTENT */}
      <Box
        sx={{
          p: 3.5,
          flexGrow: 1,
        }}
      >
        <Typography
          sx={{
            color: "#FDB515",

            fontWeight: 700,

            letterSpacing: "2px",

            textTransform:
              "uppercase",

            fontSize: ".8rem",

            mb: 1.5,
          }}
        >
          Academic Program
        </Typography>

        <Typography
          sx={{
            fontWeight: 800,

            fontSize: "1.5rem",

            lineHeight: 1.3,

            minHeight: 70,

            mb: 2,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            color:
              "rgba(255,255,255,.82)",

            lineHeight: 1.9,

            fontSize: ".95rem",

            display:
              "-webkit-box",

            WebkitLineClamp: 4,

            WebkitBoxOrient:
              "vertical",

            overflow: "hidden",

            minHeight: 110,
          }}
        >
          {description}
        </Typography>
      </Box>

      {/* FOOTER */}
      <Box
        sx={{
          px: 3.5,
          py: 2.5,

          borderTop:
            "1px solid rgba(255,255,255,.12)",

          display: "flex",

          justifyContent:
            "space-between",

          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "#FDB515",

            fontWeight: 600,

            overflow: "hidden",

            textOverflow:
              "ellipsis",

            whiteSpace: "nowrap",

            maxWidth: 180,
          }}
        >
          {instructor ||
            "Expert Faculty"}
        </Typography>

        <Typography
          sx={{
            color: "#fff",

            fontWeight: 700,
          }}
        >
          Explore →
        </Typography>
      </Box>
    </Card>
  );
}