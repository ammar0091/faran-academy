import React from "react";

import {
  Box,
  Typography,
  Grid,
  Card,
  Stack,
  Divider,
} from "@mui/material";

import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import InfoIcon from "@mui/icons-material/Info";

// import { Link } from "react-router-dom";

export default function NewsEventsSection({
  events = [],
  notifications = [],
}) {
  return (
    <Box
      sx={{
        my: { xs: 5, md: 8 },
      }}
    >
      {/* SECTION HEADER */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
          mb: 4,
        }}
      > <Box>
          <Typography
            variant="overline"
            color="primary"
            fontWeight={800}
            letterSpacing={2}
          >
            Stay Updated </Typography>


          <Typography variant="h4" fontWeight={900}>
            News & Announcements
          </Typography>
        </Box>


      </Box>

      {/* MAIN GRID */}
      <Grid container spacing={3} alignItems="stretch">
       
        {/* EVENTS */}


        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
          }}
        >
          <Card
            sx={{
              width: "100%",
              maxWidth: 600,
              display: "flex",
              flexDirection: "column",
              borderRadius: 4,
              overflow: "hidden",
              border: "1px solid rgba(0,0,0,0.05)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
            }}
          >
            {/* TOP BAR */}
            <Box
              sx={{
                px: 3,
                py: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid rgba(0,0,0,0.05)",
                bgcolor: "#f8fbff",
              }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: 2.5,
                    background:
                      "linear-gradient(135deg,#005baa 0%,#0088cc 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                  }}
                >
                  <EventAvailableIcon fontSize="small" />
                </Box>

                <Box>
                  <Typography fontWeight={800}>
                    Latest Events
                  </Typography>

                  <Typography
                    variant="caption"
                    color="text.secondary"
                  >
                    Upcoming activities
                  </Typography>
                </Box>
              </Stack>
            </Box>

            {/* EVENT LIST */}
            <Stack divider={<Divider flexItem />}>
              {[...events]
                .sort(
                  (a, b) =>
                    new Date(b.date) - new Date(a.date)
                )
                .slice(0, 3)
                .map((event, idx) => (
                  <Box
                    key={event._id || idx}
                    sx={{
                      p: 2.5,
                      transition: "all 0.25s ease",

                      "&:hover": {
                        bgcolor: "#f8fbff",
                      },
                    }}
                  >
                    <Stack direction="row" spacing={2}>
                      {/* DATE */}
                      <Box
                        sx={{
                          minWidth: 60,
                          height: 60,
                          borderRadius: 3,
                          background:
                            "linear-gradient(135deg,#e8f4ff 0%,#f5fbff 100%)",
                          border:
                            "1px solid rgba(0,91,170,0.08)",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          variant="h6"
                          fontWeight={900}
                          lineHeight={1}
                          color="primary.main"
                        >
                          {new Date(event.date).getDate()}
                        </Typography>

                        <Typography
                          variant="caption"
                          sx={{
                            textTransform: "uppercase",
                            fontWeight: 700,
                          }}
                        >
                          {new Date(
                            event.date
                          ).toLocaleString("default", {
                            month: "short",
                          })}
                        </Typography>
                      </Box>

                      {/* CONTENT */}
                      <Box flex={1}>
                        <Typography
                          fontWeight={800}
                          sx={{
                            mb: 0.5,
                            lineHeight: 1.3,
                          }}
                        >
                          {event.title || "Event"}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            lineHeight: 1.7,
                            display: "-webkit-box",
                            overflow: "hidden",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {event.description}
                        </Typography>

                      </Box>
                    </Stack>
                  </Box>
                ))}
            </Stack>
          </Card>
        </Grid>


        {/* ANNOUNCEMENTS */}

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
          }}
        >
          <Card
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: 4,
              overflow: "hidden",
              border: "1px solid rgba(0,0,0,0.05)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
            }}
          >
            {/* TOP BAR */}
            <Box
              sx={{
                px: 3,
                py: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid rgba(0,0,0,0.05)",
                bgcolor: "#f8fbff",
              }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: 2.5,
                    background:
                      "linear-gradient(135deg,#ffd6d6 0%,#d0f0ff 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <InfoIcon color="primary" fontSize="small" />
                </Box>

                <Box>
                  <Typography fontWeight={800}>
                    Announcements
                  </Typography>

                  <Typography
                    variant="caption"
                    color="text.secondary"
                  >
                    Important updates
                  </Typography>
                </Box>
              </Stack>
            </Box>

            {/* ANNOUNCEMENT LIST */}
            <Stack divider={<Divider flexItem />}>
              {[...notifications]
                .sort(
                  (a, b) =>
                    new Date(b.createdAt) -
                    new Date(a.createdAt)
                )
                .slice(0, 3)
                .map((note, idx) => (
                  <Box
                    key={note._id || idx}
                    sx={{
                      p: 2.5,
                      transition: "all 0.25s ease",

                      "&:hover": {
                        bgcolor: "#f8fbff",
                      },
                    }}
                  >
                    <Stack direction="row" spacing={2}>
                      {/* ICON */}
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: "50%",
                          background:
                            "linear-gradient(135deg,#f3f9ff 0%,#edf7ff 100%)",
                          border:
                            "1px solid rgba(0,91,170,0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <InfoIcon
                          color="primary"
                          sx={{ fontSize: 20 }}
                        />
                      </Box>

                      {/* CONTENT */}
                      <Box flex={1}>
                        <Typography
                          fontWeight={800}
                          sx={{
                            mb: 0.5,
                            lineHeight: 1.3,
                          }}
                        >
                          {note.title || "Announcement"}
                        </Typography>

                        <Typography
                          variant="caption"
                          color="text.secondary"
                          display="block"
                          mb={0.7}
                        >
                          {new Date(
                            note.createdAt
                          ).toLocaleDateString()}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            lineHeight: 1.7,
                            display: "-webkit-box",
                            overflow: "hidden",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {note.message}
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                ))}
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
