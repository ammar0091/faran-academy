import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Box } from '@mui/material';

export default function PublicLayout() {
  return (
    <Box>
      <Navbar />
      <Box component="main" sx={{ minHeight: '80vh', p: 3 }}>
        <Outlet /> 
      </Box>
      <Footer />
    </Box>
  );
}
