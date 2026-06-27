import React, { useEffect, useState } from "react";

import {
  Box,
  Grid,
  Card,
  Typography,
  Skeleton,
} from "@mui/material";

import { getFaculty } from "../utils/api";

export default function Team({
  limit,
  skip = 0,
}) {
  const [faculty, setFaculty] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFaculty() {
      try {
        const res = await getFaculty();
        setFaculty(res.data || []);
      } catch (error) {
        console.error(
          "Error fetching faculty:",
          error
        );
      } finally {
        setLoading(false);
      }
    }

    fetchFaculty();
  }, []);

  const displayedFaculty = limit
    ? faculty.slice(skip, skip + limit)
    : faculty.slice(skip);

  /* ===========================
      LOADING STATE
  =========================== */
  if (loading) {
    return (
      <Box>
        <Grid container spacing={4}>
          {Array.from({
            length: limit || 3,
          }).map((_, index) => (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              key={index}
            >
              <Card
                sx={{
                  height: 380,
                  borderRadius: "24px",
                  background:
                    "rgba(255,255,255,0.08)",
                  p: 2,
                }}
              >
                <Skeleton
                  variant="rounded"
                  width={120}
                  height={120}
                  sx={{
                    borderRadius: "18px",
                    mb: 2,
                  }}
                />

                <Skeleton
                  variant="text"
                  width="70%"
                  height={50}
                />

                <Skeleton
                  variant="text"
                  width="50%"
                  height={30}
                />

                <Skeleton
                  variant="text"
                  width="100%"
                  height={35}
                />

                <Skeleton
                  variant="text"
                  width="85%"
                  height={35}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  return (
    <Box>
      <Grid
        container
        spacing={4}
        justifyContent="center"
      >
        {displayedFaculty.map(
          (member, index) => (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              key={
                member._id || index
              }
              sx={{
                display: "flex",
              }}
            >
              <Card
                sx={{
                  width: 380,
                  height: 380,

                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%)",

                  backdropFilter:
                    "blur(12px)",

                  borderRadius:
                    "24px",

                  border:
                    "1px solid rgba(255,255,255,0.12)",

                  p: 2,

                  color: "#fff",

                  display: "flex",
                  flexDirection:
                    "column",

                  position:
                    "relative",

                  overflow:
                    "hidden",

                  transition:
                    "all .35s ease",

                  "&::before": {
                    content: '""',
                    position:
                      "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background:
                      "linear-gradient(90deg, #FDB515, #FFD86B)",
                  },

                  "&:hover": {
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 100%)",

                    transform:
                      "translateY(-6px)",

                    boxShadow:
                      "0 20px 40px rgba(0,0,0,.18)",
                  },
                }}
              >
                {/* IMAGE */}
                <Box
                  component="img"
                  src={
                    member.image ||
                    "/assets/faculty/default.jpg"
                  }
                  alt={member.name}
                  sx={{
                    width: 120,
                    height: 120,

                    objectFit:
                      "cover",

                    borderRadius:
                      "18px",

                    border:
                      "4px solid #FDB515",

                    boxShadow:
                      "0 10px 24px rgba(253,181,21,.25)",

                    mb: 2,

                    flexShrink: 0,
                  }}
                />

                {/* Accent Line */}
                <Box
                  sx={{
                    width: 40,
                    height: 3,
                    bgcolor:
                      "#FDB515",
                    borderRadius: 10,
                    mb: 2,
                  }}
                />

                {/* NAME */}
                <Typography
                  sx={{
                    fontSize: {
                      xs: "1.8rem",
                      md: "2rem",
                    },

                    fontWeight: 800,

                    lineHeight: 1.15,

                    letterSpacing:
                      "-0.02em",

                    mb: 1,

                    overflow:
                      "hidden",

                    display:
                      "-webkit-box",

                    WebkitLineClamp:
                      2,

                    WebkitBoxOrient:
                      "vertical",
                  }}
                >
                  {member.name}
                </Typography>

                {/* DESIGNATION */}
                <Typography
                  sx={{
                    color:
                      "#FDB515",

                    textTransform:
                      "uppercase",

                    letterSpacing:
                      "1.5px",

                    fontWeight: 700,

                    fontSize:
                      ".9rem",

                    minHeight: 35,

                    mb: 2,

                    overflow:
                      "hidden",

                    textOverflow:
                      "ellipsis",

                    whiteSpace:
                      "nowrap",
                  }}
                >
                  {member.role ||
                    member.designation}
                </Typography>

                {/* BIO */}
                <Typography
                  sx={{
                    color:
                      "rgba(255,255,255,0.82)",

                    fontSize:
                      ".95rem",

                    lineHeight: 1.9,

                    fontStyle:
                      "italic",

                    overflow:
                      "hidden",

                    display:
                      "-webkit-box",

                    WebkitLineClamp:
                      4,

                    WebkitBoxOrient:
                      "vertical",
                  }}
                >
                  "
                  {member.bio ||
                    member.subject ||
                    "Education is not the filling of a vessel, but the kindling of a flame that burns for a lifetime."}
                  "
                </Typography>

                <Box
                  sx={{
                    flexGrow: 1,
                  }}
                />
              </Card>
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
}