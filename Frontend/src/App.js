import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Public pages
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Admissions from './pages/Admissions';
import Gallery from './pages/Gallery';
import NewsEvents from './pages/NewsEvent';
import Notification from './pages/Notification';
import Enroll from './pages/Enrollment';
import Contact from './pages/Contact';

// Admin pages
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminStudents from './pages/admin/AdminStudent';
import AdminFaculty from './pages/admin/AdminFaculty';
import AdminEvents from './pages/admin/AdminEvents';
import AdminNotifications from './pages/admin/AdminNotifications';
import AdminEnrollments from './pages/admin/AdminEnrollments';
import AdminContacts from './pages/admin/AdminContacts';
import AdminCourse from './pages/admin/AdminCourse';


// Layouts
import PublicLayout from './components/layouts/PublicLayout';
import AdminLayout from './components/layouts/AdminLayout';

// Route protection
import PrivateRoute from './components/PrivateRoute'; 
// aaa

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/newsevents" element={<NewsEvents />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Admin login */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* Admin routes with protection */}
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <AdminLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="students" element={<AdminStudents />} />
        <Route path="faculty" element={<AdminFaculty />} />
        <Route path="events" element={<AdminEvents />} />
        <Route path="notifications" element={<AdminNotifications />} />
        <Route path="enroll" element={<AdminEnrollments />} />
        <Route path="course" element={<AdminCourse/>} />
        <Route path="contact" element={<AdminContacts />} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Route>

      {/* Catch all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
