import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  CircularProgress
} from "@mui/material";

import { getEvents } from "../utils/api";


export default function NewsEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    try {
      const res = await getEvents();
      setEvents(res.data.reverse()); // latest first
    } catch (err) {
      console.error("Failed to fetch events:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <Box bgcolor="#f8fafd" minHeight="100vh">
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 7 } }}>
        <Typography variant="h3" fontWeight={900} color="primary.main" mb={2} align="center">
          News & Events
        </Typography>
        <Typography align="center" color="text.secondary" sx={{ mb: 5 }}>
          Stay updated about all important school announcements, upcoming activities, and recent achievements.
        </Typography>

        {loading ? (
          <Box display="flex" justifyContent="center" mt={5}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={4}>
            {events.map((item, idx) => (
              <Grid item xs={12} key={item._id || idx} >
                <Paper
                  elevation={2}
                  sx={{

                    borderLeft: "5px solid #1976d2",
                    display: "flex",
                    alignItems: "flex-start",
                    borderRadius: 3,
                    p: 2.5,
                    gap: 2,
                    background: "#fff"
                  }}
                >
                  {/* <Box sx={{ fontSize: 34, display: "flex", alignItems: "center" }}>
                    {iconMap[item.type] || <AnnouncementIcon />}
                  </Box> */}
                  <Box sx={{ flex: 1 }}>
                     {item.images && item.images.length > 0 && (
                      <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {item.images.map((imgUrl, i) => (
                          <Box
                            key={i}
                            component="img"
                            src={imgUrl}
                            alt={`event-img-${i}`}
                            sx={{
                              width: "500px",
                              height: "200px",
                              objectFit: "cover",
                              borderRadius: 2,
                              border: "1px solid #ccc",
                              mb: 2,
                            }}
                          />
                        ))}
                      </Box>
                    )}
                    <Typography fontWeight={700} fontSize={18} mb={0.5} color="primary">
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary">{item.description}</Typography>
                    <Typography color="text.secondary">
                      {item.date ? new Date(item.date).toISOString().split("T")[0] : 'N/A'}
                    </Typography>
                   
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}
