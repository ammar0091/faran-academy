import React from "react";
import {  Card, CardMedia, Typography,  } from "@mui/material";

export default function CourseCard({ img, title,  description, instructor, accent }) {
  return (
    <Card
      sx={{
        width: 340,
        minHeight: 320,
        borderRadius: 4,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        boxShadow: "0px 6px 20px rgba(40,120,250,0.07)",
        background: "linear-gradient(135deg,#f7fbfc 0%,#fff 100%)",
        border: "1px solid #eaf1fa",
        p: 3,
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-3px) scale(1.03)",
          boxShadow: "0px 12px 32px rgba(66,140,240,0.18)",
        },
      }}
    >
      {/* Course Image */}
      <CardMedia
        component="img"
        src={img}
        alt={title}
        sx={{
          width: 100,
          height: 100,
          borderRadius: "20%",
          mx: "auto",
          mb: 2,
          objectFit: "cover",
          border: `3px solid ${accent || "#005baa"}`,
          boxShadow: "0 2px 24px rgba(34,124,197,0.17)"
        }}
      />

      {/* Title */}
      <Typography fontWeight={600} fontSize={17} sx={{ mb: 1 }}>
        {title}
      </Typography>

      {/* Instructor */}
      <Typography color="text.secondary" fontSize={16} sx={{ mb: 1 }}>
        Instructor: {instructor}
      </Typography>

      {/* Description */}
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          fontSize: 14,
          mb: 2,
        }}
      >
        {description}
      </Typography>

    </Card>
  );
}
