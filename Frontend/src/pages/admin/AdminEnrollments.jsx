import React, { useEffect, useState } from "react";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Typography, Alert } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

export default function AdminEnrollments() {
  const [enrollments, setEnrollments] = useState([]);
  const [error, setError] = useState("");

  // Fetch all enrollments from backend
  const fetchEnrollments = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/enroll");
      setEnrollments(res.data);
    } catch (err) {
      setError("Failed to fetch enrollments.");
    }
  };

  useEffect(() => {
    fetchEnrollments();
  }, []);

  // Delete enrollment by id
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/enroll/${id}`);
      setEnrollments(prev => prev.filter(e => e._id !== id));
    } catch (err) {
      setError("Failed to delete enrollment form.");
    }
  };

  return (
    <Box>
      <Typography variant="h4" mb={2} color="primary">Enrollment Submissions</Typography>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>DOB</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Session</TableCell>
              <TableCell>Parent</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {enrollments.map((e) => (
              <TableRow key={e._id}>
                <TableCell>{e.name}</TableCell>
                <TableCell>{e.dob}</TableCell>
                <TableCell>{e.class}</TableCell>
                <TableCell>{e.session}</TableCell>
                <TableCell>{e.parent}</TableCell>
                <TableCell>{e.phone}</TableCell>
                <TableCell>{e.email}</TableCell>
                <TableCell>{e.address}</TableCell>
                <TableCell>
                  <IconButton color="error" onClick={() => handleDelete(e._id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {enrollments.length === 0 && (
              <TableRow>
                <TableCell colSpan={9} align="center">No enrollments found.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
