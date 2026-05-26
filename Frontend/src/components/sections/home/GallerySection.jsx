// ==============================
// CampusGallerySection.jsx
// ==============================

import React from "react";

import {
    Box,
    Grid,
    Typography,
    Container,
} from "@mui/material";

import {
    campusGalleryImages,
} from "../../../constants/home/homeData";

export default function CampusGallerySection() {
    return (
        <Box
            sx={{
                py: { xs: 4, md: 6 },
            }}
        > <Container maxWidth="xl"> <Typography
            variant="h4"
            fontWeight={700}
            color="primary.main"
            mb={3}
            align="center"
        >
            Campus Life Gallery </Typography>

            
                <Grid container spacing={3}>
                    {campusGalleryImages.map((img, i) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            key={i}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    height: 220,
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    transition: "0.3s",

                                    "&:hover": {
                                        transform: "scale(1.03)",
                                    },
                                }}
                            >
                                <img
                                    src={img}
                                    alt={`Campus ${i + 1}`}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>

    );
}
