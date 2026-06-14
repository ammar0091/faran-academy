import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import { homeUi } from "../../../constants/home/modernHomeData";

function StatsSection({ stats = [] }) {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: homeUi.primary,
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
        >
          {stats.map((item) => (
            <Grid
              item
              xs={6}
              md={3}
              key={item.label}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    color: homeUi.gold,
                    fontSize: { xs: 42, md: 68 },
                    fontWeight: 900,
                    lineHeight: 1,
                  }}
                >
                  {item.num}
                </Typography>

                <Typography
                  sx={{
                    color: homeUi.sky,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    fontSize: 12,
                    mt: 1,
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default React.memo(StatsSection);