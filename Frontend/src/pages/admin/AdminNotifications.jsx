    // src/pages/AdminNotifications.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Table, TableHead, TableBody, TableRow, TableCell, Button,
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Box
} from '@mui/material';

export default function AdminNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editData, setEditData] = useState(null);
  const [form, setForm] = useState({
    message: '',
    audience: 'all'  // 'all', 'students', 'faculty' etc.
  });

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = () => {
    axios.get('http://localhost:5000/api/notifications')
      .then(res => setNotifications(res.data))
      .catch(console.error);
  };

  const handleOpenAdd = () => {
    setForm({ message: '', audience: 'all' });
    setEditData(null);
    setOpenDialog(true);
  };

  const handleOpenEdit = (n) => {
    setForm({ message: n.message, audience: n.audience || 'all' });
    setEditData(n._id);
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
        await axios.put(`http://localhost:5000/api/notifications/${editData}`, form);
      } else {
        await axios.post('http://localhost:5000/api/notifications', form);
      }
      fetchNotifications();
      handleClose();
    } catch (err) {
      alert('Failed to save notification.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this notification?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/notifications/${id}`);
      fetchNotifications();
    } catch (err) {
      alert('Failed to delete notification.');
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Button variant="contained" onClick={handleOpenAdd} sx={{ mb: 2 }}>
        Add Notification
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Message</TableCell>
            <TableCell>Audience</TableCell>
            <TableCell>Push Date</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {notifications.map(n => (
            <TableRow key={n._id}>
              <TableCell>{n.message}</TableCell>
              <TableCell>{n.audience}</TableCell>
              <TableCell>{new Date(n.pushDate).toLocaleString()}</TableCell>
              <TableCell>
                <Button size="small" onClick={() => handleOpenEdit(n)}>Edit</Button>
                <Button size="small" color="error" onClick={() => handleDelete(n._id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={openDialog} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>{editData ? "Edit Notification" : "Add Notification"}</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            <TextField
              name="message"
              label="Message"
              multiline
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
            />
            <TextField
              select
              name="audience"
              label="Audience"
              value={form.audience}
              onChange={handleChange}
              SelectProps={{
                native: true
              }}
            >
              <option value="all">All</option>
              <option value="students">Students</option>
              <option value="faculty">Faculty</option>
            </TextField>
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
