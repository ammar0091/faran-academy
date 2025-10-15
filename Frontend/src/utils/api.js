import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Contact & Enrollment
export const sendContactMessage = (data) => axios.post(`${BASE_URL}/contact`, data);
export const submitEnrollment = (data) => axios.post(`${BASE_URL}/enroll`, data);

//  Student Routes
export const getStudents = () => axios.get(`${BASE_URL}/student`);
export const addStudent = (data) => axios.post(`${BASE_URL}/student`, data);
export const updateStudent = (id, data) => axios.put(`${BASE_URL}/student/${id}`, data);
export const deleteStudent = (id) => axios.delete(`${BASE_URL}/student/${id}`);

//  Faculty Routes
export const getFaculty = () => axios.get(`${BASE_URL}/faculty`);
export const addFaculty = (data) => axios.post(`${BASE_URL}/faculty`, data);
export const updateFaculty = (id, data) => axios.put(`${BASE_URL}/faculty/${id}`, data);
export const deleteFaculty = (id) => axios.delete(`${BASE_URL}/faculty/${id}`);

//  Events Routes
export const getEvents = () => axios.get(`${BASE_URL}/events`);
export const addEvent = (data) => axios.post(`${BASE_URL}/events`, data);
export const updateEvent = (id, data) => axios.put(`${BASE_URL}/events/${id}`, data);
export const deleteEvent = (id) => axios.delete(`${BASE_URL}/events/${id}`);

//  Notifications Routes
export const getNotifications = () => axios.get(`${BASE_URL}/notifications`);
export const addNotification = (data) => axios.post(`${BASE_URL}/notifications`, data);
export const updateNotification = (id, data) => axios.put(`${BASE_URL}/notifications/${id}`, data);
export const deleteNotification = (id) => axios.delete(`${BASE_URL}/notifications/${id}`);

//  Courses Routes
export const getCourses = () => axios.get(`${BASE_URL}/courses`);
export const addCourse = (data) => axios.post(`${BASE_URL}/courses`, data);
export const updateCourse = (id, data) => axios.put(`${BASE_URL}/courses/${id}`, data);
export const deleteCourse = (id) => axios.delete(`${BASE_URL}/courses/${id}`);

export default {
  sendContactMessage,
  submitEnrollment,
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
};

