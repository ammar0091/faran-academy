// src/pages/AdminFaculty.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Table, TableHead, TableBody, TableRow, TableCell, Button,
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Box
} from '@mui/material';

export default function AdminFaculty() {
  const [faculty, setFaculty] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editData, setEditData] = useState(null);
  const [form, setForm] = useState({
    name: '',
    role: '',
    subject: '',
    email: '',
    phone: '',
    profileImg: ''
  });

  useEffect(() => {
    fetchFaculty();
  }, []);

  const fetchFaculty = () => {
    axios.get('http://localhost:5000/api/faculty')
      .then(res => setFaculty(res.data))
      .catch(console.error);
  };

  const handleOpenAdd = () => {
    setForm({ name: '', role: '', subject: '', email: '', phone: '', profileImg: '' });
    setEditData(null);
    setOpenDialog(true);
  };

  const handleOpenEdit = (f) => {
    setForm(f);
    setEditData(f._id);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
    setEditData(null);
  };

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      if (editData) {
        await axios.put(`http://localhost:5000/api/faculty/${editData}`, form);
      } else {
        await axios.post('http://localhost:5000/api/faculty', form);
      }
      fetchFaculty();
      handleClose();
    } catch (err) {
      alert('Failed to save faculty member. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this faculty member?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/faculty/${id}`);
      fetchFaculty();
    } catch (err) {
      alert('Failed to delete faculty member.');
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Button variant="contained" onClick={handleOpenAdd} sx={{ mb: 2 }}>
        Add Faculty Member
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Subject</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Profile Image URL</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {faculty.map(f => (
            <TableRow key={f._id}>
              <TableCell>{f.name}</TableCell>
              <TableCell>{f.role}</TableCell>
              <TableCell>{f.subject}</TableCell>
              <TableCell>{f.email}</TableCell>
              <TableCell>{f.phone}</TableCell>
              <TableCell>{f.profileImg}</TableCell>
              <TableCell>
                <Button size="small" onClick={() => handleOpenEdit(f)}>Edit</Button>
                <Button size="small" color="error" onClick={() => handleDelete(f._id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={openDialog} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>{editData ? "Edit Faculty Member" : "Add Faculty Member"}</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            <TextField name="name" label="Name" value={form.name} onChange={handleChange} required />
            <TextField name="role" label="Role" value={form.role} onChange={handleChange} />
            <TextField name="subject" label="Subject" value={form.subject} onChange={handleChange} />
            <TextField name="email" label="Email" value={form.email} onChange={handleChange} type="email" />
            <TextField name="phone" label="Phone" value={form.phone} onChange={handleChange} />
            <TextField name="profileImg" label="Profile Image URL" value={form.profileImg} onChange={handleChange} />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">{editData ? "Update" : "Add"}</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
