
// ==============================
// TestimonialsSection.jsx
// ==============================

import React from "react";

import {
Box,
Typography,
Container,
} from "@mui/material";

import Testimonial from "../../Testimonial";

export default function TestimonialsSection() {
return (
<Box
sx={{
py: { xs: 4, md: 8 },
}}
> <Container maxWidth="lg"> <Typography
       variant="h4"
       fontWeight={700}
       color="primary.main"
       mb={5}
       align="center"
     >
What Our Community Says </Typography>

```
    <Testimonial limit={6} />
  </Container>
</Box>


);
}
