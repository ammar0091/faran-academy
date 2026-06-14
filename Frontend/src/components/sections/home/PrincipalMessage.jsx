import React from "react";
import { Avatar, Box, Container, Typography } from "@mui/material";

import { homeUi } from "../../../constants/home/modernHomeData";
import { homeSectionSx } from "./HomePrimitives";

function PrincipalMessage({ principal }) {
  return (
    <Box
      component="section"
      sx={{
        ...homeSectionSx,
        bgcolor: homeUi.primary,
        position: "relative",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Avatar
          src={principal.image}
          alt={principal.name}
          sx={{
            width: { xs: 150, md: 190 },
            height: { xs: 150, md: 190 },
            mx: "auto",
            mb: 4,
            borderRadius: 8,
            border: `4px solid ${homeUi.gold}`,
            boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
            transform: "rotate(3deg)",
          }}
        />
        <Typography sx={{ color: homeUi.gold, fontSize: { xs: 48, md: 68 }, lineHeight: 1 }}>
          "
        </Typography>
        <Typography
          component="blockquote"
          sx={{
            color: "#fff",
            fontSize: { xs: 18, md: 35 },
            fontWeight: 700,
            fontStyle: "italic",
            lineHeight: 1.2,
            mb: 5,
          }}
        >
          "{principal.message}"
        </Typography>
        <Typography sx={{ color: homeUi.gold, fontSize: { xs: 22, md: 28 }, fontWeight: 900 }}>
          {principal.name}
        </Typography>
        <Typography
          sx={{
            color: homeUi.sky,
            textTransform: "uppercase",
            letterSpacing: "0.24em",
            fontWeight: 900,
            fontSize: 12,
          }}
        >
          {principal.role}
        </Typography>
      </Container>
    </Box>
  );
}

export default React.memo(PrincipalMessage);
