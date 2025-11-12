import React, { useEffect, useState } from "react";
import { Box, Grid, Card, Typography, Avatar } from "@mui/material";
import { getFaculty } from "../utils/api";

export default function FacultySection({ limit }) {  // <-- limit prop added
  const [faculty, setFaculty] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFaculty() {
      try {
        const res = await getFaculty();
        setFaculty(res.data || []);
      } catch (err) {
        console.error("Error fetching faculty:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchFaculty();
  }, []);

  if (loading) {
    return (
      <Box sx={{ textAlign: "center", py: 10 }}>
        <Typography variant="h5" color="primary">Loading faculty...</Typography>
      </Box>
    );
  }

  const displayedFaculty = limit ? faculty.slice(0, limit) : faculty;  // apply limit here

  return (
    <Box>
      <Grid container spacing={6} justifyContent="center">
        {displayedFaculty.map((member, idx) => (
          <Grid item xs={12} sm={6} md={3} key={member._id || idx} sx={{ display: "flex", justifyContent: "center" }}>
            <Card
              sx={{
                position: "relative",
                width: 300,
                minHeight: 240,
                borderRadius: 4,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                boxShadow: "0px 6px 20px rgba(40,120,250,0.07)",
                background: "linear-gradient(135deg,#f7fbfc 0%,#fff 100%)",
                border: "1px solid #eaf1fa",
                p: 3,
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-3px) scale(1.04)",
                  boxShadow: "0px 12px 32px rgba(66,140,240,0.18)",
                },
              }}
            >
              <Avatar
                src={member.image || "/assets/faculty/default.jpg"}
                sx={{
                  width: 82,
                  height: 82,
                  mx: "auto",
                  mb: 3,
                  border: "3px solid",
                  borderColor: "primary.main",
                  boxShadow: "0 2px 24px rgba(34,124,197,0.17)",
                  background: "linear-gradient(135deg,#e3f0fc 0%,#ffd0d0 100%)"
                }}
              />
              <Typography fontWeight={600} fontSize={17} sx={{ mb: 1 }}>{member.name}</Typography>
              <Typography color="text.secondary" fontSize={15} sx={{ mb: 1 }}>
                {member.role || member.designation}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  fontSize: 14,
                }}
              >
                {member.bio || member.subject}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
