
// ==============================
// AboutSection.jsx
// ==============================

import React from "react";

import {
    Box,
    Typography,
} from "@mui/material";

import {
    aboutFeatures,
} from "../../../constants/home/homeData";

export default function AboutSection() {
    return (
        <Box
            sx={{
                py: { xs: 6, md: 8 },
                px: { xs: 2, md: 4 },
                position: "relative",
                overflow: "hidden",
                borderRadius: 4,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: {
                        xs: "column-reverse",
                        md: "row",
                    },
                    alignItems: "center",
                    gap: { xs: 6, md: 10 },
                    position: "relative",
                    zIndex: 1,
                }}
            >
                {/* LEFT */} <Box flex={1}> <Typography
                    variant="overline"
                    fontWeight={700}
                    letterSpacing={2}
                    color="primary.main"
                    mb={2}
                >
                    About Our School </Typography>

                    <Typography
                        variant="h3"
                        fontWeight={800}
                        color="text.primary"
                        mb={3}
                        sx={{ lineHeight: 1.2 }}
                    >
                        Nurturing Minds, Inspiring Futures
                    </Typography>

                    <Typography
                        variant="body1"
                        color="text.secondary"
                        mb={2}
                        sx={{
                            fontSize: { xs: 15, md: 16 },
                            lineHeight: 1.8,
                        }}
                    >
                        At Faran Academy, we combine rigorous academics,
                        creative arts, leadership development,
                        and global exposure to help students thrive.
                    </Typography>

                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                            fontSize: { xs: 15, md: 16 },
                            lineHeight: 1.8,
                        }}
                    >
                        Our students are equipped to innovate,
                        lead and contribute meaningfully to society.
                    </Typography>

                    <Box
                        sx={{
                            mt: 4,
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 2,
                        }}
                    >
                        {aboutFeatures.map((feature) => (
                            <Box
                                key={feature}
                                sx={{
                                    px: 3,
                                    py: 1,
                                    borderRadius: 2,
                                    background: "rgba(255,255,255,0.3)",
                                    backdropFilter: "blur(8px)",
                                    fontWeight: 600,
                                    display: "inline-block",
                                    fontSize: 14,
                                    color: "text.primary",
                                    transition: "transform 0.3s",

                                    "&:hover": {
                                        transform:
                                            "translateY(-3px) scale(1.05)",
                                    },
                                }}
                            >
                                {feature}
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* RIGHT */}
                <Box
                    flex={1}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box
                        component="img"
                        src="/assets/features/values.svg"
                        alt="School Values"
                        sx={{
                            width: { xs: "80%", md: "100%" },
                            maxHeight: 300,
                            borderRadius: 4,
                            boxShadow:
                                "0px 12px 28px rgba(0,0,0,0.1)",
                        }}
                    />
                </Box>
            </Box>
        </Box>

    );
}
