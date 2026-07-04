import React from "react";

import {
  Box,
  Chip,
  Container,
  Typography,
} from "@mui/material";

export default function GalleryTabs({
  value,
  onChange,
  categories,
}) {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },

        background:
          "linear-gradient(180deg,#F7FBFF 0%,#FFFFFF 100%)",

        position: "relative",
      }}
    >
      <Container maxWidth="lg">
      

        {/* Categories */}
        <Box
          sx={{
            display: "flex",

            flexWrap: "wrap",

            justifyContent: "center",

            gap: 2,
          }}
        >
          {categories.map((item, index) => {
            const active = value === index;

            return (
              <Chip
                key={item.label}
                label={item.label}
                clickable
                onClick={() => onChange(index)}
                sx={{
                  px: 3,

                  py: 2.8,

                  fontSize: ".95rem",

                  fontWeight: 700,

                  borderRadius: "50px",

                  transition: ".3s",

                  cursor: "pointer",

                  background: active
                    ? "linear-gradient(135deg,#005BAA,#0B4577)"
                    : "#fff",

                  color: active
                    ? "#fff"
                    : "#0B4577",

                  border: active
                    ? "none"
                    : "1px solid #dbe8f5",

                  boxShadow: active
                    ? "0 15px 35px rgba(0,91,170,.25)"
                    : "0 8px 25px rgba(0,0,0,.05)",

                  "&:hover": {
                    transform: "translateY(-3px)",

                    background:
                      "linear-gradient(135deg,#005BAA,#0B4577)",

                    color: "#fff",

                    boxShadow:
                      "0 15px 35px rgba(0,91,170,.22)",
                  },
                }}
              />
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}