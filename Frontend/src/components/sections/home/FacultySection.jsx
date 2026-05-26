import React from "react";

import {
    Box,
    Grid,
    Typography,
    Divider,
    Container,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import Team from "../../../components/Team";

import {
    facultyHighlights,
} from "../../../constants/home/homeData";

export default function FacultySection() {
    return (
        <Box
            sx={{
                position: "relative",
                py: { xs: 8, md: 12 },
                background:
                    "linear-gradient(180deg, #f7fafc 0%, #eaf1ff 60%, #fff 100%)",
                borderRadius: { md: 6 },
            }}
        > <Container>
                <Grid
                    container
                    spacing={6}
                    alignItems="flex-start"
                    justifyContent="space-between"
                    max
                >
                    {/* LEFT */} <Grid item
                        xs={12}
                        md={5}
                        sx={{
                            flexShrink: 0,
                            maxWidth: { md: "42%" },
                        }}> <Typography
                            variant="overline"
                            color="primary"
                            fontWeight={700}
                            letterSpacing={2}
                            mb={2}
                            display="block"
                        >
                            Our Team </Typography>

                        <Typography
                            variant="h4"
                            fontWeight={700}
                            mb={3}
                        >
                            Meet Our Faculty
                        </Typography>

                        <Typography
                            variant="body1"
                            color="text.secondary"
                            mb={4}
                            sx={{
                                lineHeight: 1.8,
                                fontSize: {
                                    xs: 14,
                                    sm: 15,
                                    md: 16,
                                },
                            }}
                        >
                            We take pride in our team of accomplished
                            educators and mentors.
                        </Typography>

                        <Divider
                            sx={{
                                width: 60,
                                mb: 4,
                                borderColor: "primary.main",
                            }}
                        />

                        {facultyHighlights.map((point) => (
                            <Box
                                key={point}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    mb: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 30,
                                        height: 30,
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        mr: 2,
                                        bgcolor: "#edf4ff",
                                    }}
                                >
                                    <CheckCircleIcon
                                        color="primary"
                                        sx={{ fontSize: 20 }}
                                    />
                                </Box>

                                <Typography>{point}</Typography>
                            </Box>
                        ))}
                    </Grid>

                    {/* RIGHT */}
                    <Grid item xs={12} md={7}>
                        <Grid
                            container
                            spacing={3}
                            justifyContent="center"
                            alignItems="stretch"
                        >
                            <Team limit={4} />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
