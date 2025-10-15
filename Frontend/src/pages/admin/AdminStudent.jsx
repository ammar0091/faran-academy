import React, { useEffect, useState } from 'react';
import { getStudents, addStudent, updateStudent, deleteStudent } from '../../utils/api';
import {
  Table, TableHead, TableBody, TableRow, TableCell, Button,
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Box
} from '@mui/material';

export default function AdminStudents() {
  const [students, setStudents] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editData, setEditData] = useState(null);
  const [form, setForm] = useState({
    name: '', class: '', dob: '', rollNo: '', address: '', parentName: '', phone: ''
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    getStudents().then(res => setStudents(res.data)).catch(console.error);
  };

  const handleOpenAdd = () => {
    setForm({ name: '', class: '', dob: '', rollNo: '', address: '', parentName: '', phone: '' });
    setEditData(null);
    setOpenDialog(true);
  };

  const handleOpenEdit = (student) => {
    setForm(student);
    setEditData(student._id);
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
        await updateStudent(editData, form);
      } else {
        await addStudent(form);
      }
      fetchStudents();
      handleClose();
    } catch (err) {
      alert('Failed to save student.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Confirm delete?')) return;
    try {
      await deleteStudent(id);
      fetchStudents();
    } catch (err) {
      alert('Failed to delete student.');
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Button variant="contained" onClick={handleOpenAdd} sx={{ mb: 2 }}>
        Add Student
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell><TableCell>Class</TableCell><TableCell>DOB</TableCell>
            <TableCell>Roll No</TableCell><TableCell>Parent</TableCell><TableCell>Phone</TableCell><TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map(st => (
            <TableRow key={st._id}>
              <TableCell>{st.name}</TableCell>
              <TableCell>{st.class}</TableCell>
              <TableCell>{st.dob}</TableCell>
              <TableCell>{st.rollNo}</TableCell>
              <TableCell>{st.parentName}</TableCell>
              <TableCell>{st.phone}</TableCell>
              <TableCell>
                <Button size="small" onClick={() => handleOpenEdit(st)}>Edit</Button>
                <Button size="small" color="error" onClick={() => handleDelete(st._id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Add/Edit Dialog */}
      <Dialog open={openDialog} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>{editData ? "Edit Student" : "Add Student"}</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            <TextField name="name" label="Name" value={form.name} onChange={handleChange} required />
            <TextField name="class" label="Class" value={form.class} onChange={handleChange} required />
            <TextField name="dob" label="Date of Birth" type="date" value={form.dob || ''} onChange={handleChange} InputLabelProps={{ shrink: true }} />
            <TextField name="rollNo" label="Roll Number" value={form.rollNo} onChange={handleChange} />
            <TextField name="address" label="Address" value={form.address} onChange={handleChange} multiline rows={2} />
            <TextField name="parentName" label="Parent Name" value={form.parentName} onChange={handleChange} />
            <TextField name="phone" label="Phone" value={form.phone} onChange={handleChange} />
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
