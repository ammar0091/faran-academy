import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Skeleton,
  Chip,
} from "@mui/material";
import api from "../utils/api";

function CourseListItem({ img, title, description, instructor }) {
  return (
    <>
      <ListItem
        alignItems="flex-start"
        sx={{
          py: 3,
          px: 2,
          borderRadius: 2,
          bgcolor: "#fff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        }}
      >
        {/* Course Thumbnail */}
        <ListItemAvatar>
          <Avatar
            src={img}
            alt={title}
            variant="rounded"
            sx={{
              width: 90,
              height: 90,
              mr: 2,
              borderRadius: 2,
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            }}
          />
        </ListItemAvatar>

        {/* Course Info */}
        <ListItemText
          primary={
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ color: "#005baa", mb: 1 }}
            >
              {title}
            </Typography>
          }
          secondary={
            <>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 1 }}
              >
                {description || "No description available"}
              </Typography>

              <Chip
                label={`Instructor: ${instructor}`}
                size="small"
                sx={{
                  bgcolor: "#eaf4ff",
                  color: "#005baa",
                  fontWeight: 600,
                }}
              />
            </>
          }
        />
      </ListItem>
      <Divider component="li" sx={{ my: 2 }} />
    </>
  );
}

export default function CoursesSection() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await api.getCourses();
        setCourses(res.data);
      } catch (err) {
        console.error("Failed to fetch courses:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchCourses();
  }, []);

  return (
    <Box sx={{ bgcolor: "#f3f6ff", py: 10 }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          align="center"
          fontWeight={600}
          sx={{ mb: 6, color: "#005baa" }}
        >
          Our Courses
        </Typography>

        <List>
          {loading
            ? Array.from({ length: 5 }).map((_, idx) => (
                <ListItem key={idx} sx={{ mb: 2 }}>
                  <Skeleton
                    variant="rectangular"
                    height={100}
                    width="100%"
                    sx={{ borderRadius: 2 }}
                  />
                </ListItem>
              ))
            : courses.map((course, idx) => (
                <CourseListItem key={idx} {...course} />
              ))}
        </List>
      </Container>
    </Box>
  );
}
