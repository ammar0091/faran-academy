import React from "react";
import {
  Box,
  Typography,
  Button,
} from "@mui/material";

import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
      <Box
          sx={{
            bgcolor: "#005baa",
            color: "#fff",
            py: 4,
            px: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            mt: 7,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Typography variant="h6" fontWeight={700} mr={{ xs: 0, sm: 5 }} mb={{ xs: 2, sm: 0 }}>
            Ready to begin your journey?
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/contact"
            sx={{
              fontWeight: 700,
              px: 4,
              py: 1.2,
              borderRadius: 2,
              fontSize: 19,
              bgcolor: "#ffd43b",
              color: "#0b276c",
              "&:hover": { bgcolor: "#fff2a1" },
            }}
          >
            Contact Us
          </Button>
        </Box>
  );
}