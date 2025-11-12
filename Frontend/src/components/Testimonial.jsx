import React from "react";
import { Grid, Card, Typography, Avatar, Box } from "@mui/material";
import { testimonials as allTestimonials } from "../utils/data";

export default function Testimonial({ limit }) {
  const testimonials = allTestimonials || []; // ✅ ensure array
  const displayTestimonials = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <Grid container spacing={4} justifyContent="center">
      {displayTestimonials.map((testimonial, i) => (
        <Grid item xs={12} sm={6} md={4} key={i} sx={{ display: "flex", justifyContent: "center" }}>
          <Card
            sx={{
              position: "relative",
              p: 4,
              borderRadius: 4,
              width: 320,
              minHeight: 280,
              textAlign: "center",
              backdropFilter: "blur(12px)",
              background: "rgba(255,255,255,0.7)",
              boxShadow: "0 8px 28px rgba(0,80,200,0.15)",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-8px) scale(1.05)",
                boxShadow: "0 14px 40px rgba(0,80,200,0.25)",
              },
            }}
          >
            <Box sx={{ color: "primary.light", fontSize: 40, mb: 1 }}>❝</Box>
            <Box
              sx={{
                width: 80,
                height: 80,
                mx: "auto",
                mb: 2,
                borderRadius: "50%",
                background: "linear-gradient(135deg,#ffd6d6 0%,#d0f0ff 100%)",
                p: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar src={testimonial.img} sx={{ width: 70, height: 70 }} />
            </Box>

            <Typography
              variant="body1"
              sx={{ fontStyle: "italic", mb: 2, color: "text.primary", minHeight: 72 }}
            >
              "{testimonial.text}"
            </Typography>
            <Typography variant="subtitle1" fontWeight={600} color="text.primary">
              {testimonial.author}
            </Typography>
            <Typography variant="caption" sx={{ color: "primary.main" }}>
              {testimonial.role}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
