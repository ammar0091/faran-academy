import React from "react";
import { Card, CardMedia, Box, CardContent, Typography, Button, Avatar } from "@mui/material";

export default function Coursecard({ img, title, icon, desc, instructor, accent }) {
  return (
    <Card
      sx={{
        position: "relative",
        borderRadius: 5,
        minHeight: 390,
        boxShadow: "0 8px 48px 0 rgba(30,52,95,0.16)",
        overflow: "hidden",
        background: "rgba(255,255,255,0.73)",
        filter: "blur(0)",
        backdropFilter: "blur(14px)",
        display: "flex",
        flexDirection: "column",
        transition: "0.23s cubic-bezier(.18,1.17,.61,.91)",
        "&:hover": {
          boxShadow: `0 16px 64px 0 ${accent || "#2278e9a6"}`,
          transform: "translateY(-7px) scale(1.021)"
        }
      }}
    >
      <Box sx={{ pt: 3, px: 3, display: "flex", alignItems: "center", gap: 2 }}>
        {icon && (
          <Avatar sx={{ bgcolor: accent || "#005baa", width: 46, height: 46 }}>
            {icon}
          </Avatar>
        )}
        <Typography variant="h6" fontWeight={700} color={accent || "primary"} sx={{ fontSize: 22 }}>
          {title}
        </Typography>
      </Box>
      <CardMedia
        component="img"
        alt={title}
        height="120"
        image={img}
        sx={{ objectFit: "cover", borderRadius: 4, width: "92%", mx: "auto", my: 2, boxShadow: "0 3px 24px #0081ff0d" }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="body2" color="text.secondary" sx={{ minHeight: 76 }}>{desc}</Typography>
        <Box sx={{ mt: 2, color: "#4860A1", fontWeight: 500, fontSize: 15 }}>
          Instructor: {instructor}
        </Box>
      </CardContent>
      <Button
        variant="outlined"
        size="large"
        sx={{
          m: 3, mt: 0,
          fontWeight: 700,
          borderRadius: 2.7,
          borderWidth: 1.7,
          color: accent || "#005baa",
          borderColor: accent || "#005baa",
          textTransform: "uppercase",
          background: "rgba(255,255,255,0.92)",
          "&:hover": {
            bgcolor: accent ? accent + "20" : "#005baa12"
          }
        }}
      >
        Learn More
      </Button>
    </Card>
  );
}
