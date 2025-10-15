// src/pages/AdminEvents.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Table, TableHead, TableBody, TableRow, TableCell, Button,
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Box
} from '@mui/material';

export default function AdminEvents() {
  const [events, setEvents] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editData, setEditData] = useState(null);
  const [form, setForm] = useState({
    title: '',
    description: '',
    date: '',
    images: ''
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    axios.get('http://localhost:5000/api/events')
      .then(res => setEvents(res.data))
      .catch(console.error);
  };

  const handleOpenAdd = () => {
    setForm({ title: '', description: '', date: '', images: '' });
    setEditData(null);
    setOpenDialog(true);
  };

  const handleOpenEdit = (e) => {
    setForm({
      ...e,
      date: e.date ? new Date(e.date).toISOString().slice(0, 10) : '',
      images: e.images ? e.images.join(', ') : ''
    });
    setEditData(e._id);
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
    const payload = {
      ...form,
      images: form.images.split(',').map(s => s.trim()).filter(Boolean)
    };
    try {
      if (editData) {
        await axios.put(`http://localhost:5000/api/events/${editData}`, payload);
      } else {
        await axios.post('http://localhost:5000/api/events', payload);
      }
      fetchEvents();
      handleClose();
    } catch (err) {
      alert('Failed to save event. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this event?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/events/${id}`);
      fetchEvents();
    } catch (err) {
      alert('Failed to delete event.');
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Button variant="contained" onClick={handleOpenAdd} sx={{ mb: 2 }}>
        Add Event
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Images (URLs)</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map(event => (
            <TableRow key={event._id}>
              <TableCell>{event.title}</TableCell>
              <TableCell>{event.description}</TableCell>
              <TableCell>{new Date(event.date).toLocaleDateString()}</TableCell>
              <TableCell>{event.images ? event.images.join(', ') : ''}</TableCell>
              <TableCell>
                <Button size="small" onClick={() => handleOpenEdit(event)}>Edit</Button>
                <Button size="small" color="error" onClick={() => handleDelete(event._id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={openDialog} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>{editData ? "Edit Event" : "Add Event"}</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            <TextField name="title" label="Title" value={form.title} onChange={handleChange} required />
            <TextField name="description" label="Description" value={form.description} onChange={handleChange} multiline rows={3} />
            <TextField name="date" label="Date" type="date" value={form.date} onChange={handleChange} InputLabelProps={{ shrink: true }} required />
            <TextField name="images" label="Image URLs (comma separated)" value={form.images} onChange={handleChange} />
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
