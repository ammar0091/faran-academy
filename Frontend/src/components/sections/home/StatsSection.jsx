import React from "react";
import { Box, Grid, Typography } from "@mui/material";

export default function StatsSection({ schoolStats }) {
  return (
    <Grid
      container
      spacing={{ xs: 4, md: 6 }}
      justifyContent="center"
      sx={{
        bgcolor: "#005baa",
        color: "#fff",
        borderRadius: { xs: 3, md: 4 },
        p: { xs: 3, md: 4 },
        mb: { xs: 4, md: 5 },
        position: "relative",
      }}
    >
      {schoolStats.map((item) => (
        <Grid item xs={6} sm={3} key={item.label}>
          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{
                width: 54,
                height: 54,
                mx: "auto",
                mb: 1.2,
                borderRadius: "50%",
                bgcolor: "#fff",
                color: "#005baa",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.icon}
            </Box>

            <Typography
              sx={{
                fontWeight: 900,
                fontSize: {
                  xs: 28,
                  sm: 32,
                  md: 38,
                },
              }}
            >
              {item.num}
            </Typography>

            <Typography>{item.label}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}