import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';
import { Box } from '@mui/material';

export default function PublicLayout() {
  return (
    <Box>
      <Navbar />
      <Box component="main" sx={{ minHeight: '80vh', p: 2 }}>
        <Outlet /> 
      </Box>
      <Footer />
    </Box>
  );
}
