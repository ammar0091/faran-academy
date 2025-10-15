import React, { useEffect, useState } from "react";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Typography, Alert } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("");

  // Fetch all contacts from backend
  const fetchContacts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/contact");
      setContacts(res.data);
    } catch (err) {
      setError("Failed to fetch contacts.");
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Delete contact by id
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/contact/${id}`);
      setContacts(prev => prev.filter(c => c._id !== id));
    } catch (err) {
      setError("Failed to delete contact.");
    }
  };

  return (
    <Box>
      <Typography variant="h4" mb={2} color="primary">Contact Messages</Typography>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((c) => (
              <TableRow key={c._id}>
                <TableCell>{c.name}</TableCell>
                <TableCell>{c.email}</TableCell>
                <TableCell>{c.phone}</TableCell>
                <TableCell>{c.message}</TableCell>
                <TableCell>
                  <IconButton color="error" onClick={() => handleDelete(c._id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {contacts.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center">No messages found.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
