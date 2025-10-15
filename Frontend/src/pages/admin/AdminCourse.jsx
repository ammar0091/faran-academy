import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Typography,
  Alert,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  CircularProgress,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import api from "../../utils/api"; // ensure api has getCourses, addCourse, updateCourse, deleteCourse

export default function AdminCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [openDialog, setOpenDialog] = useState(false);
  const [currentCourse, setCurrentCourse] = useState({
    title: "",
    description: "",
    instructor: "",
    img: "",
  });
  const [editingId, setEditingId] = useState(null);

  // Fetch courses
  const fetchCourses = async () => {
    setLoading(true);
    try {
      const res = await api.getCourses();
      setCourses(res.data);
      setError("");
    } catch (err) {
      console.error(err.response?.data || err.message);
      setError("Failed to fetch courses.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // Open dialog for add/edit
  const handleOpenDialog = (course = null) => {
    if (course) {
      setCurrentCourse({
        title: course.title,
        description: course.description,
        instructor: course.instructor,
        img: course.img,
      });
      setEditingId(course._id);
    } else {
      setCurrentCourse({ title: "", description: "", instructor: "", img: "" });
      setEditingId(null);
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCurrentCourse({ title: "", description: "", instructor: "", img: "" });
    setEditingId(null);
  };

  // Handle form input changes
  const handleChange = (e) => {
    setCurrentCourse({ ...currentCourse, [e.target.name]: e.target.value });
  };

  // Save course (add or update)
  const handleSave = async () => {
    try {
      if (!currentCourse.title.trim()) {
        setError("Title is required.");
        return;
      }

      if (editingId) {
        // Update existing course
        await api.updateCourse(editingId, currentCourse);
      } else {
        // Add new course
        await api.addCourse(currentCourse);
      }

      fetchCourses();
      handleCloseDialog();
    } catch (err) {
      console.error(err.response?.data || err.message);
      setError("Failed to save course.");
    }
  };

  // Delete course
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this course?")) return;
    try {
      await api.deleteCourse(id);
      setCourses((prev) => prev.filter((c) => c._id !== id));
    } catch (err) {
      console.error(err.response?.data || err.message);
      setError("Failed to delete course.");
    }
  };

  return (
    <Box>
      <Typography variant="h4" mb={2} color="primary">
        Course Management
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Button
        variant="contained"
        color="success"
        sx={{ mb: 2 }}
        onClick={() => handleOpenDialog()}
      >
        Add New Course
      </Button>

      {loading ? (
        <Box display="flex" justifyContent="center" py={5}>
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Instructor</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.length > 0 ? (
                courses.map((c) => (
                  <TableRow key={c._id}>
                    <TableCell>{c.title}</TableCell>
                    <TableCell>{c.description}</TableCell>
                    <TableCell>{c.instructor}</TableCell>
                    <TableCell>
                      {c.img ? (
                        <img
                          src={c.img}
                          alt={c.title}
                          style={{ width: 80, height: 50, objectFit: "cover", borderRadius: 4 }}
                        />
                      ) : (
                        "N/A"
                      )}
                    </TableCell>
                    <TableCell>
                      <IconButton
                        color="primary"
                        onClick={() => handleOpenDialog(c)}
                        title="Edit Course"
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => handleDelete(c._id)}
                        title="Delete Course"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No courses found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Dialog for Add/Edit */}
      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        <DialogTitle>{editingId ? "Edit Course" : "Add New Course"}</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            name="title"
            value={currentCourse.title}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            name="description"
            value={currentCourse.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={3}
            margin="normal"
          />
          <TextField
            label="Instructor"
            name="instructor"
            value={currentCourse.instructor}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Image URL"
            name="img"
            value={currentCourse.img}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleSave}>
            {editingId ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
