import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
export const apiClient = axios.create({ baseURL: BASE_URL });

// Contact & Enrollment
export const sendContactMessage = (data) => apiClient.post('/contact', data);
export const getContactMessages = () => apiClient.get('/contact');
export const deleteContactMessage = (id) => apiClient.delete(`/contact/${id}`);
export const submitEnrollment = (data) => apiClient.post('/enroll', data);
export const getEnrollments = () => apiClient.get('/enroll');
export const deleteEnrollment = (id) => apiClient.delete(`/enroll/${id}`);

//  Student Routes
export const getStudents = () => apiClient.get('/student');
export const addStudent = (data) => apiClient.post('/student', data);
export const updateStudent = (id, data) => apiClient.put(`/student/${id}`, data);
export const deleteStudent = (id) => apiClient.delete(`/student/${id}`);

//  Faculty Routes
export const getFaculty = () => apiClient.get('/faculty');
export const addFaculty = (data) => apiClient.post('/faculty', data);
export const updateFaculty = (id, data) => apiClient.put(`/faculty/${id}`, data);
export const deleteFaculty = (id) => apiClient.delete(`/faculty/${id}`);

//  Events Routes
export const getEvents = () => apiClient.get('/events');
export const addEvent = (data) => apiClient.post('/events', data);
export const updateEvent = (id, data) => apiClient.put(`/events/${id}`, data);
export const deleteEvent = (id) => apiClient.delete(`/events/${id}`);

//  Notifications Routes
export const getNotifications = () => apiClient.get('/notifications');
export const addNotification = (data) => apiClient.post('/notifications', data);
export const updateNotification = (id, data) => apiClient.put(`/notifications/${id}`, data);
export const deleteNotification = (id) => apiClient.delete(`/notifications/${id}`);

//  Courses Routes
export const getCourses = () => apiClient.get('/courses');
export const addCourse = (data) => apiClient.post('/courses', data);
export const updateCourse = (id, data) => apiClient.put(`/courses/${id}`, data);
export const deleteCourse = (id) => apiClient.delete(`/courses/${id}`);

// Admin Routes
export const loginAdmin = (data) => apiClient.post('/admin/login', data);

const api = {
  apiClient,
  sendContactMessage,
  getContactMessages,
  deleteContactMessage,
  submitEnrollment,
  getEnrollments,
  deleteEnrollment,
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
  getFaculty,
  addFaculty,
  updateFaculty,
  deleteFaculty,
  getEvents,
  addEvent,
  updateEvent,
  deleteEvent,
  getNotifications,
  addNotification,
  updateNotification,
  deleteNotification,
  getCourses,
  addCourse,
  updateCourse,
  deleteCourse,
  loginAdmin,
};

export default api;

