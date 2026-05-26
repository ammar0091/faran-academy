import React from "react";

import {
    Box,
    Typography,
    Stack,
    Avatar,
} from "@mui/material";

export default function PrincipalMessageSection({
    faculty,
}) {
    if (faculty.length === 0) return null;

    return (
        <Box
            sx={{
                my: { xs: 4, md: 5 },
                bgcolor: "#e8faff",
                p: 3,
                borderRadius: 6,
            }}
        > <Typography
            variant="h4"
            fontWeight={700}
            mb={2.5}
            color="primary.main"
            align="center"
        >
                Principal's Message </Typography>

            <Stack
                direction={{
                    xs: "column",
                    sm: "row",
                }}
                spacing={4}
                alignItems="center"
                justifyContent="center"
            >
                <Avatar
                    src={faculty[0].image}
                    sx={{
                        width: 90,
                        height: 90,
                        mx: "auto",
                        boxShadow: 1,
                    }}
                />

                <Typography
                    variant="body1"
                    sx={{
                        fontSize: 18,
                        maxWidth: 620,
                    }}
                >
                    "
                    {faculty[0].message ||
                        "At Faran Academy, we focus on fostering passion, integrity, and resilience."}
                    "
                    <br />
                    <b>
                        - {faculty[0].name},
                        {" "}
                        {faculty[0].role ||
                            faculty[0].designation}
                    </b>
                </Typography>
            </Stack>
        </Box>

    );
}
