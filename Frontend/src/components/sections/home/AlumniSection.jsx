
// ==============================
// AlumniSection.jsx
// ==============================

import React from "react";

import {
    Box,
    Grid,
    Card,
    Typography,
    Avatar,
    Divider,
    Container,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
    alumni as homeAlumni,
    alumniHighlights,
} from "../../../constants/home/homeData";

export default function AlumniSection() {
    return (
        <Box
            sx={{
                py: { xs: 8, md: 12 },
            }}
        > <Container> <Grid container spacing={6}>
            {/* LEFT */} <Grid item xs={12} md={7}> <Grid container spacing={2}>
                {homeAlumni.map((alum, index) => (<Grid
                    item
                    xs={12}
                    sm={6}
                    key={alum.name}
                >
                    <Card
                        sx={{
                            p: 3,
                            borderRadius: 4,
                            textAlign: "center",
                            transition: "0.3s",


                            "&:hover": {
                                transform: "translateY(-5px)",
                            },
                        }}
                    >
                        <Avatar
                            src={alum.img}
                            sx={{
                                width: 70,
                                height: 70,
                                mx: "auto",
                                mb: 2,
                            }}
                        />

                        <Typography fontWeight={700}>
                            {alum.name}
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            {alum.story}
                        </Typography>
                    </Card>
                </Grid>
                ))}
            </Grid>
            </Grid>

            {/* RIGHT */}
            <Grid item xs={12} md={5}>
                <Typography
                    variant="overline"
                    color="primary"
                    fontWeight={700}
                    letterSpacing={2}
                    mb={2}
                    display="block"
                >
                    Our Alumni
                </Typography>

                <Typography
                    variant="h4"
                    fontWeight={700}
                    mb={3}
                >
                    Inspiring Journeys
                </Typography>

                <Typography
                    variant="body1"
                    color="text.secondary"
                    mb={4}
                    sx={{
                        lineHeight: 1.8,
                    }}
                >
                    Our alumni have made remarkable
                    contributions worldwide.
                </Typography>

                <Divider
                    sx={{
                        width: 60,
                        mb: 4,
                        borderColor: "primary.main",
                    }}
                />

                {alumniHighlights.map((point) => (
                    <Box
                        key={point}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            mb: 2,
                        }}
                    >
                        <CheckCircleIcon
                            color="primary"
                            sx={{ mr: 2 }}
                        />

                        <Typography>{point}</Typography>
                    </Box>
                ))}
            </Grid>
        </Grid>
            </Container>
        </Box>


    );
}
