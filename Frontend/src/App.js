import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import PublicLayout from './components/layouts/PublicLayout';
import AdminLayout from './components/layouts/AdminLayout';

// Route protection
import PrivateRoute from './components/PrivateRoute'; 
import SEO from './components/SEO';
import ScrollToTop from './components/ScrollToTop';
import { pageSeo } from './constants/common/seo';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Academics = lazy(() => import('./pages/Academics'));
const Admissions = lazy(() => import('./pages/Admissions'));
const Gallery = lazy(() => import('./pages/Gallery'));
const NewsEvents = lazy(() => import('./pages/NewsEvent'));
const Notification = lazy(() => import('./pages/Notification'));
const Enroll = lazy(() => import('./pages/Enrollment'));
const Contact = lazy(() => import('./pages/Contact'));
const AdminLogin = lazy(() => import('./pages/AdminLogin'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const AdminStudents = lazy(() => import('./pages/admin/AdminStudent'));
const AdminFaculty = lazy(() => import('./pages/admin/AdminFaculty'));
const AdminEvents = lazy(() => import('./pages/admin/AdminEvents'));
const AdminNotifications = lazy(() => import('./pages/admin/AdminNotifications'));
const AdminEnrollments = lazy(() => import('./pages/admin/AdminEnrollments'));
const AdminContacts = lazy(() => import('./pages/admin/AdminContacts'));
const AdminCourse = lazy(() => import('./pages/admin/AdminCourse'));

const withSeo = (Component, seo) => (
  <>
    <SEO {...seo} />
    <Component />
  </>
);

function App() {
  return (
    <Suspense fallback={null}>
      <ScrollToTop />
      <Routes>
        {/* Public routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={withSeo(Home, pageSeo.home)} />
          <Route path="/about" element={withSeo(About, pageSeo.about)} />
          <Route path="/academics" element={withSeo(Academics, pageSeo.academics)} />
          <Route path="/admissions" element={withSeo(Admissions, pageSeo.admissions)} />
          <Route path="/gallery" element={withSeo(Gallery, pageSeo.gallery)} />
          <Route path="/newsevents" element={withSeo(NewsEvents, pageSeo.newsEvents)} />
          <Route path="/notifications" element={withSeo(Notification, pageSeo.notifications)} />
          <Route path="/enroll" element={withSeo(Enroll, pageSeo.enroll)} />
          <Route path="/contact" element={withSeo(Contact, pageSeo.contact)} />
        </Route>

        {/* Admin login */}
        <Route path="/admin/login" element={withSeo(AdminLogin, pageSeo.adminLogin)} />

        {/* Admin routes with protection */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <SEO {...pageSeo.admin} />
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
    </Suspense>
  );
}

export default App;
