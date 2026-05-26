import { lazy } from 'react';

const AdminDashboard = lazy(() =>
  import('../pages/admin/AdminDashboard')
);

const AdminStudents = lazy(() =>
  import('../pages/admin/AdminStudent')
);

const AdminFaculty = lazy(() =>
  import('../pages/admin/AdminFaculty')
);

const AdminEvents = lazy(() =>
  import('../pages/admin/AdminEvents')
);

const AdminNotifications = lazy(() =>
  import('../pages/admin/AdminNotifications')
);

const AdminEnrollments = lazy(() =>
  import('../pages/admin/AdminEnrollments')
);

const AdminContacts = lazy(() =>
  import('../pages/admin/AdminContacts')
);

const AdminCourse = lazy(() =>
  import('../pages/admin/AdminCourse')
);

export const adminRoutes = [
  {
    path: '',
    component: AdminDashboard,
  },
  {
    path: 'students',
    component: AdminStudents,
  },
  {
    path: 'faculty',
    component: AdminFaculty,
  },
  {
    path: 'events',
    component: AdminEvents,
  },
  {
    path: 'notifications',
    component: AdminNotifications,
  },
  {
    path: 'enroll',
    component: AdminEnrollments,
  },
  {
    path: 'course',
    component: AdminCourse,
  },
  {
    path: 'contact',
    component: AdminContacts,
  },
];